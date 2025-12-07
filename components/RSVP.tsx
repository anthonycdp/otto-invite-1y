import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RSVPFormData, LoadingState } from '../types';
import { CheckCircle, Rocket, Minus, Plus, AlertCircle } from 'lucide-react';

// Counter Component
interface CounterProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  colorTheme: 'blue' | 'amber';
}

const Counter: React.FC<CounterProps> = ({ value, onChange, min = 0, max = 10, colorTheme }) => {
  const isBlue = colorTheme === 'blue';
  
  const bgLight = isBlue ? 'bg-blue-50' : 'bg-amber-50';
  const border = isBlue ? 'border-blue-200' : 'border-amber-200';
  const text = isBlue ? 'text-blue-600' : 'text-amber-600';
  const btnBg = isBlue ? 'bg-blue-100 hover:bg-blue-200' : 'bg-amber-100 hover:bg-amber-200';
  const btnText = isBlue ? 'text-blue-600' : 'text-amber-600';

  const handleDecrement = () => {
    if (value > min) onChange(value - 1);
  };

  const handleIncrement = () => {
    if (value < max) onChange(value + 1);
  };

  return (
    <div className={`flex items-center justify-between w-full px-4 py-2 rounded-xl border-2 ${bgLight} ${border}`}>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        type="button"
        onClick={handleDecrement}
        disabled={value <= min}
        className={`w-8 h-8 flex items-center justify-center rounded-full ${btnBg} ${btnText} disabled:opacity-50 disabled:cursor-not-allowed transition-colors`}
      >
        <Minus size={16} strokeWidth={3} />
      </motion.button>
      
      <span className={`text-2xl font-heading ${text} font-bold`}>
        {value}
      </span>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        type="button"
        onClick={handleIncrement}
        disabled={value >= max}
        className={`w-8 h-8 flex items-center justify-center rounded-full ${btnBg} ${btnText} disabled:opacity-50 disabled:cursor-not-allowed transition-colors`}
      >
        <Plus size={16} strokeWidth={3} />
      </motion.button>
    </div>
  );
};

// Sheriff Badge SVG Component
const SheriffBadge: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="woodGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D4A574" />
        <stop offset="50%" stopColor="#C4956A" />
        <stop offset="100%" stopColor="#B8845A" />
      </linearGradient>
      <linearGradient id="woodDark" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A67C52" />
        <stop offset="100%" stopColor="#8B6914" />
      </linearGradient>
    </defs>
    {/* Star points */}
    <polygon
      points="60,5 72,40 110,40 80,62 92,98 60,78 28,98 40,62 10,40 48,40"
      fill="url(#woodGradient)"
      stroke="#8B6914"
      strokeWidth="3"
    />
    {/* Circle knobs at points */}
    <circle cx="60" cy="8" r="6" fill="url(#woodDark)" stroke="#6B5210" strokeWidth="2" />
    <circle cx="108" cy="42" r="6" fill="url(#woodDark)" stroke="#6B5210" strokeWidth="2" />
    <circle cx="90" cy="98" r="6" fill="url(#woodDark)" stroke="#6B5210" strokeWidth="2" />
    <circle cx="30" cy="98" r="6" fill="url(#woodDark)" stroke="#6B5210" strokeWidth="2" />
    <circle cx="12" cy="42" r="6" fill="url(#woodDark)" stroke="#6B5210" strokeWidth="2" />
    {/* Inner circle */}
    <circle cx="60" cy="55" r="20" fill="url(#woodDark)" stroke="#6B5210" strokeWidth="2" />
  </svg>
);


// Spiral Notebook Top
const SpiralTop: React.FC = () => (
  <div className="flex justify-center gap-1 py-1">
    {Array.from({ length: 18 }).map((_, i) => (
      <div
        key={i}
        className="w-3 h-4 rounded-full border-2 border-emerald-600 bg-emerald-500"
        style={{ marginTop: i % 2 === 0 ? '0' : '2px' }}
      />
    ))}
  </div>
);

