import copy from 'copy-to-clipboard';
import * as React from 'react';
import { useState } from 'react';

import Alert from '@/components/Alert';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage({ glyphs }) {
  // TODO: Seems like a useReducer, don't you think?
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [glyph, setGlyph] = useState();

  // When user clicks on Glyph we make our magic happen
  const handleCopy = () => {
    copy(glyph);
    setShowAlert(true);
    setAlertMessage(`Coppied successfully`);
    setGlyph(glyph);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className=' p-8'>
        <aside className='py-32 '>
          <h1 className='text-6xl sm:text-8xl md:text-9xl xl:text-9xl '>
            Glypher
          </h1>
        </aside>
        <main className='flex  flex-wrap place-content-center content-around justify-start'>
          {glyphs.map((glyph) => (
            /* TODO: Extract this components calsses into bunch of custom classes */
            <p
              key={`${glyph}`}
              onClick={handleCopy}
              className='hver:border-indigo-300 m-1 inline-block h-28 w-28 shrink cursor-pointer rounded-lg border-2 border-indigo-200  bg-indigo-50 p-4 text-center align-text-bottom text-5xl leading-relaxed hover:bg-indigo-100'
            >
              {glyph}
            </p>
          ))}
        </main>
      </main>
      {showAlert ? <Alert msg={alertMessage} glyph={glyph} /> : null}
    </Layout>
  );
}

export async function getStaticProps() {
  // Dummy server for responding with dummy JSOON data
  // TODO: create a real server-api that users can save their stuff(don't what exactly yet)
  const glyphs = await fetch('http://localhost:4300')
    .then((r) => r.json())
    .then((data) => data);

  return {
    props: {
      glyphs,
    },
  };
}
