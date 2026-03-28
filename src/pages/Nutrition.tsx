import { motion } from "motion/react";
import { Info, AlertTriangle, Search } from "lucide-react";

export default function Nutrition() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-16"
    >
      <header className="max-w-3xl space-y-4">
        <h1 className="text-4xl md:text-5xl font-serif text-stone-800">Feline Nutrition</h1>
        <p className="text-stone-600 text-lg leading-relaxed">
          Cats are <span className="highlight italic underline decoration-sage-300">obligate carnivores</span>. They evolved in desert environments, getting almost all their hydration 
          directly from the <span className="font-bold">prey they consumed</span>. Respecting their biology means providing a <span className="underline decoration-blue-200">high-moisture</span>, 
          meat-based diet and <span className="font-bold text-rose-700 italic">eliminating</span> inappropriate carbohydrates.
        </p>
      </header>

      <section className="space-y-8">
        <h2 className="text-3xl font-serif text-stone-800 border-b border-stone-200 pb-4">Commercial Food Tiers</h2>
        
        <div className="space-y-6">
          <div className="p-8 bg-rose-50 border border-rose-100 rounded-3xl">
            <h3 className="text-xl font-serif font-semibold text-rose-900 mb-3">Worst: Supermarket Dry Kibble</h3>
            <p className="text-rose-800 leading-relaxed">
              Highly processed and <span className="font-bold underline decoration-rose-300">extremely low in moisture</span> (around 10%, whereas a cat's natural prey is 70-80% moisture). 
              This leads to <span className="italic">chronic mild dehydration</span>, which is a leading cause of <span className="font-bold text-rose-900">feline chronic kidney disease (CKD)</span> and urinary crystals. 
              Kibble is also packed with <span className="highlight">inappropriate carbohydrates</span> (corn, wheat, soy, potatoes) which cats lack the salivary amylase to properly digest, leading to obesity and diabetes.
            </p>
          </div>

          <div className="p-8 bg-amber-50 border border-amber-100 rounded-3xl">
            <h3 className="text-xl font-serif font-semibold text-amber-900 mb-3">Better: Canned Wet Food</h3>
            <p className="text-amber-800 leading-relaxed">
              Provides the <span className="font-bold underline decoration-amber-300">essential moisture</span> cats need. However, quality varies wildly. Many "grain-free" options substitute grains 
              with peas, lentils, or tapioca, which are still <span className="italic">unnecessary carbs</span>. Watch out for thickeners like <span className="font-bold text-rose-700">Carrageenan</span> 
              (linked to inflammation) and ambiguous ingredients like <span className="highlight">"meat by-products."</span> Look for named meat sources as the first ingredients.
            </p>
          </div>

          <div className="p-8 bg-sage-50 border border-sage-100 rounded-3xl">
            <h3 className="text-xl font-serif font-semibold text-sage-900 mb-3">Best: Human-Grade Raw or Gently Cooked</h3>
            <p className="text-sage-800 leading-relaxed">
              Commercial raw or gently cooked diets that are <span className="font-bold underline decoration-sage-300">AAFCO balanced</span>. These mimic a cat's natural prey diet, 
              providing high-quality, <span className="highlight italic">bioavailable protein</span>, natural moisture, and minimal processing. They result in smaller, 
              nearly <span className="italic underline">odorless stool</span>, healthier coats, and more stable energy levels.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center gap-4 border-b border-stone-200 pb-4">
          <Search className="text-stone-500" size={32} />
          <h2 className="text-3xl font-serif text-stone-800">How to Read a Pet Food Label</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
            <h3 className="font-serif font-medium text-xl mb-4 text-stone-800">The Name Game</h3>
            <ul className="space-y-4 text-stone-600">
              <li><strong>"Chicken Cat Food":</strong> Must contain at least 95% chicken (excluding water).</li>
              <li><strong>"Chicken Recipe" or "Dinner":</strong> Only needs to contain 25% chicken. The rest can be fillers.</li>
              <li><strong>"With Chicken":</strong> Only requires 3% chicken!</li>
              <li><strong>"Chicken Flavor":</strong> Requires 0% actual chicken meat, just enough flavoring to be detectable.</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
            <h3 className="font-serif font-medium text-xl mb-4 text-stone-800">Ingredient Splitting</h3>
            <p className="text-stone-600 leading-relaxed">
              Ingredients are listed by weight. Manufacturers often split a cheap carbohydrate into multiple forms 
              (e.g., "peas," "pea flour," "pea protein") so they appear lower on the list, allowing a meat ingredient 
              to appear first, even if the total weight of the peas far exceeds the meat.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-serif text-stone-800 border-b border-stone-200 pb-4">DIY Homemade Cat Food (FYI)</h2>
        
        <div className="bg-stone-800 text-stone-50 p-8 rounded-3xl flex gap-6 items-start">
          <AlertTriangle className="text-amber-400 shrink-0 mt-1" size={32} />
          <div className="space-y-3">
            <h3 className="font-serif text-2xl">Critical Warning</h3>
            <p className="text-stone-300 leading-relaxed">
              Making your own cat food is <span className="font-bold text-amber-400 underline decoration-amber-500">dangerous</span> if not done perfectly. Cats require exact amounts of essential 
              amino acids like <span className="highlight text-stone-900">Taurine</span>. Without it, they will <span className="italic">go blind</span> and suffer <span className="font-bold text-rose-400">fatal heart failure</span>. 
              Never feed a cat a vegan diet; it is <span className="underline decoration-stone-500">biologically impossible</span> for them to survive on it. If you make homemade food, 
              you <span className="font-bold">MUST</span> follow a recipe formulated by a board-certified veterinary nutritionist.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4">
            <h3 className="font-serif font-medium text-xl text-stone-800">The Ratios (PMR)</h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              The Prey Model Raw (PMR) diet aims to replicate a whole prey animal. The standard ratio is roughly:
            </p>
            <ul className="space-y-3 text-sm text-stone-600 list-disc pl-4">
              <li><strong>80% Muscle Meat:</strong> Includes heart (heart is a muscle, not a secreting organ).</li>
              <li><strong>10% Bone:</strong> Raw, edible bone (never cooked bones, which splinter and are fatal).</li>
              <li><strong>5% Liver:</strong> Essential for Vitamin A.</li>
              <li><strong>5% Other Secreting Organs:</strong> Kidney, spleen, pancreas.</li>
            </ul>
            <p className="text-stone-600 text-sm leading-relaxed mt-4">
              <strong>Calcium to Phosphorus Ratio:</strong> This must be strictly maintained between 1.1:1 and 1.3:1. 
              Too much phosphorus (all meat) without calcium (bone) will destroy their kidneys.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4">
            <h3 className="font-serif font-medium text-xl text-stone-800">Life Stages</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-stone-700">Kittens (0-1 Year)</h4>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Require significantly higher calories, protein, and calcium for bone growth. Need feeding 3-4 times a day. 
                  DIY recipes must use a verified pediatric premix supplement.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-700">Adults & Seniors</h4>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Standard maintenance diet. Seniors may need lower phosphorus if early-stage kidney disease is detected, 
                  but they still require high-quality, highly digestible protein to prevent muscle wasting.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-700">Supplements</h4>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Homemade diets usually require added Taurine (which degrades during grinding/freezing), Vitamin E, 
                  Vitamin B-complex, and Omega-3s (small oily fish or krill oil, not plant-based flaxseed which cats cannot convert).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
