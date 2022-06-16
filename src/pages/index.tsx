import * as React from 'react';

import Glyph from '@/components/Glyph';
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
  // const [showAlert, setShowAlert] = useState(false);

  // const [alertMessage, setAlertMessage] = useState('');
  // const [glyphToCopy, setGlyphToCopy] = useState();

  // console.log(glyphs);

  // When user clicks on Glyph we make our magic happen
  // const handleCopy = () => {
  //   copy(glyph);
  //   setShowAlert(true);
  //   setAlertMessage(`Coppied successfully`);
  //   setGlyph(glyph);
  //   setTimeout(() => {
  //     setShowAlert(false);
  //   }, 2000);
  // };

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      {/* <main className='  p-8'>
        <aside className='py-32 '>
          <div class='grid grid-flow-col auto-cols-max'>
            <div>01</div>
            <div>02</div>
            <div>03</div>
          </div>
          <h1 className='text-6xl text-orange-500 sm:text-8xl md:text-9xl xl:text-9xl font-bold '>
            GetChar
          </h1>
        </aside>
        <section className='grid grid-cols-10 '>
          {glyphs.map((glyph) => (
            <p
              key={`${glyph}`}
              onClick={handleCopy}
              className='hver:border-indigo-300 m-1 
              inline-block h-28 w-28 shrink cursor-pointer
              rounded-lg border-2 border-indigo-200 
              bg-indigo-50 p-4 text-center align-text-bottom 
              text-5xl leading-relaxed hover:bg-indigo-100'
            >
              {glyph}
            </p>
          ))}
        </section>
      </main> */}

      <main className='mx-auto flex flex-auto flex-col justify-center p-2'>
        <aside className='mx-auto max-w-7xl py-32 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-6xl font-thin sm:text-8xl md:text-9xl xl:text-9xl '>
            GetChar
            {/*<span className="text-char">§</span> */}
          </h1>
        </aside>
        <main className='flex grow  flex-wrap place-content-center content-around justify-center'>
          {glyphs.map((glyph) => (
            <Glyph glyph={glyph} key={glyph} />
          ))}
        </main>
      </main>
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
