import copy from 'copy-to-clipboard';
import { useState } from 'react';

import Notification from '@/components/Notifications';

export default function Glyph({ glyph }: { glyph: string }) {
  // TODO: Seems like a useReducer, don't you think?
  const [showAlert, setShowAlert] = useState(false);
  const [char, setChar] = useState(glyph);

  // When user clicks on Glyph we make our magic happen
  const handleCopy = () => {
    copy(glyph);
    setShowAlert(true);
    setChar(glyph);
    setTimeout(() => {
      setShowAlert(false);
    }, 1400);
  };

  const className = `

      bg-gray-50       hover:bg-green-50
      hover:border-2       border-gray-100     hover:border-green-300
      inline-block 

         h-14    w-14 m-0.5 p-2    text-lg border rounded
      sm:h-16 sm:w-16 m-1      sm:text-xl
      md:h-20 md:w-20          md:text-2xl     
      lg:h-22 lg:h-22 lg:m-1 lg:text-3xl
      xl:h-24 xl:w-24        xl:text-4xl                 xl:border-2 xl:rounded-lg

       cursor-pointer
       text-center 
       align-text-bottom

       flex justify-center content-center
       `;
  return (
    <div key={`${char}`} onClick={handleCopy} className={className}>
      <div className='flex content-center justify-center'>
        <div className='leading-loose'> {glyph}</div>
      </div>
      {showAlert ? (
        <>
          <Notification char={char} />
        </>
      ) : null}
    </div>
  );
}
