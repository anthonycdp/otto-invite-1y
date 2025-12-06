import React, { useEffect, useRef } from 'react';

interface BackgroundMusicProps {
  src: string;
}

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      // Tenta reproduzir o áudio automaticamente
      audio.play().catch((error) => {
        console.log('Auto-play was prevented:', error);
      });
    }
  }, []);

  return (
    <audio
      ref={audioRef}
      src={src}
      loop
      preload="auto"
      style={{ display: 'none' }}
    />
  );
};

export default BackgroundMusic;