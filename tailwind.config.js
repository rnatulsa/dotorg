module.exports = {
  purge: ['src/pages/**/*.{js,ts,jsx,tsx}', 'src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        '3': '3px',
      },
      colors: {
        'wixColor0': 'rgb(255,255,255)',
        'wixColor1': 'rgb(255,255,255)',
        'wixColor2': 'rgb(0,0,0)',
        'wixColor3': 'rgb(237,28,36)',
        'wixColor4': 'rgb(0,136,203)',
        'wixColor5': 'rgb(255,203,5)',
        'wixColor6': 'rgb(114,114,114)',
        'wixColor7': 'rgb(176,176,176)',
        'wixColor8': 'rgb(255,255,255)',
        'wixColor9': 'rgb(114,114,114)',
        'wixColor10': 'rgb(176,176,176)',
        'wixColor11': 'rgb(255,255,255)',
        'wixColor12': 'rgb(204,204,204)',
        'wixColor13': 'rgb(160,160,159)',
        'wixColor14': 'rgb(96,94,94)',
        'wixColor15': 'rgb(47,46,46)',
        'wixColor16': 'rgb(214,236,240)',
        'wixColor17': 'rgb(176,218,225)',
        'wixColor18': 'rgb(132,164,169)',
        'wixColor19': 'rgb(88,109,113)',
        'wixColor20': 'rgb(44,55,56)',
        'wixColor21': 'rgb(171,200,226)',
        'wixColor22': 'rgb(133,167,198)',
        'wixColor23': 'rgb(86,130,169)',
        'wixColor24': 'rgb(3,76,140)',
        'wixColor25': 'rgb(1,38,70)',
        'wixColor26': 'rgb(191,214,234)',
        'wixColor27': 'rgb(154,185,212)',
        'wixColor28': 'rgb(86,142,191)',
        'wixColor29': 'rgb(57,95,127)',
        'wixColor30': 'rgb(29,47,64)',
        'wixColor31': 'rgb(211,204,186)',
        'wixColor32': 'rgb(166,156,128)',
        'wixColor33': 'rgb(125,117,96)',
        'wixColor34': 'rgb(83,78,64)',
        'wixColor35': 'rgb(41,39,32)',
      },
      fontFamily: {
        sans: [
          'Open Sans',
          // default
          'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'
        ],
        serif: [
          'Times New Roman', 'Times',
          // default
          'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
