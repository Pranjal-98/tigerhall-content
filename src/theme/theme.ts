
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
      // Add more colors as needed
    },
    success: {
      green: '#04B100',
    },
    error: {
      red: '#5E0505',
    },
    // Add other color categories if needed
  },

  fonts: {
    formula: 'PP Neue Montreal, sans-serif',
    montreal: 'PP Neue Montreal, sans-serif',
    body: 'PP Neue Montreal, sans-serif', // Default for body text
  },
  fontSizes: {
    // Define custom font sizes for different header types and body
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
    normal: 400,
    light: 300,
  },

  textStyles: {
    formulaHeader10XL: {
      fontFamily: 'formula',
      fontWeight: 'extrabold',
      fontSize: 'formulaHeader10XL',
    },
    formulaHeader9XL: {
      fontFamily: 'formula',
      fontWeight: 'extrabold',
      fontSize: 'formulaHeader9XL',
    },
    formulaHeader8XL: {
      fontFamily: 'formula',
      fontWeight: 'extrabold',
      fontSize: 'formulaHeader8XL',
    },
    formulaHeader7XL: {
      fontFamily: 'formula',
      fontWeight: 'extrabold',
      fontSize: 'formulaHeader7XL',
    },
    formulaHeader6XL: {
      fontFamily: 'formula',
      fontWeight: 'extrabold',
      fontSize: 'formulaHeader6XL',
    },
    formulaHeader5XL: {
      fontFamily: 'formula',
      fontWeight: 'extrabold',
      fontSize: 'formulaHeader5XL',
    },
    formulaHeader4XL: {
        fontFamily: 'formula',
        fontWeight: 'extrabold',
        fontSize: 'formulaHeader4XL',
      },
    formulaHeader3XL: {
        fontFamily: 'formula',
        fontWeight: 'extrabold',
        fontSize: 'formulaHeader3XL',
    },
    formulaHeader2XL: {
        fontFamily: 'formula',
        fontWeight: 'extrabold',
        fontSize: 'formulaHeader2XL',
    },
    formulaHeaderXL: {
        fontFamily: 'formula',
        fontWeight: 'extrabold',
        fontSize: 'formulaHeaderXL',
    },
    formulaHeaderLG: {
        fontFamily: 'formula',
        fontWeight: 'extrabold',
        fontSize: 'formulaHeaderLG',
    },
    formulaHeaderMD: {
        fontFamily: 'formula',
        fontWeight: 'extrabold',
        fontSize: 'formulaHeaderMD',
    },
    formulaHeaderSM: {
        fontFamily: 'formula',
        fontWeight: 'extrabold',
        fontSize: 'formulaHeaderSM',
    },
    formulaHeaderXS: {
        fontFamily: 'formula',
        fontWeight: 'extrabold',
        fontSize: 'formulaHeaderXS',
    },
    formulaHeader2XS: {
        fontFamily: 'formula',
        fontWeight: 'extrabold',
        fontSize: 'formulaHeader2XS',
    },
    // montreal - bold
    montrealHeader6XL: {
      fontFamily: 'montreal',
      fontWeight: 'bold',
      fontSize: 'montrealHeader6XL',
    },
    montrealHeader5XL: {
    fontFamily: 'montreal',
    fontWeight: 'bold',
    fontSize: 'montrealHeader5XL',
    },
    montrealHeader4XL: {
    fontFamily: 'montreal',
    fontWeight: 'bold',
    fontSize: 'montrealHeader4XL',
    },
    montrealHeader3XL: {
    fontFamily: 'montreal',
    fontWeight: 'bold',
    fontSize: 'montrealHeader3XL',
    },
    montrealHeader2XL: {
    fontFamily: 'montreal',
    fontWeight: 'bold',
    fontSize: 'montrealHeader2XL',
    },
      montrealHeaderXL: {
        fontFamily: 'montreal',
        fontWeight: 'bold',
        fontSize: 'montrealHeaderXL',
      },
    montrealHeaderLG: {
      fontFamily: 'montreal',
      fontWeight: 'bold',
      fontSize: 'montrealHeaderLG',
    },
    montrealHeaderMD: {
      fontFamily: 'montreal',
      fontWeight: 'bold',
      fontSize: 'montrealHeaderMD',
    },
    montrealHeaderSM: {
      fontFamily: 'montreal',
      fontWeight: 'bold',
      fontSize: 'montrealHeaderSM',
    },
    montrealHeaderXS: {
        fontFamily: 'montreal',
        fontWeight: 'bold',
        fontSize: 'montrealHeaderXS',
      },
    montrealHeader2XS: {
    fontFamily: 'montreal',
    fontWeight: 'bold',
    fontSize: 'montrealHeader2XS',
    },

      //others
    bodyL: {
      fontFamily: 'body',
      fontWeight: 'normal',
      fontSize: 'bodyL',
    },
    bodyM: {
      fontFamily: 'body',
      fontWeight: 'normal',
      fontSize: 'bodyM',
    },
    bodyS: {
      fontFamily: 'body',
      fontWeight: 'normal',
      fontSize: 'bodyS',
    },
    bodyXS: {
      fontFamily: 'body',
      fontWeight: 'normal',
      fontSize: 'bodyXS',
    },
  },


  // You can extend other parts of Chakra UI's theme here
});

export default theme;

