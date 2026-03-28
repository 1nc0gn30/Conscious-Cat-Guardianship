import { motion } from "motion/react";
import { Home, Clock, HeartHandshake, ShieldAlert, Eye, Ear, Activity } from "lucide-react";

export default function Rescue() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-16"
    >
      <header className="max-w-3xl space-y-4">
        <h1 className="text-4xl md:text-5xl font-serif text-stone-800">Proper Rescue Protocol</h1>
        <p className="text-stone-600 text-lg leading-relaxed">
          Bringing a new cat into your home is a <span className="font-bold underline decoration-rose-200">massive transition</span> for them. They do not understand they have been "saved." 
          To them, they have been <span className="italic">abducted</span> and placed in an alien territory. <span className="highlight">Patience, empathy</span>, and strict adherence to decompression protocols are <span className="font-bold text-rose-700">non-negotiable</span>.
        </p>
      </header>

      <section className="bg-stone-800 text-stone-50 p-8 md:p-12 rounded-[2.5rem] space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif text-sage-400">The 3-3-3 Rule</h2>
          <p className="text-stone-300 text-lg">
            This is the <span className="font-bold underline decoration-sage-500">universal timeline</span> for a rescue cat adjusting to a new environment. 
            <span className="italic highlight text-stone-900">Never force interaction</span> during this period. Let them come to you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-stone-700/50 p-8 rounded-3xl border border-stone-600 space-y-4">
            <div className="text-sage-400 font-serif text-3xl mb-2">3 Days</div>
            <h3 className="font-medium text-xl text-stone-100">Decompression</h3>
            <p className="text-stone-300 leading-relaxed">
              They will be <span className="font-bold text-rose-300">terrified</span>. They may hide under furniture, refuse to eat, or hiss. 
              Keep them in a single, quiet <span className="highlight text-stone-900">"base camp"</span> room. Do not force them out. Just <span className="italic underline">sit quietly</span> in the room reading a book so they get used to your presence.
            </p>
          </div>

          <div className="bg-stone-700/50 p-8 rounded-3xl border border-stone-600 space-y-4">
            <div className="text-sage-400 font-serif text-3xl mb-2">3 Weeks</div>
            <h3 className="font-medium text-xl text-stone-100">Learning Routine</h3>
            <p className="text-stone-300 leading-relaxed">
              They start to realize they are <span className="font-bold text-sage-300 underline decoration-sage-500">safe</span>. They will explore more of the house, figure out feeding times, 
              and may start <span className="italic">initiating play</span> or seeking affection. Boundaries are still being tested, and they may still <span className="highlight text-stone-900">startle easily</span>.
            </p>
          </div>

          <div className="bg-stone-700/50 p-8 rounded-3xl border border-stone-600 space-y-4">
            <div className="text-sage-400 font-serif text-3xl mb-2">3 Months</div>
            <h3 className="font-medium text-xl text-stone-100">Feeling at Home</h3>
            <p className="text-stone-300 leading-relaxed">
              <span className="font-bold highlight text-stone-900">True personality emerges.</span> They feel a sense of ownership over their territory and trust their guardian. 
              The bond is <span className="italic underline decoration-sage-400">solidifying</span>. They are finally relaxed.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-serif text-stone-800 border-b border-stone-200 pb-4">Feline Body Language 101</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-stone-800">
              <Activity className="text-sage-600" />
              <h3 className="font-serif font-medium text-xl">The Tail</h3>
            </div>
            <ul className="space-y-3 text-stone-600 text-sm">
              <li><strong>Straight up (Question mark):</strong> Happy, friendly, greeting.</li>
              <li><strong>Puffed up (Bottlebrush):</strong> Terrified, trying to look bigger.</li>
              <li><strong>Low/Tucked:</strong> Fearful, submissive.</li>
              <li><strong>Thrashing/Thumping:</strong> Highly agitated, overstimulated. STOP petting immediately.</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-stone-800">
              <Ear className="text-sage-600" />
              <h3 className="font-serif font-medium text-xl">The Ears</h3>
            </div>
            <ul className="space-y-3 text-stone-600 text-sm">
              <li><strong>Forward:</strong> Alert, interested, happy.</li>
              <li><strong>Sideways (Airplane ears):</strong> Anxious, nervous, unsure.</li>
              <li><strong>Pinned flat back:</strong> Extremely angry or terrified. Ready to fight or flee.</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-stone-800">
              <Eye className="text-sage-600" />
              <h3 className="font-serif font-medium text-xl">The Eyes</h3>
            </div>
            <ul className="space-y-3 text-stone-600 text-sm">
              <li><strong>Slow Blinking:</strong> "I trust you." Return the slow blink to show you are not a threat.</li>
              <li><strong>Dilated Pupils (Large black):</strong> Fear, excitement, or low light. If accompanied by flat ears, it's fear.</li>
              <li><strong>Hard Stare:</strong> A challenge or threat in cat language. Do not stare down a nervous cat.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-serif text-stone-800 border-b border-stone-200 pb-4">Step-by-Step Integration (The Jackson Galaxy Method)</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-6">
            <div className="w-14 h-14 rounded-full bg-stone-200 flex items-center justify-center shrink-0 text-stone-600">
              <Home size={28} />
            </div>
            <div className="space-y-3">
              <h3 className="font-serif font-medium text-xl text-stone-800">1. The Base Camp</h3>
              <p className="text-stone-600 leading-relaxed">
                Set up a small, quiet room (like a bathroom or spare bedroom) with their litter box, food, water (separated!), 
                and hiding spots. A whole house is too overwhelming for a new cat. Let them establish this as their safe zone.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-14 h-14 rounded-full bg-stone-200 flex items-center justify-center shrink-0 text-stone-600">
              <ShieldAlert size={28} />
            </div>
            <div className="space-y-3">
              <h3 className="font-serif font-medium text-xl text-stone-800">2. Site Swapping</h3>
              <p className="text-stone-600 leading-relaxed">
                If you have other pets, do not let them see each other immediately. Swap bedding between the new cat 
                and resident pets. Then, let the new cat explore the house while the resident cat is in the base camp. This mixes their scents.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-14 h-14 rounded-full bg-stone-200 flex items-center justify-center shrink-0 text-stone-600">
              <Clock size={28} />
            </div>
            <div className="space-y-3">
              <h3 className="font-serif font-medium text-xl text-stone-800">3. Feeding Across the Barrier</h3>
              <p className="text-stone-600 leading-relaxed">
                Feed both cats on opposite sides of a closed door. Gradually move the bowls closer to the door over several days. 
                Then, use a baby gate or crack the door so they can see each other while eating. This builds a positive association (food = other cat).
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-14 h-14 rounded-full bg-stone-200 flex items-center justify-center shrink-0 text-stone-600">
              <HeartHandshake size={28} />
            </div>
            <div className="space-y-3">
              <h3 className="font-serif font-medium text-xl text-stone-800">4. Eat, Play, Love</h3>
              <p className="text-stone-600 leading-relaxed">
                Allow short, supervised interactions. Distract them with wand toys rather than letting them 
                stare at each other. End the session on a positive note before any hissing or swatting occurs. Gradually increase the time they spend together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-rose-50 border border-rose-200 p-8 rounded-3xl">
        <h3 className="text-2xl font-serif text-rose-900 mb-4">Crucial Safety Warning: Toxic Hazards</h3>
        <p className="text-rose-800 leading-relaxed mb-4">
          Before bringing a cat home, you must "cat-proof" your environment. Cats are highly susceptible to toxins that are harmless to humans or dogs.
        </p>
        <ul className="space-y-2 text-rose-800 list-disc pl-6">
          <li><strong>Lilies:</strong> ALL parts of the lily plant (pollen, leaves, water in the vase) are highly toxic and cause fatal kidney failure within hours. Never allow lilies in a home with cats.</li>
          <li><strong>Essential Oils:</strong> Diffusing essential oils (like eucalyptus, tea tree, citrus, peppermint) can cause severe respiratory distress and liver failure. Cats lack the liver enzyme to break down phenols.</li>
          <li><strong>Human Medications:</strong> Tylenol (acetaminophen) is deadly to cats. Keep all medications locked away.</li>
          <li><strong>Strings and HairTies:</strong> If swallowed, these cause linear foreign body obstructions in the intestines, requiring emergency surgery.</li>
        </ul>
      </section>

    </motion.div>
  );
}
