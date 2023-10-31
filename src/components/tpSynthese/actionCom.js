const ADD = "ADD";
const SEARCH = "SEARCH";
const FIND = "FIND";
function addOrd(ord) {
  return {
    type: ADD,
    payload: ord,
  };
}
function SearchOrd(data) {
  return {
    type: SEARCH,
    payload: data,
  };
}
function FindOne(nbr) {
  return {
    type: FIND,
    payload: nbr,
  };
}
export { addOrd, SearchOrd, FindOne, FIND, ADD, SEARCH };
