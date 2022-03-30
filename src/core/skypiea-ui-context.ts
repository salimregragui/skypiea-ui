import { createContext } from "react";

export interface ISkypieaUIContext {
  state: {
    designSystem: Object;
  };
  dispatch: ({ type }: { type: string }) => void;
}

const SkypieaUIContext = createContext({});

export default SkypieaUIContext;
