import React, { useContext, createContext, useReducer } from "react";

const stateContext = createContext();
const { Provider } = stateContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "setBeers":
      return { ...state, beers: action.payload };

    case "getRandomBeer":
      let randomNumber = Math.floor(Math.random() * state.beers.length);
      let randomBeer = state.beers[randomNumber];
      return randomBeer;
    default:
      break;
  }
};

const StateProvider = ({ value = false, ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    beers: [],
  });
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStateContext = () => {
  return useContext(stateContext);
};

export { StateProvider, useStateContext };
