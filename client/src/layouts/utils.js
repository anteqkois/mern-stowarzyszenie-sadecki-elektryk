const lightColors = {
  primary: '#FFFFFF',
  secondary: '#F3F3F3',
  accent: '#4D0A83',
  text: '#333333',
  label: '#908E9B',
  noActive: '#C4C2CD',
  gradient: 'linear-gradient(35.25deg, #4D0A83 28.05%, #A2141B 107.82%)',
};

const darkColors = {
  primary: '#FFFFFF',
  secondary: '#F3F3F3',
  accent: '#4D0A83',
  text: '#333333',
  label: '#908E9B',
  noActive: '#C4C2CD',
  gradient: 'linear-gradient(35.25deg, #4D0A83 28.05%, #A2141B 107.82%)',
};

const typography = {
  sizeLarge: '128px',
  sizeH1: '92px',
  sizeH2: '64px',
  sizeH3: '42px',
  sizeH4: '34px',
  sizeH5: '26px',
  sizeH6: '20px',
  sizeBodyText: '16px',
  sizeTiny: '13px',
  weightMedium: '500',
  weightBold: '700',
  weightExtraBold: '800',
  weightBlack: '900',
};
const zIndex = {
  levelMinus1: '-1000',
  level1: '1000',
  level2: '2000',
  level3: '3000',
  level4: '4000',
  level5: '5000',
  level6: '6000',
  level7: '7000',
  level8: '8000',
  level9: '9000',
  level10: '10000',
};
const media = {
  huge: '@media (min-width: 1700px)',
  bigDesktop: '@media (min-width: 1440px)',
  desktop: '@media (min-width: 1150px)',
  bigTablet: '@media (min-width: 1020px)',
  tablet: '@media (min-width: 768px)',
  bigPhone: '@media (min-width: 400px)',
};

export const LightTheme = {
  colors: lightColors,
  typography,
  zIndex,
  media,
};
export const DarkTheme = {
  colors: darkColors,
  typography,
  zIndex,
  media,
};

// Limit line length to 70–80 characters.