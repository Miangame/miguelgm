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
  ...baseTheme
}
