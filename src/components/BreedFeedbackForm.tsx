import { FormEvent, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageSquareWarning, Send } from "lucide-react";

const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const LAST_SUBMIT_STORAGE_KEY = "breed_feedback_last_submit_at";

type Props = {
  title: string;
  subtitle: string;
  initialBreedName?: string;
  formId: string;
  preferredBreedName?: string;
};

const readLastSubmitAt = () => {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(LAST_SUBMIT_STORAGE_KEY);
  if (!raw) return null;
  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : null;
};

const canSubmitNow = () => {
  const last = readLastSubmitAt();
  if (!last) return true;
  return Date.now() - last >= ONE_DAY_MS;
};

const getWaitMessage = () => {
  const last = readLastSubmitAt();
  if (!last) return null;

  const msLeft = ONE_DAY_MS - (Date.now() - last);
  if (msLeft <= 0) return null;

  const hours = Math.ceil(msLeft / (60 * 60 * 1000));
  return `You can submit again in about ${hours} hour${hours === 1 ? "" : "s"}.`;
};

export default function BreedFeedbackForm({
  title,
  subtitle,
  initialBreedName = "",
  formId,
  preferredBreedName,
}: Props) {
  const navigate = useNavigate();
  const [breedName, setBreedName] = useState(initialBreedName);
  const [issueType, setIssueType] = useState("image_wrong");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const waitMessage = useMemo(() => getWaitMessage(), [submitting]);
  const submissionBlocked = !canSubmitNow();

  useEffect(() => {
    if (preferredBreedName) {
      setBreedName(preferredBreedName);
    }
  }, [preferredBreedName]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submissionBlocked) {
      setStatusMessage(waitMessage || "One submission per day is enabled.");
      return;
    }

    setSubmitting(true);
    setStatusMessage(null);

    const payload = new URLSearchParams({
      "form-name": "breed-feedback",
      breed_name: breedName,
      issue_type: issueType,
      details: message,
      page_url: typeof window !== "undefined" ? window.location.href : "",
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: payload.toString(),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form.");
      }

      window.localStorage.setItem(LAST_SUBMIT_STORAGE_KEY, String(Date.now()));
      navigate("/thanks");
    } catch (error) {
      console.error("Breed feedback submission failed", error);
      setStatusMessage("Submission failed. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id={formId} className="rounded-[2rem] border border-sage-200 bg-sage-50/70 p-6 md:p-8">
      <div className="flex items-start gap-3">
        <div className="mt-1 rounded-full bg-sage-700 text-white p-2">
          <MessageSquareWarning size={16} />
        </div>
        <div>
          <h3 className="font-serif text-2xl text-sage-900">{title}</h3>
          <p className="text-sage-800 mt-2 leading-relaxed">{subtitle}</p>
          <p className="text-xs text-sage-700 mt-2 uppercase tracking-[0.15em] font-bold">
            One report per day per browser
          </p>
        </div>
      </div>

      <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
        <label className="grid gap-1 text-sm font-medium text-stone-800">
          Breed name
          <input
            name="breed_name"
            value={breedName}
            onChange={(e) => setBreedName(e.target.value)}
            placeholder="Example: Abyssinian"
            className="rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-sage-300"
            required
          />
        </label>

        <label className="grid gap-1 text-sm font-medium text-stone-800">
          What should we fix?
          <select
            name="issue_type"
            value={issueType}
            onChange={(e) => setIssueType(e.target.value)}
            className="rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-sage-300"
            required
          >
            <option value="image_wrong">Image is wrong</option>
            <option value="description_wrong">Description is wrong</option>
            <option value="add_breed">Please add this breed</option>
            <option value="other_improvement">Other improvement</option>
          </select>
        </label>

        <label className="grid gap-1 text-sm font-medium text-stone-800">
          Details
          <textarea
            name="details"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            placeholder="Tell us what is incorrect or what we should add."
            className="rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-sage-300"
            required
          />
        </label>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button
            type="submit"
            disabled={submitting || submissionBlocked}
            className="inline-flex items-center gap-2 rounded-full bg-sage-800 px-5 py-3 text-white text-sm font-semibold hover:bg-sage-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={14} />
            {submitting ? "Sending..." : "Send feedback"}
          </button>
          {waitMessage && (
            <p className="text-sm text-stone-600">{waitMessage}</p>
          )}
          {statusMessage && !waitMessage && (
            <p className="text-sm text-rose-700">{statusMessage}</p>
          )}
        </div>
      </form>
    </section>
  );
}
