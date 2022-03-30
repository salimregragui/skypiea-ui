import React from "react";

import SkypieaUICore from "../src/core/skypiea-ui-core";

const ThemeDecorator = (props) => (
  <SkypieaUICore designSystem={{ test: "test" }}>
    {props.children}
  </SkypieaUICore>
);

export default ThemeDecorator;
