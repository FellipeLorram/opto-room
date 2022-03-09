import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      logo: string;
      card: string;

      background: {
        primary: string;
        secondary: string;
        hover: string;
      },

      text: {
        primary: string;
        secondary: string;
      }
      button: {
        primary: string;
        primaryHover: string;
        inverse: string;
        inverseHover: string;
      },
      localColors: {
        color1: string,
        color2: string,
        color3: string,
        color4: string,
        color5: string,
        color6: string,
      }
    }
  }
}