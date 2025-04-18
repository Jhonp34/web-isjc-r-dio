
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen">
      <header className="flex justify-between items-center p-4 md:px-16 shadow-md">
        <img src="/logo.png" alt="Web Rádio ISJC" className="h-16" />
        <nav className="space-x-4">
          <a href="#" className="hover:text-yellow-300">Início</a>
          <a href="#" className="hover:text-yellow-300">Ao Vivo</a>
          <a href="#" className="hover:text-yellow-300">Pregações</a>
          <a href="#" className="hover:text-yellow-300">Contato</a>
        </nav>
      </header>

      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Sintonize sua fé 24h com a <br /> Web Rádio ISJC
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5 }}
          className="text-lg md:text-2xl mb-6 max-w-2xl"
        >
          Pregações, louvores e mensagens que tocam o coração.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.8 }}
        >
          <a href="#player" className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full shadow-lg">
            Ouça Agora
          </a>
        </motion.div>
      </section>

      <section id="player" className="flex justify-center py-8 px-4">
        <iframe src="https://zeno.fm/player/webradioisjc" width="100%" height="150" frameBorder="0" scrolling="no"></iframe>
      </section>

      <motion.section 
        className="bg-white bg-opacity-10 text-center py-10 px-4 md:px-16" 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl text-yellow-300 font-bold mb-4">Versículo do Dia</h2>
        <p className="text-lg md:text-xl italic">
          "Lâmpada para os meus pés é tua palavra, e luz para o meu caminho." – Salmos 119:105
        </p>
      </motion.section>

      <footer className="text-center p-6 bg-[#003366]">
        <p className="text-sm">© 2025 Web Rádio ISJC. Todos os direitos reservados.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-yellow-400">Instagram</a>
          <a href="#" className="hover:text-yellow-400">YouTube</a>
          <a href="#" className="hover:text-yellow-400">WhatsApp</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
