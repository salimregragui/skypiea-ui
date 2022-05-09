import React from "react";

import SkypieaUICore from "../src/core/skypiea-ui-core";

const ThemeDecorator = (props) => (
  <SkypieaUICore
    designSystem={{
      button: {
        base: {
          width: "200px",
          height: "60px",
          fontSize: "16px",
          fontWeight: "600",
          transition: "0.2s",
          color: "green",
          hover: {
            background: "green",
            borderRadius: "5px",
          },
        },
      },
      box: {
        base: {
          width: "200px",
          height: "60px",
          fontSize: "16px",
          fontWeight: "600",
          transition: "0.2s",
          color: "green",
          backgroundColor: "red",
        },
      },
    }}
  >
    {props.children}
  </SkypieaUICore>
);

export default ThemeDecorator;
