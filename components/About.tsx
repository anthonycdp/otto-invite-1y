import React from 'react';
import ScrollReveal from './ui/ScrollReveal';
import { Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
             <div className="bg-toyRed p-4 rounded-full text-white shadow-lg animate-pulse">
                <Heart size={40} fill="currentColor" />
             </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-heading text-toyBlue mb-6">
            Uma aventura de 1 ano
          </h2>
          
          <div className="space-y-4 font-body text-lg md:text-xl text-gray-600 leading-relaxed">
            <p>
              Nosso pequeno <strong>Otto</strong> está completando seu primeiro aninho e 
              queremos celebrar esse marco com as pessoas que mais amamos!
            </p>
            <p>
              Vai ser uma tarde cheia de cores, brinquedos e lembranças inesquecíveis.
              Preparamos tudo com muito carinho para que você se sinta dentro 
              da nossa caixa de brinquedos favorita.
            </p>
            <p className="text-toyGreen font-bold text-2xl pt-4 font-heading">
              Sua presença é nosso presente!
            </p>
          </div>
        </ScrollReveal>

        {/* Decorative Blocks */}
        <div className="hidden md:flex justify-between max-w-4xl mx-auto mt-12 opacity-50">
           <div className="w-16 h-16 bg-toyBlue rounded flex items-center justify-center text-white font-heading text-2xl transform -rotate-12">O</div>
           <div className="w-16 h-16 bg-toyYellow rounded flex items-center justify-center text-white font-heading text-2xl transform rotate-6">T</div>
           <div className="w-16 h-16 bg-toyRed rounded flex items-center justify-center text-white font-heading text-2xl transform -rotate-3">T</div>
           <div className="w-16 h-16 bg-toyGreen rounded flex items-center justify-center text-white font-heading text-2xl transform rotate-12">O</div>
        </div>
      </div>
    </section>
  );
};

export default About;
