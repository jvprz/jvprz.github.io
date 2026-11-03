// Original vector lettering. Each diagonal belongs to a terminal or a counter;
// there are no overlay stripes, masks, font files or background-colored patches.
const glyphs: Record<string, { width: number; path: string }> = {
  j: {
    width: 78,
    path: 'M52 0H78V65C78 87 63 100 41 100H0V74H36C47 74 52 69 52 58Z',
  },
  a: {
    width: 100,
    path: 'M50 0H72L100 28V100H50C22 100 0 78 0 50S22 0 50 0ZM50 25C36 25 25 36 25 50S36 75 50 75H64L76 87V100H80V40L65 25Z',
  },
  v: {
    width: 100,
    path: 'M0 0H29L51 65L73 0H100L65 100H37ZM0 0H29L39 29Z',
  },
  i: {
    width: 30,
    path: 'M0 0L30 27V100H0Z',
  },
  e: {
    width: 100,
    path: 'M50 0C21 0 0 21 0 50S21 100 50 100H100L74 75H50C37 75 28 67 25 56H100V48C100 21 79 0 50 0ZM27 36C32 28 40 24 50 24H62L75 36Z',
  },
  r: {
    width: 104,
    path: 'M0 0H76C94 0 104 12 104 30V43H78V35C78 29 74 26 68 26H26V44L104 100H64L26 74V100H0Z',
  },
  p: {
    width: 100,
    path: 'M0 0H50C79 0 100 20 100 46S79 90 50 90H26V100H0ZM26 25V65H51C64 65 75 57 75 46V39L61 25Z',
  },
  z: {
    width: 100,
    path: 'M0 0H100V23L42 75H72L100 100H0V77L58 25H27Z',
  },
};

export default function Wordmark() {
  let cursor = 0;
  const letters = [...'javier pérez'].map((letter, index) => {
    if (letter === ' ') { cursor += 28; return null; }
    const glyph = glyphs[letter === 'é' ? 'e' : letter];
    const x = cursor;
    cursor += glyph.width + 4;
    return <g key={index} transform={`translate(${x} 18)`} fill={index > 6 ? 'var(--color-red)' : 'currentColor'}>
      <path d={glyph.path} fillRule="evenodd" />
      {letter === 'é' && <path d="M33 -5L49 -18H79L62 -5Z" />}
    </g>;
  });
  return <svg className="brand-wordmark" viewBox={`0 0 ${cursor - 4} 120`} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">{letters}</svg>;
}
