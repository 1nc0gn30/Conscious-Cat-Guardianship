import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Compass, Home, BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-3xl mx-auto"
    >
      <div className="rounded-[2rem] border border-stone-200 bg-white p-10 md:p-14 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-stone-500">404</p>
        <h1 className="mt-4 text-4xl md:text-5xl font-serif text-stone-900">Page Not Found</h1>
        <p className="mt-5 text-stone-600 text-lg leading-relaxed">
          This page does not exist or may have been moved. Use one of the links below to continue.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-sage-800 px-5 py-3 text-white text-sm font-semibold hover:bg-sage-700 transition-colors"
          >
            <Home size={16} />
            Go Home
          </Link>
          <Link
            to="/breeds"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 px-5 py-3 text-stone-800 text-sm font-semibold hover:bg-stone-100 transition-colors"
          >
            <BookOpen size={16} />
            Browse Breeds
          </Link>
        </div>

        <div className="mt-8 inline-flex items-center gap-2 text-stone-500 text-sm">
          <Compass size={15} />
          Conscious Cat Guardianship
        </div>
      </div>
    </motion.section>
  );
}
