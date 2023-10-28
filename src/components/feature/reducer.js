import { LIKES } from "./action";

const initialState = [
  {
    id: 1,
    title: "Book Title",
    author: "Author Name",
    description: "Short description of the book.",
  },
  {
    id: 2,
    title: "Book Title2",
    author: "Author Name2",
    description: "Short description of the book2.",
  },
];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKES:
      return state.map((book) => {
        if (book.id === action.payload) {
          return {
            ...book,
            likes: (book.likes || 0) + 1,
          };
        }
        return book;
      });

    default:
      return state;
  }
};
export default reducer;
