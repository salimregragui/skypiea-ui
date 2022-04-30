import validStyleProps from "../../utils/valid-style-props";
import BaseComponentProps from "../interfaces/base-components-props";
import StyleProps from "../interfaces/style-props";

const generateStyle = (stylingProps: BaseComponentProps) => {
  let splitStyle: string[] = [];
  let splitHoverStyle: string[] = [];
  const finalStyle: StyleProps = {};

  if (stylingProps.style) {
    splitStyle = stylingProps.style.split(" ");
  }

  if (stylingProps.hover) {
    splitHoverStyle = stylingProps.hover.split(" ");
  }

  splitStyle.forEach((styleComponent: string) => {
    const splitStyleComponent: string[] = styleComponent.split("-");

    if (splitStyleComponent[0] in validStyleProps) {
      const styleName = validStyleProps[splitStyleComponent[0]];
      finalStyle[styleName as keyof StyleProps] = splitStyleComponent[1];
    }
  });

  finalStyle["hover"] = {};

  splitHoverStyle.forEach((styleComponent: string) => {
    const splitStyleComponent: string[] = styleComponent.split("-");

    if (splitStyleComponent[0] in validStyleProps) {
      const styleName = validStyleProps[splitStyleComponent[0]];

      if (finalStyle["hover"])
        finalStyle["hover"][styleName as keyof StyleProps] =
          splitStyleComponent[1];
    }
  });

  console.log(finalStyle);

  return finalStyle;
};

export default generateStyle;
