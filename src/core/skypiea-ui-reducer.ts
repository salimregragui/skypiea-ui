import { Reducer } from "react";
import { ISkypieaUIContext } from "./skypiea-ui-context";

export interface ISkypieaUIReducerState {
  designSystem?: Object;
}

export interface ISkypieaUIReducerAction {
  type: string;
  payload: any;
}

const SkypieaUIReducerInitialState: ISkypieaUIReducerState = {
  designSystem: {},
};

const SkypieaUIReducer: Reducer<
  ISkypieaUIReducerState,
  ISkypieaUIReducerAction
> = (state = SkypieaUIReducerInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default SkypieaUIReducer;
