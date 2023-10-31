import { connect } from "react-redux";
import { FindOne, SearchOrd, addOrd } from "./actionCom";
import { marques, salles } from "./data";
import { useState } from "react";

const Ordinateur = ({ ord, result, selected, onAdd, onSearch, onOpt }) => {
  const [marqSalle, setMarqSalle] = useState({
    marq: "",
    sal: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMarqSalle((pr) => {
      return {
        ...pr,
        [name]: value,
      };
    });
  };
  const handleSearch = () => {
    onSearch(marqSalle);
  };

  return (
    <>
      <div>
        Marque
        <select name="marq" onChange={handleChange}>
          <option value="">marques</option>
          {marques.map((e, i) => (
            <option value={e} key={i}>
              {e}
            </option>
          ))}
        </select>
        Salle
        <select name="sal" onChange={handleChange}>
          <option value="">salles</option>
          {salles.map((e, i) => (
            <option value={e} key={i}>
              {e}
            </option>
          ))}
        </select>
        <button onClick={handleSearch}>search </button>
      </div>
      <br />
      <div>
        <select
          name="ordinateur"
          onChange={(e) => onOpt(e.target.value)}
          multiple
        >
          {result.map((e, i) => {
            return (
              <option key={i} value={e.Numero}>
                {e.Intitule}
              </option>
            );
          })}
        </select>
      </div>
      <br />
      <div>
        {selected.map((e, i) => (
          <div key={i}>
            <span>{e.Intitule + " "} </span>
            <span>{e.Numero}</span>
          </div>
        ))}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    ord: state.computers,
    result: state.searchResults,
    selected: state.selected,
  };
};
const mapDispatchToProps = (dispatch) => ({
  onAdd: (data) => dispatch(addOrd(data)),
  onSearch: (data) => dispatch(SearchOrd(data)),
  onOpt: (id) => dispatch(FindOne(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ordinateur);
