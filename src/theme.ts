import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors = {
  brand: {
    100: "#EBFFFF",
    200: "#EBFFFFB2",
    300: "#1C1C1D",
  },
};

const styles = {
  global: (props) => ({
    body: {
      bg: "brand.300",
      color: "brand.100",
    },
  }),
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
          color: "brand.100",
        },
      },
    },
  },
};

const fonts = {
  heading: `'Source Code Pro', sans-serif`,
  body: `'Source Code Pro', sans-serif`,
};

const theme = extendTheme({
  config,
  components,
  colors,
  fonts,
  styles,
});

export default theme;
