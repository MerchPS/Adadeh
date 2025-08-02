import { motion } from 'framer-motion'
import Head from 'next/head'

export default function Home() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
      <Head>
        <title>Leon Community | Innovative Tech Collective</title>
        <meta name="description" content="Join the Leon Community for cutting-edge technology discussions and projects" />
      </Head>

      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="show"
        variants={container}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center"
      >
        <motion.div variants={item}>
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 3 
            }}
            className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-xl shadow-2xl"
          />
        </motion.div>
        
        <motion.h1 variants={item} className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to <span className="text-yellow-400">Leon</span> Community
        </motion.h1>
        
        <motion.p variants={item} className="text-xl md:text-2xl max-w-3xl mx-auto mb-10">
          A collective of innovators, creators, and tech enthusiasts pushing boundaries together.
        </motion.p>
        
        <motion.div variants={item} className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-yellow-400 text-indigo-900 font-bold rounded-lg shadow-lg"
          >
            Join Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-white font-bold rounded-lg shadow-lg"
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Our <span className="text-yellow-400">Community</span> Values
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              desc: "We embrace cutting-edge ideas and technologies",
              icon: "💡"
            },
            {
              title: "Collaboration",
              desc: "Great things happen when we work together",
              icon: "🤝"
            },
            {
              title: "Growth",
              desc: "Continuous learning and improvement is our way",
              icon: "📈"
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl border border-white border-opacity-20"
            >
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  duration: 4 + i 
                }}
                className="text-4xl mb-4"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-white text-opacity-80">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Members Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Meet Our <span className="text-yellow-400">Team</span>
        </motion.h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Alex", role: "Founder", color: "from-pink-500 to-purple-500" },
            { name: "Jamie", role: "Developer", color: "from-blue-500 to-cyan-500" },
            { name: "Taylor", role: "Designer", color: "from-green-500 to-teal-500" },
            { name: "Morgan", role: "Community", color: "from-yellow-500 to-orange-500" }
          ].map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="text-center"
            >
              <div className={`h-40 w-40 mx-auto rounded-full bg-gradient-to-br ${member.color} mb-4 shadow-lg`} />
              <h3 className="text-2xl font-bold">{member.name}</h3>
              <p className="text-white text-opacity-70">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center"
      >
        <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 md:p-12 rounded-xl border border-white border-opacity-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to join the <span className="text-yellow-400">Leon Community</span>?</h2>
          <p className="text-xl mb-8">Be part of something extraordinary. Let's build the future together.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-yellow-400 text-indigo-900 font-bold rounded-lg shadow-lg text-lg"
          >
            Get Started Today
          </motion.button>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white border-opacity-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Leon Community</h3>
            <p className="text-white text-opacity-70">Innovating together since 2023</p>
          </div>
          <div className="flex gap-6">
            {['Twitter', 'Discord', 'GitHub', 'LinkedIn'].map((social, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -3 }}
                className="text-white text-opacity-70 hover:text-opacity-100"
              >
                {social}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </footer>
    </div>
  )
}
