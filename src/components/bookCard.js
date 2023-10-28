const BookCard = ({ books, onLike }) => {
  return (
    <>
      <div>
        {/* <img src="hh" alt="jjj" /> */}
        <h3>{books.title}</h3>
        <p>{books.author}</p>
        <p>{books.description}</p>
        <button onClick={() => onLike(books.id)}>likes {books.likes}</button>
      </div>
    </>
  );
};

export default BookCard;
