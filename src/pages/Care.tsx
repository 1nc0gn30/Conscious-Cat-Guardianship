import { motion } from "motion/react";
import { Droplets, Utensils, Box, Sparkles, Scissors, Moon } from "lucide-react";

export default function Care() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-16"
    >
      <header className="max-w-3xl space-y-4 relative">
        <div className="absolute -top-12 -left-12 w-24 h-24 border border-dashed border-stone-300 rounded-full opacity-50 animate-spin-slow" />
        <h1 className="text-4xl md:text-5xl font-serif text-stone-800">Understanding Cat Nature</h1>
        <p className="text-stone-600 text-lg leading-relaxed">
          To care for a cat properly, you must <span className="highlight italic">think like a cat</span>. Their wild instincts are entirely intact. 
          They are both <span className="font-bold underline decoration-rose-200">predator and prey</span>, which dictates almost all of their behavior.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-full border border-dashed border-blue-300 text-blue-600 flex items-center justify-center shrink-0 mt-1 transition-transform group-hover:rotate-180 duration-700">
              <Droplets size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded uppercase">Protocol 01</span>
                <h3 className="text-xl font-serif font-medium text-stone-800">Hydration & Water Placement</h3>
              </div>
              <p className="text-stone-600 leading-relaxed text-sm">
                In the wild, a predator will <span className="italic">not drink water near their fresh kill</span> to avoid contamination. 
                <span className="font-bold underline decoration-blue-200"> Keep your cat's water bowl in a completely different room than their food.</span> 
                Cats also prefer <span className="highlight">moving water</span>, as stagnant water in nature is often unsafe. Consider a stainless steel 
                or ceramic pet fountain. <span className="font-bold text-rose-700">Avoid plastic bowls entirely</span>, as they harbor bacteria and cause feline acne. 
                Bowls should be wide and shallow to prevent <span className="italic underline">"whisker fatigue"</span> (overstimulation of their highly sensitive whiskers).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-full border border-dashed border-amber-300 text-amber-600 flex items-center justify-center shrink-0 mt-1 transition-transform group-hover:rotate-180 duration-700">
              <Utensils size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded uppercase">Protocol 02</span>
                <h3 className="text-xl font-serif font-medium text-stone-800">Fresh Food Protocols</h3>
              </div>
              <p className="text-stone-600 leading-relaxed text-sm">
                Cats are <span className="font-bold">highly sensitive</span> to smell and bacteria. Wet food should <span className="italic underline decoration-amber-200">never sit out</span> for more than 
                30-60 minutes. Wash their food bowls with hot soapy water after <span className="highlight">every single meal</span>. 
                Never "top off" a bowl of dry food; the fats at the bottom will <span className="font-bold text-rose-600">go rancid</span> and contaminate the fresh food.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-full border border-dashed border-stone-400 text-stone-700 flex items-center justify-center shrink-0 mt-1 transition-transform group-hover:rotate-180 duration-700">
              <Box size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono font-bold text-stone-700 bg-stone-200 px-1.5 py-0.5 rounded uppercase">Protocol 03</span>
                <h3 className="text-xl font-serif font-medium text-stone-800">The Litter Box Rule</h3>
              </div>
              <p className="text-stone-600 leading-relaxed text-sm">
                The golden rule is <span className="font-bold text-stone-800 underline decoration-stone-300">N + 1</span> (one box per cat, plus one extra). 
                Boxes should be large (at least 1.5x the length of the cat), <span className="highlight">uncovered</span> (covered boxes trap ammonia odors and make cats feel cornered by potential predators), 
                and scooped <span className="italic underline">at least</span> once a day. Use unscented, clumping litter. A dirty box is the <span className="font-bold text-rose-700">#1 cause</span> of inappropriate elimination.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-1">
              <Sparkles size={24} />
            </div>
            <div>
              <h3 className="text-xl font-serif font-medium text-stone-800 mb-2">Environmental Enrichment</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                A bored cat is a <span className="font-bold text-rose-600">stressed cat</span>. They need <span className="highlight">vertical space</span> (cat trees, shelves) to survey their territory safely. 
                They need scratching posts of various textures (sisal rope, corrugated cardboard) placed in <span className="italic underline decoration-emerald-200">socially significant areas</span> (like next to the couch). 
                Playtime must mimic the <span className="font-bold">hunt-catch-kill-eat</span> cycle. Use a wand toy to simulate a bird or mouse, let them catch it, and immediately feed them a meal or treat.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-1">
              <Scissors size={24} />
            </div>
            <div>
              <h3 className="text-xl font-serif font-medium text-stone-800 mb-2">The Cruelty of Declawing</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                Declawing (onychectomy) is <span className="font-bold text-rose-700 underline decoration-rose-300">not a nail trim</span>. It is the surgical <span className="italic">amputation</span> of the last bone of each toe. 
                It alters the way a cat walks, leading to <span className="font-bold">chronic back and joint pain</span>. Because they lose their primary defense mechanism, 
                declawed cats often resort to biting. The pain in their paws also frequently leads to litter box avoidance. 
                <span className="highlight">Never declaw a cat.</span> Provide appropriate scratchers and trim their nails every 2-3 weeks.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-1">
              <Moon size={24} />
            </div>
            <div>
              <h3 className="text-xl font-serif font-medium text-stone-800 mb-2">Crepuscular Rhythms</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                Cats are not nocturnal; they are <span className="highlight italic">crepuscular</span>, meaning they are most active at dawn and dusk. 
                This is when their natural prey (mice, birds) are active. If your cat wakes you up at 4 AM, they are following their <span className="font-bold underline decoration-indigo-200">biology</span>. 
                To combat this, engage in a <span className="italic">heavy play session</span> right before your bedtime, followed by a large meal. This resets their cycle.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-stone-100 p-8 md:p-10 rounded-3xl border border-stone-200 mt-8">
        <h3 className="text-2xl font-serif font-medium text-stone-800 mb-4">The Myth of "Spite"</h3>
        <p className="text-stone-600 leading-relaxed text-lg">
          Cats do not act out of spite, revenge, or anger. They do not pee on your bed because they are mad at you. 
          If a cat is eliminating outside the box, scratching furniture, or acting aggressively, they are experiencing stress, 
          medical pain (like a UTI or arthritis), or a lack of appropriate outlets for their natural instincts. 
          It is our job to investigate the environment and their health, not punish the animal.
        </p>
      </div>
    </motion.div>
  );
}
