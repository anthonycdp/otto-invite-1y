import React, { useState } from 'react';
import { Button } from './ui/Button';
import ScrollReveal from './ui/ScrollReveal';
import { RSVPFormData, LoadingState } from '../types';
import { CheckCircle, Send } from 'lucide-react';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API Call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="rsvp" className="py-20 relative overflow-hidden bg-toyGreen">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2.5px)', backgroundSize: '20px 20px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="max-w-xl mx-auto">
          {/* Cow Print Header Strip */}
          <div className="h-4 w-full bg-cow rounded-t-3xl border-b-4 border-black"></div>
          
          <div className="bg-white rounded-b-3xl rounded-t-lg shadow-2xl overflow-hidden border-4 border-black">
            <div className="bg-toyYellow p-6 text-center border-b-4 border-yellow-600">
              <h2 className="text-3xl font-toy text-red-600 stroke-white drop-shadow-sm mb-1">
                Eu Vou!
              </h2>
              <p className="text-yellow-900 font-body font-bold">
                Confirme sua presença, parceiro!
              </p>
            </div>

            <div className="p-8">
              {status === 'success' ? (
                <div className="text-center py-10 animate-fade-in">
                  <div className="flex justify-center mb-4 text-toyGreen">
                    <CheckCircle size={64} fill="currentColor" className="text-white" />
                  </div>
                  <h3 className="text-2xl font-heading text-gray-800 mb-2">Yee-haw!</h3>
                  <p className="text-gray-600 mb-6 font-body">
                    Sua presença está confirmada!<br/>
                    Nos vemos na festa.
                  </p>
                  <Button variant="outline" onClick={() => setStatus('idle')}>
                    Enviar outra resposta
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2 font-heading">Nome do Cowboy/Cowgirl</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-toyBlue focus:ring-4 focus:ring-blue-100 outline-none transition-all font-body"
                      placeholder="Ex: Woody da Silva"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="adults" className="block text-gray-700 font-bold mb-2 font-heading">Adultos</label>
                      <div className="relative">
                        <select
                          id="adults"
                          name="adults"
                          value={formData.adults}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-toyBlue outline-none font-body appearance-none bg-white"
                        >
                          {[1, 2, 3, 4, 5].map(num => (
                            <option key={num} value={num}>{num}</option>
                          ))}
                        </select>
                         <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="children" className="block text-gray-700 font-bold mb-2 font-heading">Crianças</label>
                      <div className="relative">
                        <select
                          id="children"
                          name="children"
                          value={formData.children}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-toyBlue outline-none font-body appearance-none bg-white"
                        >
                          {[0, 1, 2, 3, 4, 5].map(num => (
                            <option key={num} value={num}>{num}</option>
                          ))}
                        </select>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
                      </div>
                    </div>
                  </div>

                  <div>
                     <label htmlFor="message" className="block text-gray-700 font-bold mb-2 font-heading">Mensagem (Opcional)</label>
                     <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-toyBlue outline-none font-body"
                        placeholder="Amigo estou aqui..."
                     ></textarea>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full flex justify-center items-center gap-2" 
                    disabled={status === 'loading'}
                    variant="primary"
                    size="lg"
                  >
                    {status === 'loading' ? 'Enviando...' : (
                      <>
                        Confirmar Agora <Send size={20} />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RSVP;