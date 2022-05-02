type validStylePropsType = {
  [key: string]: string;
};

const validStyleProps: validStylePropsType = {
  //width properties
  w: "width",
  minw: "minWidth",
  maxw: "maxWidth",

  //height properties
  h: "height",
  minh: "minHeight",
  maxh: "maxHeight",

  //background properties
  bgcolor: "backgroundColor",
  bgimage: "backgroundImage",
  bg: "background",
  bgsize: "backgroundSize",
  bgrepeat: "backgroundRepeat",

  //border properties
  b: "border",
  bl: "borderLeft",
  br: "borderRight",
  bt: "borderTop",
  bb: "borderBottom",
  bc: "borderColor",
  brad: "borderRadius",
  bs: "borderStyle",

  //padding properties
  p: "padding",
  pl: "paddingLeft",
  pr: "paddingRight",
  pb: "paddingBottom",
  pt: "paddingTop",

  //margin properties
  m: "margin",
  ml: "marginLeft",
  mr: "marginRight",
  mb: "marginBottom",
  mt: "marginTop",

  //font properties
  fs: "fontSize",
  fw: "fontWeight",

  //display properties
  dis: "display",
  jc: "justifyContent",
  ai: "alignItems",

  td: "textDecoration",
  cur: "cursor",
  color: "color",
  t: "transition",
  boxsizing: "boxSizing",
};

export default validStyleProps;
