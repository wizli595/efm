import BookCard from "./bookCard";
import { connect } from "react-redux";
import { likeBook } from "./feature/action";
const BookStor = ({ book, onLike }) => {
  return (
    <>
      <div>
        {book.map((e, i) => {
          return <BookCard key={i} books={e} onLike={onLike} />;
        })}
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  book: state,
});
const mapDispatchToProps = (dispatch) => ({
  onLike: (id) => dispatch(likeBook(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(BookStor);
