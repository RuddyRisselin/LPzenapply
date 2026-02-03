'use client';

import { motion } from 'framer-motion';
import { Star, ShieldCheck } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Yann',
    school: 'Développement - École 42',
    text: 'J\'ai trouvé mon stage de 6 mois en 3 semaines grâce à ZenApply. L\'automatisation m\'a permis d\'envoyer plus de 120 candidatures sans y passer mes journées. Les relances automatiques ont fait la différence, plusieurs recruteurs m\'ont recontacté après la relance. Je recommande à tous les étudiants de 42.',
    photo: '/photos/Yann.jpeg',
  },
  {
    id: 2,
    name: 'Matthieu',
    school: 'Informatique - EFREI Paris',
    text: 'ZenApply m\'a sauvé pendant ma recherche d\'alternance. En parallèle de mes cours, impossible de candidater manuellement partout. La plateforme a géré les candidatures spontanées et j\'ai décroché mon alternance après seulement 4 semaines de recherche active. Le dashboard m\'a aidé à suivre mes performances en temps réel.',
    photo: '/photos/mathieu.webp',
  },
  {
    id: 3,
    name: 'Corentin',
    school: 'Design - BUT MMI',
    text: 'En tant que designer, je cherchais une alternance créative et ZenApply m\'a aidé à cibler les bonnes entreprises. Les relances automatiques ont boosté mon taux de réponse de 35%. J\'ai pu me concentrer sur mon portfolio pendant que ZenApply gérait mes candidatures. J\'ai signé mon alternance en design après 5 semaines.',
    photo: '/photos/Corentin.jpeg',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function Testimonials() {
  return (
    <section className="relative bg-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-zen-rose/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-purple-100/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Ils ont trouvé leur stage ou alternance
          </h2>
          <p className="text-lg sm:text-xl text-zen-gray max-w-3xl mx-auto">
            Rejoignez les +1000 étudiants qui ont automatisé leur succès.
          </p>
        </div>

        {/* Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              className="h-full"
            >
              <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-zen-rose text-zen-rose"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-zen-gray text-base leading-relaxed mb-6 flex-grow">
                  {testimonial.text}
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4 mt-auto">
                  {/* Profile Photo */}
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-zen-rose/10">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name and School */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <ShieldCheck className="w-4 h-4 text-zen-rose flex-shrink-0" />
                    </div>
                    <p className="text-sm text-zen-gray">
                      {testimonial.school}
                    </p>
                  </div>
                </div>

                {/* Subtle accent border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-zen-rose/5 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
