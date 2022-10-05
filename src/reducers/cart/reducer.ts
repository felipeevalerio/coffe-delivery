import { produce } from 'immer';
import { ActionTypes } from './actions';

export interface Coffe {
  name: string;
  description: string;
  price: number;
  tags: string[];
  quantity: number;
  image: string;
}

export function cartReducer(state: Coffe[], action: any): Coffe[] {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      const coffeAlreadyExistsIndex = state.findIndex(
        (coffe) => coffe.name === action.payload.name,
      );

      if (coffeAlreadyExistsIndex < 0) {
        return produce(state, (draft) => {
          draft.push({
            ...action.payload,
            quantity: 1,
          });
        });
      }

      return produce(state, (draft) => {
        draft[coffeAlreadyExistsIndex].quantity += 1;
      });
    }

    case ActionTypes.REMOVE_FROM_CART:
      return state.filter((coffe) => coffe.name !== action.payload);

    case ActionTypes.PLUS_COFFE_QUANTITY: {
      const coffeFoundCartIndex = state.findIndex(
        (coffe) => coffe.name === action.payload.name,
      );

      if (coffeFoundCartIndex < 0) {
        return produce(state, (draft) => {
          draft.push({
            ...action.payload,
            quantity: 1,
          });
        });
      }

      return produce(state, (draft) => {
        draft[coffeFoundCartIndex].quantity += 1;
      });
    }
    case ActionTypes.MINUS_COFFE_QUANTITY: {
      const coffeFoundCartIndex = state.findIndex(
        (coffe) => coffe.name === action.payload.name,
      );

      if (coffeFoundCartIndex < 0) {
        return state;
      }

      if (state[coffeFoundCartIndex].quantity - 1 === 0) {
        return state.filter((coffe) => coffe.name !== action.payload.name);
      }

      return produce(state, (draft) => {
        draft[coffeFoundCartIndex].quantity -= 1;
      });
    }

    default:
      return state;
  }
}
