'use client'

import { Nunito_Sans, Oswald } from 'next/font/google'
import { createGlobalStyle } from 'styled-components'

const oswald = Oswald({ subsets: ['latin'] })
const nunitoSans = Nunito_Sans({ subsets: ['latin'] })

// prettier-ignore
export const reset = (isOutlineEnabled?: boolean) => {
  const outline = isOutlineEnabled ? '' : 'outline: none;\n'

  return `
  *, :after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    ${outline}
  }

  html {
    font-family: ${nunitoSans.style.fontFamily};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${oswald.style.fontFamily};
  }
  
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article,
  aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav,
  output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font-smooth: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  p {
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  a:-webkit-any-link {
    text-decoration: none;
    color: inherit;
  }

  input { 
    outline: none; 
  }
  
   textarea, button {
    color: inherit;
    background-color: inherit;
    padding: 0;
    border-width: 0;
    border-style: none;
    border-color: none;
    border-image: none;
    ${outline}
    border: none;
    -webkit-appearance: none;
    border-radius: 0;
    -webkit-border-radius: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    -moz-appearance: none;
  }
  
  input:required {
    box-shadow: none;
  }
  input:invalid {
    box-shadow: none;
  }
  
  input[type='file']::-webkit-file-upload-button {
    color: inherit;
    background-color: inherit;
    padding: 0;
    border-width: 0;
    border-style: none;
    border-color: none;
    border-image: none;
    ${outline}
    border: none;
    -webkit-appearance: none;
    border-radius: 0;
    -webkit-border-radius: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    -moz-appearance: none;
  }
  
  input[type='file']::-webkit-file-upload-button {
    cursor: pointer;
  }
  
  button, input[type='submit'] {
    cursor: pointer;
  }
  `;
};

export default createGlobalStyle`${({
  className,
  isOutlineEnabled
}: {
  className?: string
  isOutlineEnabled?: boolean
}): string =>
  className
    ? `.${className}{${reset(isOutlineEnabled)}}`
    : reset(isOutlineEnabled)}`
