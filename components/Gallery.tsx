import React from 'react';
import ScrollReveal from './ui/ScrollReveal';

const images = [
  "https://picsum.photos/id/1011/400/400", // Placeholder
  "https://picsum.photos/id/1059/400/400", // Placeholder
  "https://picsum.photos/id/1027/400/400", // Placeholder
  "https://picsum.photos/id/1040/400/400", // Placeholder
  "https://picsum.photos/id/106/400/400",  // Placeholder
];

const Gallery: React.FC = () => {
  return (
    <section className="py-16 bg-toyCloud overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-heading text-center text-toyBlue mb-8">
            Nossos Momentos
          </h2>
        </ScrollReveal>

        <div className="flex overflow-x-auto pb-8 gap-4 snap-x snap-mandatory px-4 scrollbar-hide">
          {images.map((url, index) => (
            <ScrollReveal 
              key={index} 
              delay={index * 100} 
              animation="scale-up"
              className="flex-shrink-0 snap-center"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 bg-white p-2 rounded-xl shadow-lg rotate-1 hover:rotate-0 transition-transform duration-300">
                <img 
                  src={url} 
                  alt={`Memória ${index + 1}`} 
                  className="w-full h-full object-cover rounded-lg bg-gray-200"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <p className="text-center text-gray-400 text-sm mt-2">
           Deslize para ver mais
        </p>
      </div>
    </section>
  );
};

export default Gallery;
