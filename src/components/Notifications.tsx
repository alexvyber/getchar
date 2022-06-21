import { Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function Notification({ char }) {
  return (
    <>
      <div
        aria-live='assertive'
        className='pointer-events-none fixed inset-0 flex items-end px-4 py-4 sm:p-6  '
      >
        <div className='flex w-full flex-col items-center space-y-4  '>
          <Transition
            show={true}
            as={Fragment}
            enter='transform ease-out duration-300 transition'
            enterFrom='translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2'
            enterTo='translate-y-0 opacity-100 sm:translate-x-0'
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='pointer-events-auto w-full max-w-xs overflow-hidden rounded-lg bg-white shadow ring-1 ring-black ring-opacity-5'>
              <div className='p-4'>
                <div className='flex items-start'>
                  <div className='w-0 flex-1 '>
                    <p className='text-sm font-medium text-gray-900'>
                      <span className='text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>
                        {char}
                      </span>{' '}
                      {/* Successfully saved! */}
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
