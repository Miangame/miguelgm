import { colors } from './color'
import { getSizes } from './size'
import { transition } from './transition'

const baseTheme = {
  colors,
  size: getSizes(false),
  transition
}

export const lightTheme = {
  ...baseTheme
}

export const darkTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    highlight1: '#FEF08A',
    highlight2: '#FACC15',
    text: '#D1D5DB',
    pillBackground: '#1F2937',
    experienceLine: '#ffffff26'
  }
}
