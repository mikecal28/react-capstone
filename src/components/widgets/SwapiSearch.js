import React, { useState, useEffect } from "react";

function SwapiSearch() {
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchFilter, setSearchFilter] = useState("films");
  const [resultsArray, setResultsArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchQuery(searchInput);
  };

  useEffect(() => {
    if (searchQuery) {
      fetch(
        `https://rec-swapi.herokuapp.com/api/${searchFilter}?page=1&limit=999`
      )
        .then((res) => res.json())
        .then((data) =>
          setSearchResult(data?.results ? data.results : data.result)
        )
        .catch((err) => console.error("Search Error: ", err));
    }
  }, [searchQuery]);

  useEffect(() => {
    console.log("Fetched Result: ", searchResult);
  }, [searchResult]);

  useEffect(() => {
    console.log("Array Result: ", resultsArray);
  }, [resultsArray]);

  useEffect(() => {
    if (searchResult[0]) {
      const tempResultsArray = searchResult.filter((obj) => {
        return (
          obj["name"]?.toLowerCase().search(searchQuery?.toLowerCase()) !== -1
        );
      });
      setResultsArray(tempResultsArray);
    }
  }, [searchResult]);

  return (
    <div className="swapi-search">
      <h1>SWAPI Search</h1>
      <div className="input-wrapper">
        <input onChange={(e) => setSearchInput(e.target.value)} type="text" />
        <button className="submit-button" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </div>
      <div className="radio-buttons">
        <div>
          <input
            id="films"
            name="filter"
            type="radio"
            defaultChecked
            onClick={(e) => setSearchFilter(e.target.id)}
          />
          <label>Films</label>
        </div>

        <div>
          <input
            id="people"
            name="filter"
            type="radio"
            onClick={(e) => setSearchFilter(e.target.id)}
          />
          <label>People</label>
        </div>

        <div>
          <input
            id="planets"
            name="filter"
            type="radio"
            onClick={(e) => setSearchFilter(e.target.id)}
          />
          <label>Planets</label>
        </div>

        <div>
          <input
            id="species"
            name="filter"
            type="radio"
            onClick={(e) => setSearchFilter(e.target.id)}
          />
          <label>Species</label>
        </div>

        <div>
          <input
            id="starships"
            name="filter"
            type="radio"
            onClick={(e) => setSearchFilter(e.target.id)}
          />
          <label>Starships</label>
        </div>

        <div>
          <input
            id="vehicles"
            name="filter"
            type="radio"
            onClick={(e) => setSearchFilter(e.target.id)}
          />
          <label>Vehicles</label>
        </div>
      </div>
    </div>
  );
}

export default SwapiSearch;
