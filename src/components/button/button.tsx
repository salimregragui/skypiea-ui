import React from "react";

import useDesignSystem from "../../hooks/useDesignSystem";
import BaseComponentProps from "../../core/interfaces/base-components-props";
import styled from "styled-components";

export interface ButtonProps extends BaseComponentProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
  designSystem?: any;
  type: string;
}

const StyledButton = styled.button.attrs((props: ButtonProps) => ({
  width: props.width,
  height: props.height,
  fontSize: props.fontSize,
  fs: props.fs,
  cursor: props.cursor,
  borderRadius: props.borderRadius,
  br: props.br,
  fontWeight: props.fontWeight,
  fw: props.fw,
  border: props.border,
  transition: props.transition,
  backgroundColor: props.backgroundColor,
  bgColor: props.bgColor,
  hover: props.hover,
  color: props.color,
  designSystem: props.designSystem,
  type: props.type,
}))`
  width: ${(props) =>
    props.width || (props.type && props.designSystem.button[props.type].width)};
  height: ${(props) =>
    props.height ||
    (props.type && props.designSystem.button[props.type].height)};
  font-size: ${(props) =>
    props.fontSize ||
    props.fs ||
    (props.type && props.designSystem.button[props.type].fontSize)};
  font-weight: ${(props) =>
    props.fontWeight ||
    props.fw ||
    (props.type && props.designSystem.button[props.type].fontWeight)};
  cursor: ${(props) =>
    props.cursor ||
    (props.type && props.designSystem.button[props.type].cursor)};
  border-radius: ${(props) =>
    props.borderRadius ||
    props.br ||
    (props.type && props.designSystem.button[props.type].borderRadius)};
  border: ${(props) =>
    props.border ||
    (props.type && props.designSystem.button[props.type].border)};
  transition: ${(props) =>
    props.transition ||
    (props.type && props.designSystem.button[props.type].transition)};
  background-color: ${(props) =>
    props.backgroundColor ||
    props.bgColor ||
    (props.type && props.designSystem.button[props.type].backgroundColor)};
  color: ${(props) =>
    props.color || (props.type && props.designSystem.button[props.type].color)};

  &:hover {
    ${(props) =>
      props.hover
        ? `width: ${
            props.hover.width ||
            (props.type && props.designSystem.button[props.type].hover.width)
          }`
        : ""};
    ${(props) =>
      props.hover
        ? `height: ${
            props.hover.height ||
            (props.type && props.designSystem.button[props.type].hover.height)
          }`
        : ""};
    ${(props) =>
      props.hover
        ? props.hover.fontSize || props.hover.fs
          ? `font-size: ${
              props.hover.fontSize ||
              props.hover.fs ||
              (props.type &&
                props.designSystem.button[props.type].hover.fontSize)
            }`
          : ""
        : ""};
    ${(props) =>
      props.hover
        ? props.hover.fontWeight || props.hover.fw
          ? `font-weight: ${
              props.hover.fontWeight ||
              props.hover.fw ||
              (props.type &&
                props.designSystem.button[props.type].hover.fontWeight)
            }`
          : ""
        : ""};
    ${(props) =>
      props.hover
        ? `cursor: ${
            props.hover.cursor ||
            (props.type && props.designSystem.button[props.type].hover.cursor)
          }`
        : ""};
    ${(props) =>
      props.hover
        ? `border-radius: ${
            props.hover.borderRadius ||
            props.hover.br ||
            (props.type &&
              props.designSystem.button[props.type].hover.borderRadius)
          }`
        : ""};
    ${(props) =>
      props.hover
        ? `border: ${
            props.hover.border ||
            (props.type && props.designSystem.button[props.type].hover.border)
          }`
        : ""};
    ${(props) =>
      props.hover
        ? `transition: ${
            props.hover.transition ||
            (props.type &&
              props.designSystem.button[props.type].hover.transition)
          }`
        : ""};
    ${(props) =>
      props.hover
        ? `color: ${
            props.hover.color ||
            (props.type && props.designSystem.button[props.type].hover.color)
          }`
        : ""};
    ${(props) =>
      props.hover
        ? `background-color: ${
            props.backgroundColor ||
            props.hover.bgColor ||
            (props.type &&
              props.designSystem.button[props.type].hover.backgroundColor)
          }`
        : ""};
  }
`;

const Button = ({
  width,
  height,
  fs,
  fontSize,
  onClick,
  children,
  borderRadius,
  br,
  fontWeight,
  fw,
  border,
  transition,
  backgroundColor,
  bgColor,
  hover,
  color,
  type,
}: ButtonProps) => {
  const designSystem = useDesignSystem();

  return (
    <StyledButton
      onClick={onClick}
      width={width}
      height={height}
      fs={fs}
      fontSize={fontSize}
      borderRadius={borderRadius}
      br={br}
      fontWeight={fontWeight}
      fw={fw}
      border={border}
      transition={transition}
      backgroundColor={backgroundColor}
      bgColor={bgColor}
      hover={hover || {}}
      color={color}
      designSystem={designSystem.designSystem}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
