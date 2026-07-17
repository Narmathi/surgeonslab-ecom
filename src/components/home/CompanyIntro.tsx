import { motion } from "framer-motion";
import { Microscope, ShieldCheck, Stethoscope } from "lucide-react";

const features = [
  {
    icon: Microscope,
    title: "Innovation",
    description:
      "Advanced surgical simulation technology designed to improve medical education.",
  },
  {
    icon: ShieldCheck,
    title: "Precision",
    description:
      "Engineered with accuracy to provide realistic and reliable training experiences.",
  },
  {
    icon: Stethoscope,
    title: "Medical Excellence",
    description:
      "Helping hospitals, universities and healthcare professionals deliver better patient outcomes.",
  },
];

const CompanyIntro = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="font-semibold uppercase tracking-widest text-sky-700">
              About SurgeonsLab
            </span>

            <h2 className="mt-4 text-4xl font-bold text-gray-900">
              Building the Future of
              <span className="text-sky-700"> Medical Simulation</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              SurgeonsLab is a MedTech company dedicated to developing advanced
              surgical simulation technologies that help hospitals,
              universities, and medical training centers provide realistic,
              hands-on learning experiences.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              Our mission is to improve surgical education through innovative,
              accessible, and high-quality training solutions that prepare
              healthcare professionals for real-world clinical practice.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            className="grid gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="flex gap-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-100">
                    <Icon className="h-7 w-7 text-sky-700" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-gray-600 leading-7">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;