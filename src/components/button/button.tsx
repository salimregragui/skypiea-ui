import React from "react";

import useDesignSystem from "../../hooks/useDesignSystem";
import BaseComponentProps from "../../core/interfaces/base-components-props";
import styled from "styled-components";
import generateStyle from "../../core/functions/generate-style";
import StyleProps from "../../core/interfaces/style-props";

export interface ButtonProps extends BaseComponentProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
  designSystem?: any;
  type: string;
  as?: string | undefined;
  href?: string | undefined;
}

const StyledButton = styled.button.attrs((props: { styling: StyleProps }) => ({
  styling: props.styling,
}))`
  //width properties
  width: ${(props) => props.styling && props.styling.width};
  min-width: ${(props) => props.styling && props.styling.minWidth};
  max-width: ${(props) => props.styling && props.styling.maxWidth};

  //height properties
  height: ${(props) => props.styling && props.styling.height};
  min-height: ${(props) => props.styling && props.styling.minHeight};
  max-height: ${(props) => props.styling && props.styling.maxHeight};

  //background properties
  background-color: ${(props) =>
    props.styling && props.styling.backgroundColor};
  background-image: ${(props) =>
    props.styling && props.styling.backgroundImage};
  background: ${(props) => props.styling && props.styling.background};
  background-size: ${(props) => props.styling && props.styling.backgroundSize};
  background-repeat: ${(props) =>
    props.styling && props.styling.backgroundRepeat};
  background-position: ${(props) =>
    props.styling && props.styling.backgroundPosition};

  //border properties
  border: ${(props) => props.styling && props.styling.border};
  border-left: ${(props) => props.styling && props.styling.borderLeft};
  border-right: ${(props) => props.styling && props.styling.borderRight};
  border-top: ${(props) => props.styling && props.styling.borderTop};
  border-bottom: ${(props) => props.styling && props.styling.borderBottom};
  border-radius: ${(props) => props.styling && props.styling.borderRadius};
  border-style: ${(props) => props.styling && props.styling.borderStyle};
  border-color: ${(props) => props.styling && props.styling.borderColor};

  //padding properties
  padding: ${(props) => props.styling && props.styling.padding};
  padding-left: ${(props) => props.styling && props.styling.paddingLeft};
  padding-right: ${(props) => props.styling && props.styling.paddingRight};
  padding-top: ${(props) => props.styling && props.styling.paddingTop};
  padding-bottom: ${(props) => props.styling && props.styling.paddingBottom};

  //margin properties
  margin: ${(props) => props.styling && props.styling.margin};
  margin-left: ${(props) => props.styling && props.styling.marginLeft};
  margin-right: ${(props) => props.styling && props.styling.marginRight};
  margin-top: ${(props) => props.styling && props.styling.marginTop};
  margin-bottom: ${(props) => props.styling && props.styling.marginBottom};

  //font properties
  font-size: ${(props) => props.styling && props.styling.fontSize};
  font-weight: ${(props) => props.styling && props.styling.fontWeight};

  //display properties
  display: ${(props) => props.styling && props.styling.display};
  justify-content: ${(props) => props.styling && props.styling.justifyContent};
  align-items: ${(props) => props.styling && props.styling.alignItems};

  text-decoration: ${(props) => props.styling && props.styling.textDecoration};
  box-sizing: ${(props) => props.styling && props.styling.boxSizing};
  cursor: ${(props) => props.styling && props.styling.cursor};
  color: ${(props) => props.styling && props.styling.color};
  transition: ${(props) => props.styling && props.styling.transition};

  &:hover {
    //width properties
    width: ${(props) => props.styling.hover && props.styling.hover.width};
    min-width: ${(props) =>
      props.styling.hover && props.styling.hover.minWidth};
    max-width: ${(props) =>
      props.styling.hover && props.styling.hover.maxWidth};

    //height properties
    height: ${(props) => props.styling.hover && props.styling.hover.height};
    min-height: ${(props) =>
      props.styling.hover && props.styling.hover.minHeight};
    max-height: ${(props) =>
      props.styling.hover && props.styling.hover.maxHeight};

    //background properties
    background-color: ${(props) =>
      props.styling.hover && props.styling.hover.backgroundColor};
    background-image: ${(props) =>
      props.styling.hover && props.styling.hover.backgroundImage};
    background: ${(props) =>
      props.styling.hover && props.styling.hover.background};
    background-size: ${(props) =>
      props.styling.hover && props.styling.hover.backgroundSize};
    background-repeat: ${(props) =>
      props.styling.hover && props.styling.hover.backgroundRepeat};
    background-position: ${(props) =>
      props.styling.hover && props.styling.hover.backgroundPosition};

    //border properties
    border: ${(props) => props.styling.hover && props.styling.hover.border};
    border-left: ${(props) =>
      props.styling.hover && props.styling.hover.borderLeft};
    border-right: ${(props) =>
      props.styling.hover && props.styling.hover.borderRight};
    border-top: ${(props) =>
      props.styling.hover && props.styling.hover.borderTop};
    border-bottom: ${(props) =>
      props.styling.hover && props.styling.hover.borderBottom};
    border-radius: ${(props) =>
      props.styling.hover && props.styling.hover.borderRadius};
    border-style: ${(props) =>
      props.styling.hover && props.styling.hover.borderStyle};
    border-color: ${(props) =>
      props.styling.hover && props.styling.hover.borderColor};

    //padding properties
    padding: ${(props) => props.styling.hover && props.styling.hover.padding};
    padding-left: ${(props) =>
      props.styling.hover && props.styling.hover.paddingLeft};
    padding-right: ${(props) =>
      props.styling.hover && props.styling.hover.paddingRight};
    padding-top: ${(props) =>
      props.styling.hover && props.styling.hover.paddingTop};
    padding-bottom: ${(props) =>
      props.styling.hover && props.styling.hover.paddingBottom};

    //margin properties
    margin: ${(props) => props.styling.hover && props.styling.hover.margin};
    margin-left: ${(props) =>
      props.styling.hover && props.styling.hover.marginLeft};
    margin-right: ${(props) =>
      props.styling.hover && props.styling.hover.marginRight};
    margin-top: ${(props) =>
      props.styling.hover && props.styling.hover.marginTop};
    margin-bottom: ${(props) =>
      props.styling.hover && props.styling.hover.marginBottom};

    //font properties
    font-size: ${(props) =>
      props.styling.hover && props.styling.hover.fontSize};
    font-weight: ${(props) =>
      props.styling.hover && props.styling.hover.fontWeight};

    //display properties
    display: ${(props) => props.styling.hover && props.styling.hover.display};
    justify-content: ${(props) =>
      props.styling.hover && props.styling.hover.justifyContent};
    align-items: ${(props) =>
      props.styling.hover && props.styling.hover.alignItems};

    text-decoration: ${(props) =>
      props.styling.hover && props.styling.hover.textDecoration};
    box-sizing: ${(props) =>
      props.styling.hover && props.styling.hover.boxSizing};
    cursor: ${(props) => props.styling.hover && props.styling.hover.cursor};
    color: ${(props) => props.styling.hover && props.styling.hover.color};
    transition: ${(props) =>
      props.styling.hover && props.styling.hover.transition};
  }
`;

const Button = (props: ButtonProps) => {
  const designSystem = useDesignSystem();

  return (
    <StyledButton
      as={props.as}
      href={props.href}
      onClick={props.onClick}
      styling={generateStyle({ ...props })}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
