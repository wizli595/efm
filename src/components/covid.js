import axios from "axios";
import { useEffect, useState } from "react";

const Covid = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/countries")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <ul>
      {data &&
        data.map((e, i) => {
          return (
            <li key={i}>
              <div>
                {e.country} -------- {e.active}
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default Covid;
