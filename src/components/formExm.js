import { useRef, useState } from "react";

const FormExm = () => {
  const heigth = useRef();
  const [err, setErr] = useState("");
  const [info, setInfo] = useState({
    taille: "",
    gender: "male",
    poid: "",
  });
  const weight = {
    male: (h) => 52 + 1.9 * (h - 60),
    female: (h) => 49 + 1.7 * (h - 60),
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((pr) => {
      return {
        ...pr,
        [name]: value,
      };
    });
  };
  const handleClick = () => {
    const { value } = heigth.current;
    if (value === "" || value < 150) return setErr("somthing went wrong");
    setInfo((prv) => ({ ...prv, poid: weight[prv.gender](prv.taille) }));
    setErr("");
  };
  return (
    <>
      {err && <p style={{ color: "red" }}>{err}</p>}
      <div>
        taille en cm
        <input
          ref={heigth}
          type="number"
          name="taille"
          value={info.taille}
          onChange={handleChange}
        />
      </div>
      <div>
        <select name="gender" onChange={handleChange}>
          <option>choose</option>
          <option value={"male"}>male</option>
          <option value={"female"}>female</option>
        </select>
        <img alt="img" src={info.gender + ".png"} />
      </div>
      <div>
        poids
        <input
          type="number"
          name="poid"
          value={info.poid}
          //   onChange={handleChange}
          readOnly
        />
      </div>
      <button onClick={handleClick}>cacl</button>
    </>
  );
};

export default FormExm;
