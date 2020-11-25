/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
    theme: {
      screens: {
        'sm': '360px',
        'md': '640px',
        'lg': '960px',
        'xl': '1280px',
      },
      extend: {
        colors: {
          'primary': '#657b83',
          'secondary': '#93a1a1',
          'alt-1': '#586e75',
          'alt-2': '#b58900',
          'alt-3': '#cb4b16',
          'alt-4': '#dc322f',
          'bg-1': '#fdf6e3',
          'bg-2': '#eee8d5',
        },
        opacity: {
          '96': '.96'
        },
        boxShadow: {
          'alt-1': '2px 2px 20px rgba(0,0,0,.35)'
        },
        inset: {
          '1': '100%'
        },
        transitionDelay: {
          '0': '0ms',
        }
      },
    },
    variants: {
      display: ['responsive', 'hover', 'focus', 'group-hover', 'active'],
    },
    plugins: [],
    purge: {
      // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
      enabled: process.env.NODE_ENV === 'production',
      content: [
        'components/**/*.vue',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'plugins/**/*.js',
        'nuxt.config.js',
      ],
    },
  }