const RSVP: React.FC = () => {
  const [formData, setFormData] = useState<RSVPFormData>({
    name: '',
    adults: 1,
    children: 0,
    message: ''
  });

  const [status, setStatus] = useState<LoadingState>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCounterChange = (name: keyof RSVPFormData, value: number) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const GOOGLE_SCRIPT_URL = import.meta.env.VITE_SHEETS_URL;

    console.log('URL do script:', GOOGLE_SCRIPT_URL);
    console.log('Dados a enviar:', formData);

    try {
      // Usar FormData para compatibilidade com no-cors
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('adults', formData.adults.toString());
      formDataToSend.append('children', formData.children.toString());
      formDataToSend.append('message', formData.message || '');

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSend,
      });

      // Com no-cors, assumimos sucesso
      console.log('Requisicao enviada com sucesso');
      setStatus('success');

    } catch (error) {
      console.error('Erro ao enviar:', error);
      setStatus('error');
    }
  };

  return (
    <section id="rsvp" className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: 'url(/fundo_presenca.jpeg)' }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
      ></motion.div>

      {/* Scrollable Content */}
      <div className="absolute inset-0 overflow-y-auto py-4 md:py-8 z-10 flex items-center justify-center">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-xl mx-auto relative">
            {/* Buzz Lightyear - Left (Overlapping Card) */}
            <motion.div
              className="absolute -left-20 bottom-0 w-48 md:w-64 z-20 pointer-events-none hidden md:block"
              initial={{ x: -100, y: 50, opacity: 0 }}
              whileInView={{ x: -16, y: 16, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            >
              <motion.img
                src="https://www.pngmart.com/files/4/Buzz-Lightyear-PNG-Transparent-Image.png"
                alt="Buzz Lightyear"
                className="w-full h-auto drop-shadow-2xl transform scale-110"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Woody - Right (Overlapping Card) */}
            <motion.div
              className="absolute -right-16 bottom-0 w-40 md:w-56 z-20 pointer-events-none hidden md:block"
              initial={{ x: 100, y: 50, opacity: 0 }}
              whileInView={{ x: 16, y: 16, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            >
              <motion.img
                src="https://www.pngmart.com/files/4/Woody-PNG-File.png"
                alt="Woody"
                className="w-full h-auto drop-shadow-2xl transform scale-110"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </motion.div>

            {/* Main Card */}
            <motion.div
              className="bg-amber-50 rounded-3xl shadow-2xl overflow-hidden border-4 border-blue-900/30 relative z-10"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8, bounce: 0.4 }}
            >
              {/* Header with Sheriff Badge */}
              <div className="pt-4 pb-2 text-center relative">
                {/* Sheriff Badge */}
                <motion.div
                  className="flex justify-center -mt-2 mb-1"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, -3, 3, -3, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <SheriffBadge className="w-24 h-24 md:w-28 md:h-28 drop-shadow-lg" />
                  </motion.div>
                </motion.div>

                {/* Title with wood texture effect */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.h2
                    className="text-4xl md:text-5xl font-toy drop-shadow-md mb-1"
                    style={{
                      background: 'linear-gradient(180deg, #8B4513 0%, #D2691E 50%, #8B4513 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
                    }}
                    animate={{
                      scale: [1, 1.02, 1],
                      filter: [
                        'drop-shadow(0 0 0 rgba(0,0,0,0))',
                        'drop-shadow(0 0 8px rgba(210, 105, 30, 0.3))',
                        'drop-shadow(0 0 0 rgba(0,0,0,0))'
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  >
                    Eu Vou!
                  </motion.h2>
                </motion.div>
                <motion.p
                  className="text-gray-600 font-body font-semibold text-sm md:text-base"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Confirme sua presenca, parceiro!
                </motion.p>
              </div>

            <div className="px-6 md:px-8 pb-6">
              {status === 'success' ? (
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <motion.div
                    className="flex justify-center mb-6"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-toyGreen/30 blur-xl rounded-full scale-150"></div>
                      <CheckCircle size={80} fill="#10B981" className="text-white drop-shadow-lg relative z-10" />
                    </div>
                  </motion.div>

                  <motion.h3
                    className="text-4xl md:text-5xl font-toy text-toyBlue drop-shadow-md mb-3"
                    animate={{
                      scale: [1, 1.05, 1],
                      filter: [
                        'drop-shadow(0 0 0 rgba(59, 130, 246, 0))',
                        'drop-shadow(0 0 12px rgba(59, 130, 246, 0.4))',
                        'drop-shadow(0 0 0 rgba(59, 130, 246, 0))'
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  >
                    Yee-haw! 🤠
                  </motion.h3>

                  <motion.p
                    className="text-lg md:text-xl text-gray-700 mb-8 font-body font-semibold leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.span
                      className="inline-block text-toyRed font-bold"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: 0.8
                      }}
                    >
                      Sua presença está confirmada!
                    </motion.span>
                    <br />
                    Nos vemos na festa, parceiro!
                  </motion.p>

                  <motion.div
                    className="flex justify-center gap-4 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, type: "spring" }}
                  >
                    <div className="text-4xl animate-bounce-slow">🎉</div>
                    <div className="text-4xl animate-bounce-slow-delayed">🎈</div>
                    <div className="text-4xl animate-bounce-slow">🎂</div>
                  </motion.div>

                  <motion.button
                    onClick={() => setStatus('idle')}
                    className="px-8 py-3 rounded-full font-heading font-bold text-lg text-white transition-all duration-200 transform hover:scale-105 active:scale-95 relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(180deg, #3B82F6 0%, #2563EB 100%)',
                      boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)'
                    }}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                      animate={{
                        x: ['-100%', '200%']
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "easeInOut"
                      }}
                    />
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="text-xl">🔄</span>
                      Enviar outra resposta
                    </span>
                  </motion.button>
                </motion.div>
              ) : status === 'error' ? (
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="flex justify-center mb-4 text-red-500">
                    <AlertCircle size={64} fill="currentColor" className="text-white" />
                  </div>
                  <h3 className="text-2xl font-heading text-gray-800 mb-2">Ops!</h3>
                  <p className="text-gray-600 mb-6 font-body">
                    Algo deu errado ao enviar.<br/>
                    Tente novamente em instantes.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2 rounded-full border-2 border-red-400 text-red-600 font-heading hover:bg-red-50 transition-colors"
                  >
                    Tentar novamente
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  {/* Name Input */}
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2 font-heading text-sm">
                      Nome do Cowboy/Cowgirl
                    </label>
                    <div
                      className="rounded-xl overflow-hidden"
                      style={{
                        background: 'linear-gradient(180deg, #DEB887 0%, #D2B48C 50%, #C4A76C 100%)',
                        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.1)'
                      }}
                    >
                      <motion.input
                        whileFocus={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent outline-none font-body font-semibold text-amber-900 placeholder-amber-800/60 transition-colors"
                        placeholder="Ex: Woody da Silva"
                      />
                    </div>
                  </motion.div>

                  {/* Adults and Children Selectors */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Adults */}
                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <label htmlFor="adults" className="block text-gray-700 font-bold mb-2 font-heading text-sm">
                        Adultos
                      </label>
                      <Counter
                        value={formData.adults}
                        onChange={(val) => handleCounterChange('adults', val)}
                        min={1}
                        max={10}
                        colorTheme="blue"
                      />
                    </motion.div>

                    {/* Children */}
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <label htmlFor="children" className="block text-gray-700 font-bold mb-2 font-heading text-sm">
                        Criancas
                      </label>
                      <Counter
                        value={formData.children}
                        onChange={(val) => handleCounterChange('children', val)}
                        min={0}
                        max={10}
                        colorTheme="amber"
                      />
                    </motion.div>
                  </div>

                  {/* Message - Notebook Style */}
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2 font-heading text-sm">
                      Mensagem (Opcional)
                    </label>
                    <div className="bg-amber-100 rounded-xl overflow-hidden border-2 border-amber-200">
                      <SpiralTop />
                      <div
                        className="relative"
                        style={{
                          background: 'repeating-linear-gradient(transparent, transparent 27px, #E5D9C9 28px)'
                        }}
                      >
                        <motion.textarea
                          whileFocus={{ scale: 1.01, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-4 py-2 bg-transparent outline-none font-body text-gray-700 placeholder-gray-400 resize-none transition-colors"
                          style={{ lineHeight: '28px' }}
                          placeholder="Amigo estou aqui..."
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Submit Button - 3D Red Style */}
                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 px-8 rounded-full font-heading font-bold text-xl text-white flex items-center justify-center gap-3 transition-all duration-200 transform active:scale-95 active:translate-y-1 disabled:opacity-70 relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(180deg, #DC2626 0%, #B91C1C 100%)',
                      boxShadow: '0 6px 0 #7F1D1D, 0 8px 10px rgba(0,0,0,0.3)',
                    }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{
                      scale: [1, 1.05, 1],
                      opacity: 1,
                      boxShadow: [
                        '0 6px 0 #7F1D1D, 0 8px 10px rgba(0,0,0,0.3)',
                        '0 6px 0 #7F1D1D, 0 15px 20px rgba(220, 38, 38, 0.4)',
                        '0 6px 0 #7F1D1D, 0 8px 10px rgba(0,0,0,0.3)'
                      ]
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.8,
                      scale: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      },
                      boxShadow: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      },
                      opacity: { duration: 0.5 }
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                      animate={{
                        x: ['-100%', '200%']
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "easeInOut"
                      }}
                    />
                    {status === 'loading' ? 'Enviando...' : (
                      <div className="relative z-10 flex items-center gap-3">
                        Confirmar Agora
                        <motion.div
                          animate={{ rotate: [45, 55, 45] }}
                          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <Rocket size={24} />
                        </motion.div>
                      </div>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default RSVP;
