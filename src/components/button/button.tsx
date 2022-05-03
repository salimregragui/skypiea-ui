import React from "react";

import useDesignSystem from "../../hooks/useDesignSystem";
import BaseComponentProps from "../../core/interfaces/base-components-props";
import styled from "styled-components";
import generateStyle from "../../core/functions/generate-style";
import StyleProps from "../../core/interfaces/style-props";
import generateCssStyle from "../../core/functions/generate-css-style";
import DefaultBreakPoints from "../../utils/default-breakpoints";

export interface ButtonProps extends BaseComponentProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
  designSystem?: any;
  type: string;
  as?: React.ElementType;
  href?: string;
}

const StyledButton = styled.button.attrs(
  (props: { styling: StyleProps; as: string }) => ({
    styling: props.styling,
    as: props.as,
  })
)`
  ${(props) => props.styling && generateCssStyle(props.styling)}

  &:hover {
    ${(props) => props.styling.hover && generateCssStyle(props.styling.hover)}
  }

  &:focus {
    ${(props) => props.styling.focus && generateCssStyle(props.styling.focus)}
  }

  @media screen and (min-width: ${DefaultBreakPoints.sm}) {
    ${(props) =>
      props.styling.media &&
      props.styling.media.sm &&
      generateCssStyle(props.styling.media.sm)}
  }

  @media screen and (min-width: ${DefaultBreakPoints.md}) {
    ${(props) =>
      props.styling.media &&
      props.styling.media.md &&
      generateCssStyle(props.styling.media.md)}
  }

  @media screen and (min-width: ${DefaultBreakPoints.lg}) {
    ${(props) =>
      props.styling.media &&
      props.styling.media.lg &&
      generateCssStyle(props.styling.media.lg)}
  }

  @media screen and (min-width: ${DefaultBreakPoints.xl}) {
    ${(props) =>
      props.styling.media &&
      props.styling.media.xl &&
      generateCssStyle(props.styling.media.xl)}
  }

  @media screen and (min-width: ${DefaultBreakPoints["2xl"]}) {
    ${(props) =>
      props.styling.media &&
      props.styling.media["2xl"] &&
      generateCssStyle(props.styling.media["2xl"])}
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
