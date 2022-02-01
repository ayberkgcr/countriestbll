import { useEffect, useState } from "react";
import "./styles.css";
import InputGroup from "react-bootstrap/InputGroup";

import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => setCountries(response.data))
      .catch((error) => console.log({ error }));
  }, []);

  return (
    <div className="App">
      <h1>Countries Table</h1>
      <InputGroup>
        <input
          class="form-control"
          id="myInput"
          type="text"
          placeholder="Search.."
        ></input>
      </InputGroup>

      <div className="App">
        <ReactBootStrap.Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Country Name</th>
              <th>Capital</th>
              <th>Region</th>
              <th>Flag</th>
            </tr>
          </thead>

          <tbody>
            {countries.map((country) => {
              return (
                <tr key={country.name}>
                  <td>{country.name}</td>
                  <td>{country.capital}</td>
                  <td>{country.region}</td>
                  <td>
                    <img
                      src={country.flag}
                      alt={country.name}
                      style={{ width: "100px" }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </ReactBootStrap.Table>
      </div>
    </div>
  );
}
