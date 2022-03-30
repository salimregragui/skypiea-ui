import React, { useContext } from "react";
import { SkypieaUIContext } from "../core";
import { ISkypieaUIContext } from "../core/skypiea-ui-context";

const useDesignSystem = () => {
  const skypieaUIContext = useContext(SkypieaUIContext);

  return {
    ...(skypieaUIContext as ISkypieaUIContext).state.designSystem,
  };
};

export default useDesignSystem;
