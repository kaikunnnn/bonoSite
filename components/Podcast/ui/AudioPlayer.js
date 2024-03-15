import Link from 'next/link';
import React from 'react';

const AudioPlayer = () => {
return (
    <div className='AudioPlayer w-full'>
          <audio className="w-full" controls >
              <source src="your-audio-file.mp3" type="audio/mp3" />
              Your browser does not support the audio element.
          </audio>
    </div>
  );
};

export default AudioPlayer;