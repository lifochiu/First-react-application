import { useState, useEffect } from 'react';

interface pageInfoProps{
    pageInfo: String;
}

export default function PlayGround1({ pageInfo }:pageInfoProps) {

  const [key, setKey] = useState<String[]>([]);

  useEffect(() => {
      const handleKey = (event: KeyboardEvent) => {
          let element = event.key;
          
          setKey([...key, element]);
        console.log(key);
    };

    window.addEventListener('keyup', handleKey);

    return () => {
      window.removeEventListener('keyup', handleKey);
    };
  }); 

  return (
      <div>
      <p>This is page {pageInfo}: Keyboard Recorderr</p>
      <p>
        Pressed Key: {key}
      </p>
    </div>
  );
}