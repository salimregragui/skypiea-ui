import React from "react";

import useDesignSystem from "../../hooks/useDesignSystem";
import BaseComponentProps from "../../core/interfaces/base-components-props";
import styled from "styled-components";

export interface ButtonProps extends BaseComponentProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
}

const StyledButton = styled.button.attrs((props: ButtonProps) => ({
  width: props.width || "120px",
  height: props.height || "40px",
  fontSize: props.fontSize,
  fs: props.fs,
  cursor: props.cursor || "pointer",
  borderRadius: props.borderRadius,
  br: props.br,
  fontWeight: props.fontWeight,
  fw: props.fw,
  border: props.border,
}))`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize || props.fs || "20px"};
  font-weight: ${(props) => props.fontWeight || props.fw || "400"};
  cursor: ${(props) => props.cursor};
  border-radius: ${(props) => props.borderRadius || props.br || "5px"};
  border: ${(props) => props.border || "1px solid black"};
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
}: ButtonProps) => {
  const designSystem = useDesignSystem();

  return (
    <StyledButton
      type="button"
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
    >
      {children}
    </StyledButton>
  );
};

export default Button;
