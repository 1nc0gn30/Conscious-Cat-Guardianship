import { motion } from "motion/react";
import { AlertCircle, Heart, ShieldCheck, Clock, DollarSign, Home as HomeIcon } from "lucide-react";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-16"
    >
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <h1 className="text-5xl md:text-6xl font-serif text-stone-800 leading-tight">
          The Myth of the <br />
          <span className="italic text-sage-800">Low-Maintenance</span> Pet.
        </h1>
        <p className="text-lg text-stone-600 leading-relaxed">
          For decades, cats have been marketed as the <span className="italic">"easy"</span> alternative to dogs. 
          This <span className="underline decoration-rose-200">misconception</span> has led to millions of deeply misunderstood, <span className="font-bold">chronically stressed</span>, 
          and under-stimulated animals. It's time to <span className="highlight">rethink feline guardianship</span> and acknowledge their complex needs.
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 space-y-4">
          <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mb-6">
            <AlertCircle size={24} />
          </div>
          <h3 className="text-xl font-serif font-medium text-stone-800">They Are Not "Easy"</h3>
          <p className="text-stone-600 text-sm leading-relaxed">
            Cats require <span className="font-bold">daily interactive play</span>, environmental enrichment, <span className="italic underline">meticulous</span> litter box hygiene, 
            and a highly specific diet. Neglecting these leads to <span className="text-rose-700">behavioral and medical issues</span> like idiopathic cystitis and depression.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 space-y-4">
          <div className="w-12 h-12 bg-sage-50 text-sage-700 rounded-full flex items-center justify-center mb-6">
            <ShieldCheck size={24} />
          </div>
          <h3 className="text-xl font-serif font-medium text-stone-800">Obligate Carnivores</h3>
          <p className="text-stone-600 text-sm leading-relaxed">
            Respecting a cat means respecting their <span className="highlight">biology</span>. They are apex micro-predators that require 
            <span className="font-bold">moisture-rich, meat-based diets</span> to survive and thrive. They <span className="italic underline decoration-rose-300">cannot be vegan</span>, and dry kibble severely compromises their kidneys.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 space-y-4">
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mb-6">
            <Heart size={24} />
          </div>
          <h3 className="text-xl font-serif font-medium text-stone-800">Consent Matters</h3>
          <p className="text-stone-600 text-sm leading-relaxed">
            Cats are <span className="font-bold">not toys</span>. They have strict boundaries. Learning to read their <span className="italic">body language</span> and 
            respecting their <span className="underline decoration-amber-200">autonomy</span> is the foundation of a strong bond. Forced affection <span className="font-bold text-rose-600">destroys trust</span>.
          </p>
        </div>
      </div>

      <section className="space-y-8">
        <h2 className="text-3xl font-serif text-stone-800 border-b border-stone-200 pb-4">The Reality of Guardianship</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-stone-800 font-medium text-lg">
              <DollarSign className="text-sage-700" /> The Financial Reality
            </div>
            <p className="text-stone-600 leading-relaxed">
              Cats are not cheap. High-quality, moisture-rich food costs significantly more than bulk kibble. 
              Annual vet visits, comprehensive bloodwork (especially for seniors), dental cleanings (which require anesthesia), 
              and emergency funds are non-negotiable. Expect to spend $1,000 - $2,000+ annually for proper care.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-stone-800 font-medium text-lg">
              <Clock className="text-sage-700" /> The Time Commitment
            </div>
            <p className="text-stone-600 leading-relaxed">
              A cat can live 15-20 years. They require daily active engagement. You cannot simply leave a bowl of food 
              and a clean litter box and expect a happy cat. They need you to simulate the "hunt" with wand toys for at least 
              15-30 minutes a day to prevent lethargy and behavioral acting out.
            </p>
          </div>
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3 text-stone-800 font-medium text-lg">
              <HomeIcon className="text-sage-700" /> Indoors vs. Outdoors
            </div>
            <p className="text-stone-600 leading-relaxed">
              Keeping cats indoors is crucial for their safety (cars, predators, diseases like FIV/FeLV) and for the protection 
              of local wildlife (cats are an invasive species that decimate bird populations). However, an indoor cat <strong>must</strong> 
              have their environment "catified." This means providing vertical space (cat trees, shelves), window perches, 
              and safe outdoor access via enclosed "catios" or harness training.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sage-900 text-stone-50 p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif">A Holistic Approach</h2>
          <p className="text-sage-100 leading-relaxed text-lg">
            True guardianship means looking at the whole animal. It's about providing a biologically 
            appropriate diet, creating a territory that satisfies their hunting instincts, and 
            understanding that every "bad behavior" is simply a cat trying to get a fundamental need met.
          </p>
        </div>
        <div className="absolute -right-20 -bottom-40 w-96 h-96 bg-sage-800 rounded-full blur-3xl opacity-50 pointer-events-none" />
      </section>
    </motion.div>
  );
}
