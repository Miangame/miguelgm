import { createGlobalStyle } from 'styled-components'
import { Onest } from 'next/font/google'

const OnestFont = Onest({ subsets: ['latin'] })

export const GlobalStyles = createGlobalStyle<{ $isDarkMode?: boolean }>`
  html {
    font-family: ${OnestFont.style.fontFamily}, system-ui, sans-serif;
  }

  body {
    color: ${({ $isDarkMode }) => ($isDarkMode ? '#E5E7EB' : 'rgba(17, 17, 17, 0.9)')};
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overscroll-behavior: none;
    background-color: ${({ $isDarkMode }) => ($isDarkMode ? 'rgb(17, 17, 17)' : '#F0F0FD')};
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }

  #header-nav {
    animation: blur linear both 0.5s;
    animation-timeline: scroll();
    animation-range: 0 500px;
  }

  @keyframes blur {
    to {
      backdrop-filter: blur(20px);
      border-width: 1px;
      border-color: ${({ $isDarkMode }) => ($isDarkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)')};
      padding: 0.25rem 0.75rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: ${({ $isDarkMode }) => ($isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgb(229, 229, 229)')};
      border-radius: 9999px;
    }
  }

  ${({ $isDarkMode }) =>
    $isDarkMode &&
    `
    @keyframes blur {
      from {
        border: 0px;
      }
      to {
        box-shadow:
          0px 5px 50px -5px rgba(0, 0, 0, 0.1),
          0px 0px 0 1px rgba(0, 0, 0, 0.3);
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(20px);
        border-width: 1px;
        border-color: rgba(0, 0, 0);
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 9999px;
      }
    }
  `}
`
