import { createTheme } from '@mui/material/styles';

import Autobusbold from '../assets/fonts/AsapR.ttf';

const palette = {
  primary: {
    main: '#4873AF',
    light: '#E5EFFD',
    dark: '#355888',
  },
  secondary: {
    main: '#44474D',
    dark: '#060606',
    light: '#808080',
    text: '#808080',
  },
  common: {
    white: '#ffffff',
    black: '#272727',
  },
  nude: {
    main: '#fd7f01',
  },
};

declare module '@mui/material/styles' {
  interface TypographyVariants {
    subtitle3: React.CSSProperties;
    body3: React.CSSProperties;
    label1: React.CSSProperties;
    label2: React.CSSProperties;
    label3: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    subtitle3?: React.CSSProperties;
    body3?: React.CSSProperties;
    label1?: React.CSSProperties;
    label2?: React.CSSProperties;
    label3?: React.CSSProperties;
  }

  interface Palette {
    nude: Palette['primary'];
  }

  interface PaletteOptions {
    nude: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    subtitle3: true;
    body3: true;
    label1: true;
    label2: true;
    label3: true;
  }
}

export const VendyMaTheme = createTheme({
  palette: palette,
  components: {
    MuiCssBaseline: {
      styleOverrides: `
                @font-face {
                  font-family: 'Autobusbold';
                  src: url(${Autobusbold}) format('truetype');
                }
            `,
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: '1rem',
          fontFamily: 'Autobusbold',
          fontWeight: 700,
          color: palette.secondary.dark,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          // padding: '8px 20px',
          boxShadow: 'none',
          borderRadius: '10px',
          fontSize: '1rem',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontFamily: 'Autobusbold',
          background: palette.common.white,
        },
      },
    },
  },
  typography: {
    fontFamily: 'Autobusbold, Arial',
    h1: {
      fontSize: '3.562rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2.8rem',
    },
    h3: {
      fontSize: '2.75rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '2rem',
      color: palette.nude.main,
      letterSpacing: 1.5,
      fontWeight: 700,
    },
    h5: {
      fontSize: '1.75rem',
      textTransform: 'capitalize',
      color: palette.nude.main,
    },
    h6: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: '1.125rem',
      fontWeight: 600,
    },
    subtitle3: {
      fontSize: '1rem',
      color: palette.common.black,
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      fontFamily: 'MuseoSansB',
    },
    body2: {
      fontSize: '0.875rem',
      color: palette.secondary.text,
    },
    label2: {
      fontSize: '0.875rem',
      fontFamily: 'MuseoSansR',
    },
    label3: {
      fontSize: '0.875rem',
    },
    button: {
      fontSize: '0.875rem',
      textTransform: 'initial',
      fontWeight: 600,
    },
    overline: {
      fontSize: '0.625rem',
    },
  },
});
