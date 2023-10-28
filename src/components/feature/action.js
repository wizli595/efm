export const LIKES = "LIKES";
export function likeBook(id) {
  return {
    type: LIKES,
    payload: id,
  };
}
