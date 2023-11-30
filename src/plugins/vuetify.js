/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#333333', // Cinza Escuro
          secondary: '#2f4045', // Cinza Meio Claro
          terciary: '#071c23', // Azul Petróleo Escuro
          quartiary: '#E0F6A1', // Chartreuse Claro
        },
      },
    },
  },
})
