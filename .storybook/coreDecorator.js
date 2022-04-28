import React from "react";

import SkypieaUICore from "../src/core/skypiea-ui-core";

const ThemeDecorator = (props) => (
  <SkypieaUICore
    designSystem={{
      button: {
        base: {
          width: "200px",
          height: "40px",
          fontSize: "16px",
          fontWeight: "600",
          transition: "0.2s",
          color: "green",
          hover: {
            width: "300px",
            transition: "0.2s",
            color: "blue",
            cursor: "pointer",
          },
        },
      },
    }}
  >
    {props.children}
  </SkypieaUICore>
);

export default ThemeDecorator;
