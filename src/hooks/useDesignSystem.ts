import React, { useContext } from "react";
import { SkypieaUIContext } from "../core";
import { ISkypieaUIContext } from "../core/skypiea-ui-context";

const useDesignSystem = () => {
  const skypieaUIContext = useContext(SkypieaUIContext) as ISkypieaUIContext;

  return {
    designSystem: skypieaUIContext.state,
  };
};

export default useDesignSystem;
