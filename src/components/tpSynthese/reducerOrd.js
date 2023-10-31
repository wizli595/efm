import { ADD, FIND, SEARCH } from "./actionCom";
import { Ords } from "./data";
const initialState = {
  computers: Ords,
  searchResults: [],
  selected: [],
};

const reducerOrd = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, computers: [...state.computers, action.payload] };
    case SEARCH:
      const { marq, sal } = action.payload;
      console.log(marq);
      const found = state.computers.filter(
        (e) => e.Marque === marq && e.Salle === sal
      );
      console.log(found);
      return { ...state, searchResults: found };
    case FIND:
      const id = +action.payload;

      return {
        ...state,
        selected: state.computers.filter((e) => e.Numero === id),
      };
    default:
      return state;
  }
};
export default reducerOrd;
