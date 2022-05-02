type StylePropsType = string | number | boolean;

interface StyleProps {
  //width propeties
  width?: string;
  minWidth?: string;
  maxWidth?: string;

  //height properties
  height?: string;
  minHeight?: string;
  maxHeight?: string;

  //background properties
  backgroundColor?: string;
  backgroundImage?: string;
  background?: string;
  backgroundSize?: string;
  backgroundRepeat?: string;
  backgroundPosition?: string;

  //border properties
  border?: string;
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  borderBottom?: string;
  borderColor?: string;
  borderRadius?: string;
  borderStyle?: string;

  //padding properties
  padding?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingTop?: string;

  //margin properties
  margin?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
  marginTop?: string;

  //font properties
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;

  //display properties
  display?: string;
  justifyContent?: string;
  alignItems?: string;

  textDecoration?: string;
  boxSizing?: string;
  cursor?: string;
  transition?: string;
  hover?: StyleProps;
  color?: string;
}

export default StyleProps;
