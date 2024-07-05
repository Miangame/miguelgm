import styled from 'styled-components'

interface DarkModeProps {
  $isDarkMode: boolean
}

export const DarkBackground = styled.div<DarkModeProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: -2;
  min-height: 100vh;
  width: 100%;
  background: ${({ $isDarkMode }) =>
    $isDarkMode
      ? 'radial-gradient(ellipse 80% 100% at 50% -20%, rgba(120,119,198,0.3), rgba(255,255,255,0))'
      : 'radial-gradient(ellipse 80% 100% at 50% -20%, rgba(217,216,255,0.5), rgba(255,255,255,0.9))'};

  background-color: ${({ $isDarkMode }) =>
    $isDarkMode ? 'rgb(3 7 18 / 1)' : '#f7fafc'};
`
