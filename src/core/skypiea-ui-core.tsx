import React, { useReducer } from "react";
import SkypieaUIContext from "./skypiea-ui-context";
import SkypieaUIReducer, { ISkypieaUIReducerState } from "./skypiea-ui-reducer";
import useDesignSystem from "../hooks/useDesignSystem";

function SkypieaUI({
  children,
  designSystem,
}: {
  children: React.ReactNode[];
  designSystem?: Object;
}) {
  const [state, dispatch] = useReducer(SkypieaUIReducer, {
    designSystem,
  });

  const value = { state, dispatch };

  return (
    <SkypieaUIContext.Provider value={value}>
      {children}
    </SkypieaUIContext.Provider>
  );
}

export default SkypieaUI;
