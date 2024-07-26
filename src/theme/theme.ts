
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    main: {
      tigerOrange: '#FF5900',
    },
    secondary:{
      soSunny: '#F78104',
      kindaYellow: '#FAAB36',
      teal: '#005F60',
    },
    success: {
      green: '#04B100',
    },
    error: {
      red: '#5E0505',
    },
    gray: {
      900: '#070708',
      800: "#0E0F0F",
      700: '#797670', 
      600:'#4D4B46',
      500: '#2A2C2E',
      400: '#DEDBD4',
      100: '#F4F3F0',
    },
    orange:{
      50: '#FFF9F6'

    }
  },

  fonts: {
    formula: 'PP Neue Montreal, sans-serif',
    montreal: 'PP Neue Montreal, sans-serif',
    body: 'PP Neue Montreal, sans-serif',
  },
  fontSizes: {
    // Defining custom font sizes for different header types and body
    formulaHeader10XL: '108px',
    formulaHeader9XL: '80px',
    formulaHeader8XL: '64px',
    formulaHeader7XL: '52px',
    formulaHeader6XL: '40px',
    formulaHeader5XL: '36px',
    formulaHeader4XL: '32px',
    formulaHeader3XL: '28px',
    formulaHeader2XL: '24px',
    formulaHeaderXL: '20px',
    formulaHeaderLG: '18px',
    formulaHeaderMD: '16px',
    formulaHeaderSM: '14px',
    formulaHeaderXS: '12px',
    formulaHeader2XS: '10px',

    montrealHeader6XL: '40px',
    montrealHeader5XL: '36px',
    montrealHeader4XL: '32px',
    montrealHeader3XL: '28px',
    montrealHeader2XL: '24px',
    montrealHeaderXL: '20px',
    montrealHeaderLG: '18px',
    montrealHeaderMD: '16px',
    montrealHeaderSM: '14px',
    montrealHeaderXS: '12px',
    montrealHeader2XS: '10px',

    bodyL: '18px',
    bodyM: '16px',
    bodyS: '14px',
    bodyXS: '12px',
  },
  fontWeights: {
    extrabold: 800,
    bold: 700,
    semibold: 600,
    medium:500,
    normal: 400,
    light: 300,
  }
});

export default theme;

