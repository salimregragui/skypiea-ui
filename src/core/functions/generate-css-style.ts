import StyleProps from "../interfaces/style-props";

const generateCssStyle = (props: StyleProps) => {
  return `
    //width properties
    ${props.width ? "width:" + props.width : ""};
    ${props.minWidth ? "min-width:" + props.minWidth : ""};
    ${props.maxWidth ? "max-width:" + props.maxWidth : ""};

    //height properties
    ${props.height ? "height:" + props.height : ""};
    ${props.minHeight ? "min-height:" + props.minHeight : ""};
    ${props.maxHeight ? "max-height:" + props.maxHeight : ""};

    //background properties
    ${props.backgroundColor ? "background-color:" + props.backgroundColor : ""};
    ${props.backgroundImage ? "background-image:" + props.backgroundImage : ""};
    ${props.background ? "background:" + props.background : ""};
    ${props.backgroundSize ? "background-size:" + props.backgroundSize : ""};
    ${
      props.backgroundRepeat
        ? "background-repeat:" + props.backgroundRepeat
        : ""
    };
    ${
      props.backgroundPosition
        ? "background-position:" + props.backgroundPosition
        : ""
    };

    //border properties
    ${props.border ? "border:" + props.border : ""};
    ${props.borderLeft ? "border-left:" + props.borderLeft : ""};
    ${props.borderRight ? "border-right:" + props.borderRight : ""};
    ${props.borderTop ? "border-top:" + props.borderTop : ""};
    ${props.borderBottom ? "border-bottom:" + props.borderBottom : ""};
    ${props.borderRadius ? "border-radius:" + props.borderRadius : ""};
    ${props.borderStyle ? "border-style:" + props.borderStyle : ""};
    ${props.borderColor ? "border-color:" + props.borderColor : ""};

    //padding properties
    ${props.padding ? "padding:" + props.padding : ""};
    ${props.paddingLeft ? "padding-left:" + props.paddingLeft : ""};
    ${props.paddingRight ? "padding-right:" + props.paddingRight : ""};
    ${props.paddingTop ? "padding-top:" + props.paddingTop : ""};
    ${props.paddingBottom ? "padding-bottom:" + props.paddingBottom : ""};

    //margin properties
    ${props.margin ? "margin:" + props.margin : ""};
    ${props.marginLeft ? "margin-left:" + props.marginLeft : ""};
    ${props.marginRight ? "margin-right:" + props.marginRight : ""};
    ${props.marginTop ? "margin-top:" + props.marginTop : ""};
    ${props.marginBottom ? "margin-bottom:" + props.marginBottom : ""};

    //font properties
    ${props.fontSize ? "font-size:" + props.fontSize : ""};
    ${props.fontWeight ? "font-weight:" + props.fontWeight : ""};
    ${props.fontFamily ? "font-family:" + props.fontFamily : ""};

    //display properties
    ${props.display ? "display:" + props.display : ""};
    ${props.justifyContent ? "justify-content:" + props.justifyContent : ""};
    ${props.alignItems ? "align-items:" + props.alignItems : ""};

    //positioning properties
    ${props.position ? "position:" + props.position : ""};
    ${props.top ? "top:" + props.top : ""};
    ${props.bottom ? "bottom:" + props.bottom : ""};
    ${props.left ? "left:" + props.left : ""};
    ${props.right ? "right:" + props.right : ""};

    ${props.textDecoration ? "text-decoration:" + props.textDecoration : ""};
    ${props.boxSizing ? "box-sizing:" + props.boxSizing : ""};
    ${props.cursor ? "cursor:" + props.cursor : ""};
    ${props.color ? "color:" + props.color : ""};
    ${props.transition ? "transition:" + props.transition : ""};
    `;
};

export default generateCssStyle;
