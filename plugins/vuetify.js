// plugins/vuetify.js
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const theme = {
  dark: false,
  colors: {
    background: '#0C0C0C',
    surface: '#030303DE',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
     error: '#de49b4',
    info: '#2196F3',
    success: '#56fdd6',
    warning: '#ffee6a',
  }
}

const accent = {
  dark: false,
  colors: {
    background: '#030303',
    surface: '#0C0C0C',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
     error: '#de49b4',
    info: '#2196F3',
    success: '#56fdd6',
    warning: '#ffee6a',
  }
}

const white = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#F3F6FA',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
     error: '#de49b4',
    info: '#2196F3',
    success: '#56fdd6',
    warning: '#ffee6a',
  }
}

const purple = {
  dark: false,
  colors: {
    background: '#9933FF',
    surface: '#BC8DFF',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#030303',
    'secondary-darken-1': '#018786',
     error: '#de49b4',
    info: '#2196F3',
    success: '#56fdd6',
    warning: '#ffee6a',
  }
}

const green = {
  dark: false,
  colors: {
    background: '#23F6CF',
    surface: '#000000',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#030303',
    'secondary-darken-1': '#018786',
     error: '#de49b4',
    info: '#2196F3',
    success: '#56fdd6',
    warning: '#ffee6a',
  }
}

const pink = {
  dark: false,
  colors: {
    background: '#E646B6',
    surface: '#F692D1',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#030303',
    'secondary-darken-1': '#018786',
     error: '#de49b4',
    info: '#2196F3',
    success: '#56fdd6',
    warning: '#ffee6a',
  }
}

const yellow = {
  dark: false,
  colors: {
    background: '#FFF164',
    surface: '#FEF7A8',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#030303',
    'secondary-darken-1': '#1c1c1c',
     error: '#de49b4',
    info: '#2196F3',
    success: '#56fdd6',
    warning: '#ffee6a',
  }
}

const whiteGrey = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#0C0C0C',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
     error: '#de49b4',
    info: '#2196F3',
    success: '#56fdd6',
    warning: '#ffee6a',
  }
}

const darkGrey = {
  dark: false,
  colors: {
    background: '#030303',
    surface: '#0C0C0C',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
     error: '#de49b4',
    info: '#2196F3',
    success: '#56fdd6',
    warning: '#ffee6a',
  }
}

const glass = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#F3F6FA',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#030303',
    'secondary-darken-1': '#018786',
     error: '#de49b4',
    info: '#2196F3',
    success: '#56fdd6',
    warning: '#ffee6a',
  }
}

const greenWave = {
  dark: false,
  colors: {
    background: '#56fdd6',
    surface: '#56fdd6',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#030303',
    'secondary-darken-1': '#018786',
     error: '#de49b4',
    info: '#2196F3',
    success: '#56fdd6',
    warning: '#ffee6a',
  }
}

const greenAccent = {
  dark: false,
  colors: {
    background: '#56fdd6',
    surface: '#56fdd6',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#030303',
    'secondary-darken-1': '#018786',
     error: '#de49b4',
    info: '#2196F3',
    success: '#56fdd6',
    warning: '#ffee6a',
  }
}

const yellowWave = {
  dark: false,
  colors: {
    background: '#ffee6a',
    surface: '#ffee6a',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#030303',
    'secondary-darken-1': '#018786',
     error: '#de49b4',
    info: '#2196F3',
    success: '#56fdd6',
    warning: '#ffee6a',
  }
}

const yellowAccent = {
  dark: false,
  colors: {
    background: '#ffee6a',
    surface: '#ffee6a',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#030303',
    'secondary-darken-1': '#018786',
     error: '#de49b4',
    info: '#2196F3',
    success: '#56fdd6',
    warning: '#ffee6a',
  }
}

const purpleWave = {
  dark: false,
  colors: {
    background: '#9044fc',
    surface: '#9044fc',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#030303',
    'secondary-darken-1': '#018786',
     error: '#de49b4',
    info: '#2196F3',
    success: '#56fdd6',
    warning: '#ffee6a',
  }
}

const purpleAccent = {
  dark: false,
  colors: {
    background: '#9044fc',
    surface: '#9044fc',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#030303',
    'secondary-darken-1': '#018786',
     error: '#de49b4',
    info: '#2196F3',
    success: '#56fdd6',
    warning: '#ffee6a',
  }
}

const pinkWave = {
  dark: false,
  colors: {
    background: '#de49b4',
    surface: '#de49b4',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#56fdd6',
    'secondary-darken-1': '#018786',
     error: '#de49b4',
    info: '#2196F3',
    success: '#56fdd6',
    warning: '#ffee6a',
  }
}

const pinkAccent = {
  dark: false,
  colors: {
    background: '#de49b4',
    surface: 'pink',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#56fdd6',
    'secondary-darken-1': '#018786',
     error: '#de49b4',
    info: '#2196F3',
    success: '#56fdd6',
    warning: '#ffee6a',
  }
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'theme',
      themes: {
        theme,
        accent,
        white,
        glass,
        purple,
        green,
        pink,
        yellow,
        whiteGrey,
        darkGrey,
        yellowWave,
        greenWave,
        purpleWave,
        pinkWave,
        pinkAccent,
        greenAccent,
        purpleAccent,
        yellowAccent
      }
    },
    ssr: true,
    components,
    directives,
  })

  console.log('yes', 'reaching here')

  nuxtApp.vueApp.use(vuetify)
});