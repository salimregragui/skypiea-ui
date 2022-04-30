import React from "react";

import useDesignSystem from "../../hooks/useDesignSystem";
import BaseComponentProps from "../../core/interfaces/base-components-props";
import styled from "styled-components";
import generateStyle from "../../core/functions/generate-style";

export interface ButtonProps extends BaseComponentProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
  designSystem?: any;
  type: string;
}

const StyledButton = styled.button.attrs((props: { styling: any }) => ({
  styling: props.styling,
}))`
  width: ${(props) => props.styling && props.styling.width};
  font-size: ${(props) => props.styling && props.styling.fontSize};
  height: ${(props) => props.styling && props.styling.height};
  background-color: ${(props) =>
    props.styling && props.styling.backgroundColor};
  cursor: ${(props) => props.styling && props.styling.cursor};
  color: ${(props) => props.styling && props.styling.color};
  transition: ${(props) => props.styling && props.styling.transition};

  &:hover {
    width: ${(props) => props.styling && props.styling.hover.width};
    font-size: ${(props) => props.styling && props.styling.hover.fontSize};
    height: ${(props) => props.styling && props.styling.hover.height};
    background-color: ${(props) =>
      props.styling && props.styling.hover.backgroundColor};
    cursor: ${(props) => props.styling && props.styling.hover.cursor};
    color: ${(props) => props.styling && props.styling.hover.color};
    transition: ${(props) => props.styling && props.styling.hover.transition};
  }
`;

const Button = (props: ButtonProps) => {
  const designSystem = useDesignSystem();

  return (
    <StyledButton onClick={props.onClick} styling={generateStyle({ ...props })}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
