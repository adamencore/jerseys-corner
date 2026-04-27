// Jersey's Corner — tweaks panel logic (palette + font pairing)
const PALETTES = {
  cream: {
    label: 'Cream & Orange',
    vars: {
      '--p-bg': '#f4ead4', '--p-bg2': '#ede0c2', '--p-paper': '#faf3e2',
      '--p-ink': '#2a1f14', '--p-ink2': '#4a3a2a', '--p-muted': '#806f57',
      '--p-line': '#d8c8a4',
      '--p-accent': '#e8842a', '--p-accentd': '#c66a18', '--p-accents': '#fbe8ce',
      '--p-brown': '#5e3a1f',
    },
  },
  rust: {
    label: 'Rust & Sage',
    vars: {
      '--p-bg': '#f1ebe1', '--p-bg2': '#e3d9c8', '--p-paper': '#f8f3e9',
      '--p-ink': '#241c14', '--p-ink2': '#403428', '--p-muted': '#75695a',
      '--p-line': '#cfc1ab',
      '--p-accent': '#a13a1f', '--p-accentd': '#7d2a14', '--p-accents': '#f3d9cf',
      '--p-brown': '#5a3326',
    },
  },
  forest: {
    label: 'Forest & Cream',
    vars: {
      '--p-bg': '#f2ecd7', '--p-bg2': '#e6dcc0', '--p-paper': '#f9f4e0',
      '--p-ink': '#1c2418', '--p-ink2': '#2f3a2a', '--p-muted': '#6a7060',
      '--p-line': '#cdc6a8',
      '--p-accent': '#557a3e', '--p-accentd': '#3d5a2c', '--p-accents': '#dde8cf',
      '--p-brown': '#3d4a30',
    },
  },
  midnight: {
    label: 'Midnight & Gold',
    vars: {
      '--p-bg': '#1a1814', '--p-bg2': '#221f1a', '--p-paper': '#2a2620',
      '--p-ink': '#f5ecd3', '--p-ink2': '#d8ccaf', '--p-muted': '#8a7e63',
      '--p-line': '#3d362c',
      '--p-accent': '#e8a73a', '--p-accentd': '#c98818', '--p-accents': '#3a2f1a',
      '--p-brown': '#a8916a',
    },
  },
};

const FONTS = {
  classic: { label: 'Playfair + DM Sans', head: "'Playfair Display', Georgia, serif", body: "'DM Sans', system-ui, sans-serif" },
  editorial: { label: 'Cormorant + Geist', head: "'Cormorant Garamond', Georgia, serif", body: "'Geist', system-ui, sans-serif" },
  warm: { label: 'Lora + Manrope', head: "'Lora', Georgia, serif", body: "'Manrope', system-ui, sans-serif" },
  punchy: { label: 'Bricolage + Outfit', head: "'Bricolage Grotesque', Georgia, serif", body: "'Outfit', system-ui, sans-serif" },
};

function applyTweaks(palette, fontKey) {
  const root = document.documentElement;
  const p = PALETTES[palette] || PALETTES.cream;
  Object.entries(p.vars).forEach(([k, v]) => root.style.setProperty(k, v));
  const f = FONTS[fontKey] || FONTS.classic;
  root.style.setProperty('--f-head', f.head);
  root.style.setProperty('--f-body', f.body);
}

window.PALETTES = PALETTES;
window.FONTS = FONTS;
window.applyTweaks = applyTweaks;
