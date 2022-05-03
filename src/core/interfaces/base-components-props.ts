import MediaStyleProps from "./media-style-props";

interface BaseComponentProps {
  style?: string;
  hover?: string;
  focus?: string;
  media?: MediaStyleProps;
  bgImage?: string;
  background?: string;
  bgPos?: string;
  bgSize?: string;
  bgRepeat?: string;
}

export default BaseComponentProps;
