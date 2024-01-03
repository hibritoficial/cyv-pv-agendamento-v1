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
          primary: '#E0F6A1', // Verde Claro
          secondary: '#2f4045', // Cinza Meio Claro
          terciary: '#071c23', // Azul Petróleo Escuro
          quartiary: '#333333', // Cinza Escuro
          quinary: '#28ACBC', // Azul Claro
          senario: '#edfac7', // Verde Muito Claro
          septenary: '#f0f1f1', // Azul Muito Claro
        },
      },
    },
  },
})
