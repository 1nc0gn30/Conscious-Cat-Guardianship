import { motion, AnimatePresence } from "motion/react";
import { Info, AlertOctagon, Sparkles, Loader2, Search, Quote, RefreshCw, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { breedImageOverrides } from "@/src/data/breedImageOverrides";
import BreedFeedbackForm from "@/src/components/BreedFeedbackForm";

interface Breed {
  id: string;
  name: string;
  identifier: string;
  tips: string;
  image: string;
  origin?: string;
  life_span?: string;
  weight?: string;
  isSpecial?: boolean;
}

const createBreedPlaceholderImage = (breedName: string) => {
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="55%" stop-color="#1f2937"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#86efac"/>
      <stop offset="100%" stop-color="#34d399"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="900" fill="url(#bg)"/>
  <circle cx="980" cy="170" r="230" fill="#ffffff" opacity="0.05"/>
  <circle cx="210" cy="760" r="260" fill="#ffffff" opacity="0.04"/>

  <g transform="translate(600 430)">
    <path d="M-170,-20 L-90,-190 L-20,-35" fill="#0b1220" stroke="#7dd3fc" stroke-opacity="0.35" stroke-width="7"/>
    <path d="M170,-20 L90,-190 L20,-35" fill="#0b1220" stroke="#7dd3fc" stroke-opacity="0.35" stroke-width="7"/>
    <ellipse cx="0" cy="95" rx="210" ry="210" fill="#0b1220" stroke="url(#accent)" stroke-opacity="0.8" stroke-width="10"/>
    <circle cx="-70" cy="70" r="14" fill="#a7f3d0"/>
    <circle cx="70" cy="70" r="14" fill="#a7f3d0"/>
    <path d="M0,105 l-18,18 h36 z" fill="#a7f3d0"/>
    <path d="M-42,142 q42,30 84,0" fill="none" stroke="#a7f3d0" stroke-width="7" stroke-linecap="round"/>
    <path d="M-230,110 q90,10 170,30" fill="none" stroke="#cbd5e1" stroke-opacity="0.5" stroke-width="5" stroke-linecap="round"/>
    <path d="M-230,145 q100,0 175,20" fill="none" stroke="#cbd5e1" stroke-opacity="0.45" stroke-width="5" stroke-linecap="round"/>
    <path d="M60,140 q95,-20 175,-25" fill="none" stroke="#cbd5e1" stroke-opacity="0.5" stroke-width="5" stroke-linecap="round"/>
    <path d="M60,170 q90,5 170,20" fill="none" stroke="#cbd5e1" stroke-opacity="0.45" stroke-width="5" stroke-linecap="round"/>
  </g>

  <text x="80" y="90" fill="#e2e8f0" font-family="Georgia, 'Times New Roman', serif" font-size="30" letter-spacing="1.5">
    Conscious Cat Guardianship
  </text>
  <text x="80" y="800" fill="#ffffff" font-family="Georgia, 'Times New Roman', serif" font-size="68" font-weight="600">
    ${breedName}
  </text>
  <text x="80" y="850" fill="#cbd5e1" font-family="Arial, sans-serif" font-size="28">
    No official breed photo from API - care information is still accurate.
  </text>
</svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg.trim())}`;
};

const createSpecialCatIllustration = (
  title: string,
  subtitle: string,
  catFill: string
) => {
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#111827"/>
      <stop offset="100%" stop-color="#1f2937"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="900" fill="url(#bg)"/>
  <circle cx="1020" cy="140" r="210" fill="#ffffff" opacity="0.05"/>
  <g transform="translate(600 430)">
    <path d="M-190,-10 L-90,-190 L-35,-30" fill="${catFill}" />
    <path d="M190,-10 L90,-190 L35,-30" fill="${catFill}" />
    <ellipse cx="0" cy="100" rx="220" ry="220" fill="${catFill}" />
    <circle cx="-70" cy="80" r="11" fill="#d1fae5" opacity="0.9"/>
    <circle cx="70" cy="80" r="11" fill="#d1fae5" opacity="0.9"/>
    <path d="M0,110 l-16,15 h32 z" fill="#d1fae5"/>
    <path d="M-40,145 q40,25 80,0" fill="none" stroke="#d1fae5" stroke-width="6" stroke-linecap="round"/>
  </g>
  <text x="80" y="96" fill="#e5e7eb" font-family="Georgia, 'Times New Roman', serif" font-size="30">
    Conscious Cat Guardianship
  </text>
  <text x="80" y="790" fill="#ffffff" font-family="Georgia, 'Times New Roman', serif" font-size="66" font-weight="600">
    ${title}
  </text>
  <text x="80" y="842" fill="#d1d5db" font-family="Arial, sans-serif" font-size="30">
    ${subtitle}
  </text>
</svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg.trim())}`;
};

const googleBreedImagesUrl = (breedName: string) =>
  `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(`${breedName} cat`)}`;

