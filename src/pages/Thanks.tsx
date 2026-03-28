import { motion } from "motion/react";
import { CheckCircle2, Heart, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Thanks() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="max-w-3xl mx-auto"
    >
      <div className="rounded-[2rem] border border-sage-200 bg-gradient-to-br from-sage-50 via-white to-stone-50 p-10 md:p-14 shadow-sm">
        <div className="inline-flex items-center gap-2 rounded-full border border-sage-300 px-4 py-1 text-sage-800 text-xs font-bold uppercase tracking-[0.2em]">
          <Heart size={14} />
          Feedback Received
        </div>

        <h1 className="mt-6 text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
          Thank You for Helping Improve the Cat Compendium
        </h1>

        <p className="mt-5 text-stone-700 leading-relaxed text-lg">
          Your report helps keep breed info accurate, ethical, and useful for future guardians.
          We read all submissions and use them to prioritize updates.
        </p>

        <div className="mt-8 flex items-center gap-3 rounded-2xl border border-sage-200 bg-white p-4 text-sage-900">
          <CheckCircle2 className="shrink-0" size={22} />
          <p className="text-sm md:text-base">
            Submission complete. You can send another report after 24 hours from this device.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/breeds"
            className="inline-flex items-center gap-2 rounded-full bg-sage-800 px-5 py-3 text-white text-sm font-semibold hover:bg-sage-700 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Breeds
          </Link>
          <Link
            to="/"
            className="inline-flex items-center rounded-full border border-stone-300 px-5 py-3 text-stone-800 text-sm font-semibold hover:bg-stone-100 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
