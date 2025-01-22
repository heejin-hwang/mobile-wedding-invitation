import styled from '@emotion/styled';
import { useRef, useState } from 'react';
import Volume from '@/assets/icons/volume.svg';
import VolumeOff from '@/assets/icons/volume-off.svg';

function AudioButton() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayAudio = () => {
        if (audioRef.current) {
          if (isPlaying) {
            audioRef.current.pause();
          } else {
            audioRef.current.play();
          }
          setIsPlaying(!isPlaying);
        }
    };

    return (
        <div style={{position: 'absolute', top: '0', right:'0'}}>
            <Button onClick={handlePlayAudio} className=''>
                <Img src={(audioRef.current == null) || isPlaying ? Volume : VolumeOff} />
            </Button>
            <audio ref={audioRef} src="/bgm.mp3" autoPlay loop></audio>
        </div>
    )
}

export default AudioButton;

const Button = styled.button`
  border: none;
  outline: none;
  background: transparent;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
`;

const Img = styled.img`
`;