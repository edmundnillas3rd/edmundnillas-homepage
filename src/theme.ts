import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    100: "#EBFFFF",
    200: "#EBFFFFB2",
    300: "#1C1C1D",
  },
};

const components = {
  Button: {
    defaultProps: {
      colorScheme: "brand",
    },

    variants: {
      link: {
        _hover: {
          textDecoration: "none",
          color: "brand.100"
        }
      }
    }
  },
};

const fonts = {
  heading: `'Source Code Pro', sans-serif`,
  body: `'Source Code Pro', sans-serif`,
};

const theme = extendTheme({
  components,
  colors,
  fonts,
});

export default theme;