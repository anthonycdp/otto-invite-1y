import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

interface MusicControlProps {
  isPlaying: boolean;
  isMuted: boolean;
  onTogglePlay: () => void;
  onToggleMute: () => void;
}

const MusicControl: React.FC<MusicControlProps> = ({
  isPlaying,
  isMuted,
  onTogglePlay,
  onToggleMute
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostra o controle após 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Esconde o controle após 5 segundos sem interação
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleMouseMove = () => {
      setIsVisible(true);
      clearTimeout(timer);
      timer = setTimeout(() => setIsVisible(false), 5000);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg p-3 flex items-center gap-2">
        <button
          onClick={onTogglePlay}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label={isPlaying ? 'Pausar música' : 'Tocar música'}
          title={isPlaying ? 'Pausar' : 'Tocar'}
        >
          {isPlaying ? (
            <FaPause className="w-4 h-4 text-toyBlue" />
          ) : (
            <FaPlay className="w-4 h-4 text-toyBlue" />
          )}
        </button>

        <button
          onClick={onToggleMute}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
          title={isMuted ? 'Ativar som' : 'Desativar som'}
        >
          {isMuted ? (
            <FaVolumeMute className="w-4 h-4 text-toyRed" />
          ) : (
            <FaVolumeUp className="w-4 h-4 text-toyGreen" />
          )}
        </button>
      </div>

      <div className="text-xs text-white bg-black/50 backdrop-blur-sm px-2 py-1 rounded-md">
        Música do Toy Story
      </div>
    </div>
  );
};

export default MusicControl;