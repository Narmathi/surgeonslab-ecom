import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import hero from "@/assets/hero.jpg";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-sky-50 to-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 py-20 md:px-10 lg:flex-row lg:py-28">
        {/* Left Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Innovative Medical Simulation Technology
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            Transforming
            <span className="text-sky-700"> Surgical Training </span>
            Through Innovation
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 lg:mx-0 mx-auto">
            SurgeonsLab develops advanced surgical simulation technologies that
            empower hospitals, universities and healthcare professionals with
            realistic, hands-on medical training solutions.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <button className="inline-flex items-center justify-center rounded-lg bg-sky-700 px-6 py-3 font-semibold text-white transition hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500">
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <button className="inline-flex items-center justify-center rounded-lg border border-sky-700 px-6 py-3 font-semibold text-sky-700 transition hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-500">
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Demo
            </button>
          </div>

          {/* Statistics */}
          <div className="mt-12 grid grid-cols-3 gap-6 border-t pt-8">
            <div>
              <h3 className="text-3xl font-bold text-sky-700">100+</h3>
              <p className="mt-2 text-sm text-gray-600">Medical Products</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-sky-700">50+</h3>
              <p className="mt-2 text-sm text-gray-600">Healthcare Partners</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-sky-700">10K+</h3>
              <p className="mt-2 text-sm text-gray-600">Students Trained</p>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex flex-1 justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="overflow-hidden rounded-3xl bg-white p-4 shadow-2xl">
            <img
              src={hero}
              alt="Medical Simulation Technology"
              className="h-auto w-full max-w-lg rounded-2xl object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
