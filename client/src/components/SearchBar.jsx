import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";
import axios from "axios";

function SearchBar() {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [data, setData] = useState([]);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = data?.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      console.log("Soy el newFilter", newFilter);
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const getData = async () => {
    const response = await axios("http://localhost:3002/customers"); // seguir viendo porq  no anda este axios
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Ingrese un nombre"
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData?.length == 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData?.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 3).map((value, key) => {
            //slice to show just 3 results
            return <p key={key}>{value.name} </p>;
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
