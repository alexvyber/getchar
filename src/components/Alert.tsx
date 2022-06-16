import { CheckCircleIcon } from '@heroicons/react/solid';

// TODO: Make this component look shiny =))
export default function Alert({ glyph, msg }) {
  return (
    <div className='fixed bottom-12 left-1/3  rounded-md bg-green-50 p-4'>
      <div className='mx-auto flex'>
        <div className='ml-3'>
          <p className='text-lg font-medium leading-none text-green-800'>
            <span className='text-2xl leading-loose'>{glyph} </span>{' '}
            {`     ${msg}`}
          </p>
        </div>
        <div className='ml-auto pl-3'>
          <div className='-mx-1.5 -my-1.5'>
            <button
              type='button'
              className='inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50'
            >
              <span className='sr-only'>Dismiss</span>
            </button>
          </div>
        </div>
        <div className='flex-shrink-0'>
          <CheckCircleIcon
            className='h-8 w-8 text-green-400'
            aria-hidden='true'
          />
        </div>
      </div>
    </div>
  );
}
