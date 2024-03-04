/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./fuente/**/*{html,js}",
  "./node_modules/flowbite/**/*js"],
  theme: {
    extend: {
        colors: {
            'fondo-web': '#060129',
            'color-menus': '#537C8E',
            'color-action': '#FB503A',
            'color-main': '#A6A398E2'
        },
        backgroundImage: theme => ({
            'fondo-asesinato-pc-100': "url('/fuente/Multimedia/fondos/ase100.webp')",
            'fondo-asesinato-pc-80': "url('/fuente/Multimedia/fondos/ase80.webp')",
            'fondo-asesinato-pc-60': "url('/fuente/Multimedia/fondos/ase60.webp')",
            'fondo-asesinato-pc-40': "url('/fuente/Multimedia/fondos/ase40.webp')",
            'fondo-asesinato-movil': "url('/fuente/Multimedia/Imagenes/asesinato700.png')",
            'fondo-asesinato-movil-500': "url('/fuente/Multimedia/Imagenes/asesinato500.webp')",
            'fondo-forajido-pc-100': "url('/fuente/Multimedia/fondos/fora100.webp')",
            'fondo-forajido-pc-80': "url('/fuente/Multimedia/fondos/fora80.webp')",
            'fondo-forajido-pc-60': "url('/fuente/Multimedia/fondos/fora60.webp')",
            'fondo-forajido-pc-40': "url('/fuente/Multimedia/fondos/fora40.webp')",
            'fondo-forajido-movil': "url('/fuente/Multimedia/Imagenes/fora700.jpg')",
            'fondo-forajido-movil-500': "url('/fuente/Multimedia/Imagenes/fora500.webp')",
            'fondo-sutileza-pc-100': "url('/fuente/Multimedia/fondos/suti100.webp')",
            'fondo-sutileza-pc-80': "url('/fuente/Multimedia/fondos/suti80.webp')",
            'fondo-sutileza-pc-60': "url('/fuente/Multimedia/fondos/suti60.webp')",
            'fondo-sutileza-pc-40': "url('/fuente/Multimedia/fondos/suti40.webp')",
            'fondo-sutileza-movil': "url('/fuente/Multimedia/Imagenes/suti700.jpg')",
            'fondo-sutileza-movil-500': "url('/fuente/Multimedia/Imagenes/suti500.webp')",
        }),
        fontFamily: {
            'titulo': 'Playfair Display, serif',
            'parrafo': 'Source Sans 3, sans-serif',
        },
        screens: {
            'r1': '450px',
            'r2': '550px',
            'r3': '705px',
            'r4': '860px',
            'r5': '890px',
            'r6': '1190px',
            'r7': '1600px',
        },
        boxShadow: {
            'custom': '4px 0px 20px 1px #29d5cf'
        },
        height: {

            '150': '150px',
            '125': '125px'
        },
        minHeight: {
            '500': '500px'
        },
        textShadow: {
            'custom-1': '2px 2px 4px #FB503A',
            'custom-2': '2px 2px 4px #000000',
        },
        transitionProperty: {
            'color-shadow': 'color, text-shadow',
        },
        transitionDuration: {
            '300': '0.3s',
        },
        transitionTimingFunction: {
            'ease': 'ease',
        },
        maxWidth: {
            '90' : '90%',
        },
        width: {
            '250' : '250px',
        }
    },
  },
  plugins: [
      require ('flowbite/plugin')
  ],
}

