import { Transition } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/outline';
import copy from 'copy-to-clipboard';
import { useState } from 'react';
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';

export function Notification({ char }) {
  const show = true;

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live='assertive'
        className='pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:p-6  '
      >
        <div className='flex w-full flex-col items-center space-y-4  '>
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={show}
            as={Fragment}
            enter='transform ease-out duration-300 transition'
            enterFrom='translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2'
            enterTo='translate-y-0 opacity-100 sm:translate-x-0'
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow ring-1 ring-black ring-opacity-5'>
              <div className='p-4'>
                <div className='flex items-start'>
                  <div className='flex-shrink-0'>
                    <CheckCircleIcon
                      className='h-6 w-6 text-green-400'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='ml-3 w-0 flex-1 pt-0.5'>
                    <p className='text-sm font-medium text-gray-900'>
                      <span className='text-lg'>{char}</span> Successfully
                      saved!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}

export default function Glyph({ glyph }) {
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

  const color = 'gray';
  const className = `   

      bg-${color}-50       hover:bg-${color}-100
      border-${color}-200  hover:border-4 hover:border-${color}-500
      inline-block 

         h-14    w-14 m-px p-2    text-lg border rounded
      sm:h-16 sm:w-16          sm:text-xl
      md:h-20 md:w-20          md:text-2xl     
      lg:h-22 lg:h-22 lg:m-0.5 lg:text-3xl
      xl:h-24 xl:w-24 xl:m-1   xl:text-4xl                 xl:border-2 xl:rounded-lg

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