const specialBreeds: Breed[] = [
  {
    id: "dsh",
    name: "Domestic Shorthair (The Rescue Standard)",
    identifier: "Mixed ancestry, infinite coat colors and patterns. The 'mutt' of the cat world.",
    tips: "The healthiest and most robust of all cats due to extreme genetic diversity. Their personalities range wildly. Adopting a DSH saves a life and boycotts unethical breeding practices. They are the ultimate feline companion.",
    image: createSpecialCatIllustration(
      "Domestic Shorthair",
      "Rescue-first icon with wide phenotype range",
      "#334155"
    ),
    isSpecial: true
  },
  {
    id: "black-cat",
    name: "Black Cat (The 'Void')",
    identifier: "Solid black coat, often with striking gold or green eyes. Can be any breed but most commonly Domestic Shorthair.",
    tips: "Black cats are statistically the least likely to be adopted due to outdated superstitions. In reality, they are often the most affectionate and 'talkative' companions. They are the unsung heroes of the rescue world.",
    image: createSpecialCatIllustration(
      "Black Cat",
      "The Void - often overlooked, always iconic",
      "#020617"
    ),
    isSpecial: true
  }
];

export default function Breeds() {
  const [apiBreeds, setApiBreeds] = useState<Breed[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [catFact, setCatFact] = useState<string>("");
  const [factLoading, setFactLoading] = useState(false);
  const [randomImages, setRandomImages] = useState<any[]>([]);
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [feedbackBreed, setFeedbackBreed] = useState<string>("");

  const fetchFact = async () => {
    setFactLoading(true);
    try {
      const response = await fetch("/api/cat/fact");
      const data = await response.json();
      setCatFact(data.fact);
    } catch (err) {
      console.error("Error fetching cat fact:", err);
    } finally {
      setFactLoading(false);
    }
  };

  const fetchRandomImages = async () => {
    setGalleryLoading(true);
    try {
      const response = await fetch("/api/cat/images?limit=8");
      const data = await response.json();
      setRandomImages(data);
    } catch (err) {
      console.error("Error fetching random images:", err);
    } finally {
      setGalleryLoading(false);
    }
  };

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch("/api/cat/breeds");
        if (!response.ok) throw new Error("Failed to fetch breeds");
        const data = await response.json();
        
        const formattedBreeds: Breed[] = data.map((b: any) => ({
          id: b.id,
          name: b.name,
          identifier: b.temperament || "Unique personality and traits.",
          tips: b.description || "A wonderful feline companion with specific needs.",
          image: breedImageOverrides[b.id] || b.image?.url || createBreedPlaceholderImage(b.name),
          origin: b.origin,
          life_span: b.life_span,
          weight: b.weight?.imperial + " lbs",
        }));

        setApiBreeds(formattedBreeds);
      } catch (err) {
        console.error("Error fetching breeds:", err);
        setError("Could not load the feline compendium. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBreeds();
    fetchFact();
    fetchRandomImages();
  }, []);

  const allBreeds = [...specialBreeds, ...apiBreeds];
  const filteredBreeds = allBreeds.filter(b => 
    b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.identifier.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const jumpToFeedback = (breedName: string) => {
    setFeedbackBreed(breedName);
    const topForm = document.getElementById("breed-feedback-top");
    if (topForm) {
      topForm.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-12 relative"
    >
      {/* Decorative SVG-like background element */}
      <div className="absolute top-0 right-0 -z-10 opacity-5 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          <path d="M100 20V180M20 100H180" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <header className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-sage-700 mb-2">
          <Sparkles size={20} />
          <span className="text-xs font-bold uppercase tracking-[0.2em]">The Feline Compendium</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif text-stone-800">Feline Breeds</h1>
        <p className="text-stone-600 text-lg leading-relaxed">
          While we strongly advocate for <span className="highlight italic underline decoration-sage-300">rescuing mixed-breed cats</span> (Domestic Shorthairs), 
          understanding specific breed traits is <span className="font-bold">crucial</span> for providing appropriate care and 
          recognizing <span className="underline decoration-rose-200">genetic predispositions</span> to illness.
        </p>
      </header>

      <BreedFeedbackForm
        formId="breed-feedback-top"
        title="Spot a Wrong Image or Description?"
        subtitle="Report issues, suggest edits, or request new breeds. Your feedback keeps this guide useful."
        preferredBreedName={feedbackBreed}
      />

      {/* Cat Fact Banner */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-stone-800 text-stone-100 p-8 rounded-[2rem] shadow-xl relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Quote size={120} />
        </div>
        <div className="relative z-10 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-sage-400">Did you know?</h3>
            <button 
              onClick={fetchFact}
              disabled={factLoading}
              className="p-2 hover:bg-white/10 rounded-full transition-colors disabled:opacity-50"
            >
              <RefreshCw size={16} className={factLoading ? "animate-spin" : ""} />
            </button>
          </div>
          <AnimatePresence mode="wait">
            <motion.p 
              key={catFact}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-xl md:text-2xl font-serif italic leading-relaxed"
            >
              {catFact || "Loading feline wisdom..."}
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>

      <div className="bg-sage-50 border border-sage-200 p-8 rounded-3xl flex gap-6 items-start">
        <AlertOctagon className="text-sage-700 shrink-0 mt-1" size={32} />
        <div className="space-y-3">
          <h3 className="font-serif text-2xl text-sage-900">A Note on Ethical Breeding</h3>
          <p className="text-sage-800 leading-relaxed">
            Many purebred cats suffer from <span className="font-bold text-rose-700 underline decoration-rose-300">severe genetic health issues</span> due to selective breeding for extreme aesthetics 
            (e.g., the brachycephalic faces of Persians causing breathing issues, or the cartilage defects in Scottish Folds causing <span className="italic">chronic pain</span>). 
            If you must have a specific breed, seek out <span className="highlight">breed-specific rescues</span>. If you buy from a breeder, ensure they perform 
            <span className="font-bold underline decoration-sage-400">comprehensive genetic testing</span> (like echocardiograms for HCM) and do not breed cats with known deformities.
          </p>
        </div>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
        <input 
          type="text"
          placeholder="Search breeds, origins, or temperaments..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-sage-200 transition-all bg-white/50 backdrop-blur-sm"
        />
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 space-y-4">
          <Loader2 className="text-sage-700 animate-spin" size={48} />
          <p className="text-stone-500 font-serif italic">Consulting the archives...</p>
        </div>
      ) : error ? (
        <div className="bg-rose-50 border border-rose-100 p-8 rounded-3xl text-center">
          <p className="text-rose-800">{error}</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {filteredBreeds.map((breed, index) => (
            <motion.div 
              key={breed.name} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className={`bg-white rounded-3xl overflow-hidden border ${breed.isSpecial ? 'border-sage-200 ring-1 ring-sage-100' : 'border-stone-200'} shadow-sm flex flex-col hover:shadow-md transition-all duration-300 group`}
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={breed.image} 
                  alt={breed.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = createBreedPlaceholderImage(breed.name);
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-serif font-medium text-white drop-shadow-sm">
                      {breed.name}
                      {breed.isSpecial && <Sparkles className="inline ml-2 text-sage-300" size={18} />}
                    </h3>
                    {breed.origin && (
                      <p className="text-stone-300 text-xs uppercase tracking-widest font-medium">{breed.origin}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-8 space-y-6 flex-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">Lifespan</h4>
                    <p className="text-stone-800 text-sm font-medium">{breed.life_span || "12-15"} years</p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">Weight</h4>
                    <p className="text-stone-800 text-sm font-medium">{breed.weight || "8-12 lbs"}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 border-l-2 border-sage-700 pl-2">Identifiers</h4>
                  <p className="text-stone-700 leading-relaxed text-sm">{breed.identifier}</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 border-l-2 border-sage-700 pl-2">Care Tips & Health</h4>
                  <p className="text-stone-600 leading-relaxed text-sm italic">"{breed.tips}"</p>
                </div>
                <a
                  href={googleBreedImagesUrl(breed.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-sage-700 hover:text-sage-900 transition-colors"
                >
                  More {breed.name} photos
                  <ExternalLink size={14} />
                </a>
                <button
                  type="button"
                  onClick={() => jumpToFeedback(breed.name)}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-stone-600 hover:text-stone-900 transition-colors"
                >
                  Report or suggest for this breed
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Random Cat Gallery */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-serif text-stone-800">Random Cat Gallery</h2>
          <button 
            onClick={() => fetchRandomImages()}
            disabled={galleryLoading}
            className="flex items-center gap-2 px-4 py-2 bg-sage-700 text-white rounded-xl hover:bg-sage-800 transition-colors disabled:opacity-50"
          >
            <RefreshCw size={16} className={galleryLoading ? "animate-spin" : ""} />
            Refresh Gallery
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {randomImages.map((img, i) => (
            <motion.div 
              key={img.id + i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="aspect-square rounded-2xl overflow-hidden border border-stone-200 shadow-sm group relative"
            >
              <img 
                src={img.url} 
                alt="Random Cat" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-xs font-medium uppercase tracking-widest">Meow!</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <BreedFeedbackForm
        formId="breed-feedback-bottom"
        title="Missed the Feedback Form Above?"
        subtitle="Use this second form to report wrong images, wrong descriptions, or breeds we should add."
        preferredBreedName={feedbackBreed}
      />

      {/* Bottom decorative element */}
      <div className="pt-12 flex justify-center opacity-20">
        <div className="w-24 h-[1px] bg-stone-400" />
        <div className="mx-4 text-stone-400"><Sparkles size={16} /></div>
        <div className="w-24 h-[1px] bg-stone-400" />
      </div>
    </motion.div>
  );
}
