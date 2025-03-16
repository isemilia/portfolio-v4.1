const fontFamily = 'Poppins, sans-serif';
const lineHeight = 1.75;

const shared = {
  padding: 0,
  margin: 0,
};

const variants = {
  desktop: {
    h1: {
      fontSize: '28px',
      fontWeight: 600,
      ...shared,
    },
    h2: {
      fontSize: '24px',
      fontWeight: 500,
      ...shared,
    },
    h3: {
      fontSize: '16px',
      fontWeight: 500,
      ...shared,
    },
    body: {
      fontSize: '16px',
      fontWeight: 400,
      ...shared,
    },
    small: {
      fontSize: '14px',
      fontWeight: 400,
      ...shared,
    },
    extraSmall: {
      fontSize: '12px',
      fontWeight: 400,
      ...shared,
    },
  },
  base: {
    h1: {
      fontSize: '28px',
      fontWeight: 600,
      ...shared,
    },
    h2: {
      fontSize: '20px',
      fontWeight: 500,
      ...shared,
    },
    h3: {
      fontSize: '16px',
      fontWeight: 500,
      ...shared,
    },
    body: {
      fontSize: '14px',
      fontWeight: 400,
      ...shared,
    },
    small: {
      fontSize: '14px',
      fontWeight: 400,
      ...shared,
    },
    extraSmall: {
      fontSize: '12px',
      fontWeight: 400,
      ...shared,
    },
  },
};

const text = {
  fontFamily,
  lineHeight,
  variants,
};

export default text;
