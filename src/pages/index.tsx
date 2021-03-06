import * as React from 'react';

import Char from '@/components/Char';

export default function HomePage({ glyphs }: { glyphs: string[] }) {
  return (
    /* <Seo templateTitle='Home' /> */
    /* <Seo /> */
    <>
      <title>GetChar - Where chars live=))</title>

      <main className='mx-auto flex flex-auto flex-col justify-center p-2 dark:bg-gray-800'>
        <aside className='mx-auto max-w-7xl py-32 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-6xl font-bold sm:text-8xl md:text-9xl xl:text-9xl '>
            GetChar
          </h1>
        </aside>
        <section className='mb-16 flex grow flex-wrap place-content-center content-around justify-center py-4 sm:px-4 md:px-8 lg:px-12 xl:mb-24 xl:px-16 2xl:px-32'>
          {glyphs.map((glyph: string) => (
            <Char glyph={glyph} key={glyph} />
          ))}
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  // Dummy server for responding with dummy JSOON data
  // TODO: create a real server-api that users can save their stuff(don't what exactly yet)
  const glyphs = [
    '⁅',
    '⁆',
    '¦',
    '-',
    '–',
    '‒',
    '—',
    '―',
    '•',
    '◦',
    '‣',
    '⁌',
    '⁍',
    '·',
    '‥',
    '…',
    '‹',
    '›',
    '«',
    '»',
    '≤',
    '≥',
    '≠',
    '+',
    '−',
    '×',
    '÷',
    '±',
    '≈',
    '~',
    '¬',
    '†',
    '‡',
    '^',
    '®',
    '©',
    '℗',
    '™',
    '℠',
    '℡',
    '℻',
    '🅫',
    '🅪',
    '°',
    '¶',
    '⁋',
    '§',
    '∞',
    '∂',
    '∑',
    '∏',
    '∫',
    '√',
    '∅',
    '◊',
    '½',
    '⅓',
    '¼',
    '⅛',
    '⅟',
    '¾',
    '⅜',
    '⅚',
    '⅝',
    '⅞',
    '%',
    '‰',
    '‱',
    '⅍',
    '℆',
    '℅',
    '℀',
    '℁',
    '¨',
    'ˆ',
    '˜',
    '¯',
    '˘',
    '˙',
    '˚',
    'ˇ',
    '΅',
    '¸',
    '˛',
    '№',
    '℃',
    '℉',
    'Å',
    'ʘ',
    '℮',
    '←',
    '→',
    '⟵',
    '⟶',
    '⇐',
    '⇒',
    '⟸',
    '⟹',
    '↖',
    '↗',
    '↙',
    '↘',
    '↑',
    '↓',
    '↕',
    '↔',
    '⟷',
    '⇔',
    '⟺',
    '↰',
    '↱',
    '↵',
    '↳',
    '↴',
    '⏎',
    '⇤',
    '⇥',
    '⇞',
    '⇟',
    '↺',
    '↻',
    '⎋',
    '↩',
    '↪',
    '✓',
    '✗',
    '▲',
    '▼',
    '◄',
    '▶',
    '△',
    '▽',
    '◅',
    '▻',
    '⚠',
    '●',
    '○',
    '■',
    '□',
    '▢',
    '⬒',
    '⬓',
    '◆',
    '◇',
    '❖',
    '☀',
    '☼',
    '♥',
    '♡',
    '❤',
    '★',
    '☆',
    '⬆',
    '⇧',
    '⇪',
    '⌘',
    '⌃',
    '⌅',
    '⌥',
    '⎇',
    '⌫',
    '⌦',
    '⌧',
    '⏏',
    '◯',
    '⬜',
    'Ⓐ',
    'Ⓑ',
    'Ⓒ',
    'Ⓓ',
    'Ⓔ',
    'Ⓕ',
    'Ⓖ',
    'Ⓗ',
    'Ⓘ',
    'Ⓙ',
    'Ⓚ',
    'Ⓛ',
    'Ⓜ',
    'Ⓝ',
    'Ⓞ',
    'Ⓟ',
    'Ⓠ',
    'Ⓡ',
    'Ⓢ',
    'Ⓣ',
    'Ⓤ',
    'Ⓥ',
    'Ⓦ',
    'Ⓧ',
    'Ⓨ',
    'Ⓩ',
    '⓪',
    '➀',
    '➁',
    '➂',
    '➃',
    '➄',
    '➅',
    '➆',
    '➇',
    '➈',
    '🄰',
    '🄱',
    '🄲',
    '🄳',
    '🄴',
    '🄵',
    '🄶',
    '🄷',
    '🄸',
    '🄹',
    '🄺',
    '🄻',
    '🄼',
    '🄽',
    '🄾',
    '🄿',
    '🅀',
    '🅁',
    '🅂',
    '🅃',
    '🅄',
    '🅅',
    '🅆',
    '🅇',
    '🅈',
    '🅉',
    '¤',
    '₣',
    '₾',
    '₨',
    '₼',
    '₪',
    '₥',
    '₯',
    '₮',
    '₢',
    '₵',
    '₡',
    '₲',
    '₦',
    '₴',
    '₳',
    '₤',
    '₩',
    '₭',
    '₱',
    '₧',
    '₸',
    '₹',
    '€',
    '₽',
    '₺',
    'ƒ',
    '£',
    '¥',
    '¢',
    '$',
  ];

  // const glyphs = await fetch('http://localhost:4300')
  // .then((r) => r.json())
  // .then((data) => data);

  return {
    props: {
      glyphs,
    },
  };
}
