type StylePropsType = string | number | boolean;

interface StyleProps {
  width?: string;
  height?: string;
  fontSize?: string;
  cursor?: string;
  borderRadius?: string;
  fontWeight?: string;
  border?: string;
  transition?: string;
  hover?: StyleProps;
  backgroundColor?: string;
  bgColor?: string;
  color?: string;
}

export default StyleProps;
