import { createContext } from "react";
import { ISkypieaUIReducerState } from "./skypiea-ui-reducer";

export interface ISkypieaUIContext {
  state: ISkypieaUIReducerState;
  dispatch: any;
}

const SkypieaUIContext = createContext({});

export default SkypieaUIContext;
