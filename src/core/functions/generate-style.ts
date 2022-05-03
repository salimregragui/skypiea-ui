import validStyleProps from "../../utils/valid-style-props";
import BaseComponentProps from "../interfaces/base-components-props";
import MediaStyleProps from "../interfaces/media-style-props";
import StyleProps from "../interfaces/style-props";

const generateStyle = (stylingProps: BaseComponentProps) => {
  //variables that will store the split styling ex: "fs-14px w-200px" => ["fs-14px", "w-200px"]
  let splitStyle: string[] = [];
  let splitHoverStyle: string[] = [];
  let splitFocusStyle: string[] = [];

  //Object that stores the final style detected from the styling strings on the component
  const finalStyle: StyleProps = {};

  //if the dev specified the base style,hover and focus style strings we split them
  if (stylingProps.style) {
    splitStyle = stylingProps.style.split(";");
  }

  if (stylingProps.hover) {
    splitHoverStyle = stylingProps.hover.split(";");
  }

  if (stylingProps.focus) {
    splitFocusStyle = stylingProps.focus.split(";");
  }

  //We loop through all the array of styles provided ex : ["fs-14px", "w-200px"]
  splitStyle.forEach((styleComponent: string) => {
    //We split each array value by "-" ex: "fs-14px" => ["fs", "14px"]
    const splitStyleComponent: string[] = styleComponent.split("-");

    //if the first value of the split array is a valid prop ex: "fs" valid because it's "fontSize",
    //"xs" is invalid because it doesn't convert to anything
    if (splitStyleComponent[0].trim() in validStyleProps) {
      //We convert that value to the correct term ex: "fs" => "fontSize"
      //And then we store it in the final style object
      const styleName = validStyleProps[splitStyleComponent[0].trim()];

      //if it's special type css property where value also has a dash ex: boxSizing:border-box
      if (styleName === "boxSizing")
        finalStyle[styleName as keyof StyleProps] = splitStyleComponent
          .slice(1)
          .join("-");
      else finalStyle[styleName as keyof StyleProps] = splitStyleComponent[1];
    }
  });

  //We initialize hover in order to not get error on trying to access a value from a non
  //existing property
  finalStyle["hover"] = {};

  //We do the same thing we did on base style, but with hover
  splitHoverStyle.forEach((styleComponent: string) => {
    const splitStyleComponent: string[] = styleComponent.split("-");

    if (splitStyleComponent[0].trim() in validStyleProps) {
      const styleName = validStyleProps[splitStyleComponent[0].trim()];

      if (finalStyle["hover"])
        finalStyle["hover"][styleName as keyof StyleProps] =
          splitStyleComponent[1];
    }
  });

  //We initialize focus in order to not get error on trying to access a value from a non
  //existing property
  finalStyle["focus"] = {};

  //We do the same thing we did on base style, but with focus
  splitFocusStyle.forEach((styleComponent: string) => {
    const splitStyleComponent: string[] = styleComponent.split("-");

    if (splitStyleComponent[0].trim() in validStyleProps) {
      const styleName = validStyleProps[splitStyleComponent[0].trim()];

      if (finalStyle["focus"])
        finalStyle["focus"][styleName as keyof StyleProps] =
          splitStyleComponent[1];
    }
  });

  //if the dev specified media queries styling
  if (stylingProps.media) {
    finalStyle["media"] = {};
    //we loop through all the media style strings
    for (let mediaBreakPoint in stylingProps.media) {
      if (stylingProps.media[mediaBreakPoint as keyof MediaStyleProps]) {
        finalStyle["media"][mediaBreakPoint as keyof MediaStyleProps] = {};
        stylingProps.media[mediaBreakPoint as keyof MediaStyleProps]
          ?.split(";")
          .forEach((styleComponent: string) => {
            const splitStyleComponent: string[] = styleComponent.split("-");

            if (splitStyleComponent[0].trim() in validStyleProps) {
              const styleName = validStyleProps[splitStyleComponent[0].trim()];

              if (finalStyle.media) {
                const mediaBreakPointKey =
                  finalStyle["media"][mediaBreakPoint as keyof MediaStyleProps];
                if (mediaBreakPointKey)
                  mediaBreakPointKey[styleName as keyof StyleProps] =
                    splitStyleComponent[1];
              }
            }
          });
      }
    }
  }

  //if bgImage prop is provided
  if (stylingProps.bgImage) finalStyle.backgroundImage = stylingProps.bgImage;

  //if background prop is provided
  if (stylingProps.background) finalStyle.background = stylingProps.background;

  //if background size prop is provided
  if (stylingProps.bgSize) finalStyle.backgroundSize = stylingProps.bgSize;

  //if background repeat prop is provided
  if (stylingProps.bgRepeat)
    finalStyle.backgroundRepeat = stylingProps.bgRepeat;

  //if background position prop is provided
  if (stylingProps.bgPos) finalStyle.backgroundPosition = stylingProps.bgPos;

  console.log(finalStyle);
  return finalStyle;
};

export default generateStyle;
