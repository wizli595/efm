import React, { useState } from "react";

function Calculatrice() {
  const [err, setErr] = useState("");
  const [data, setData] = useState({ taille: 0, genre: "H", poids: "0" });
  const [img, setImg] = useState("homme");

  const onSubmit = (e) => {
    e.preventDefault();
    return;
  };

  const handleChange = (e) => {
    //const {name,value} = e.target;
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };
  const calculer = () => {
    try {
      if (parseInt(data.taille) < 150) return setErr("error");
      else if (isNaN(data.taille)) return setErr("error");
    } catch (e) {
      document.querySelector('[name="poids"]').value =
        "la taille doit etre un entier";
    }

    if (data.genre === "H")
      setData((prev) => ({
        ...prev,
        poids: prev.taille - 100 - (prev.taille - 150) / 4 + "KG",
      }));
    else if (data.genre === "F")
      setData((prev) => ({
        ...prev,
        poids: prev.taille - 100 - (prev.taille - 150) / 2.5 + "KG",
      }));

    if (data.genre === "H") setImg("homme");
    else if (data.genre === "F") setImg("femme");
  };
  return (
    <form onSubmit={onSubmit}>
      {err && <p style={{ color: "red" }}>{err}</p>}
      <div>
        <p>
          <label htmlFor="taille">Taille en CM:</label>
          <input
            type="text"
            name="taille"
            value={data.taille}
            onChange={(e) => handleChange(e)}
          />
        </p>
        <p>
          <label htmlFor="genre">Genre:</label>
          <select
            name="genre"
            value={data.genre}
            onChange={(e) => handleChange(e)}
          >
            <option value="H">homme</option>
            <option value="F">femme</option>
          </select>
          <img src={`${img}.png`} alt="" title="" />
        </p>
        <p>
          <label htmlFor="poids">Poids idéal:</label>
          <input type="text" name="poids" value={data.poids} readOnly />
        </p>
        <p>
          <input type="submit" value="Calculer" onClick={calculer} />
        </p>
      </div>
    </form>
  );
}

export default Calculatrice;
