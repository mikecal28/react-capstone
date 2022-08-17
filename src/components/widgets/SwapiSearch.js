import React, { useState, useEffect } from "react";

function SwapiSearch() {
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchFilter, setSearchFilter] = useState("films");
  const [resultsArray, setResultsArray] = useState([]);
  const [detailedResults, setDetailedResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchQuery(searchInput);
  };

  const renderResults = () => {
    return detailedResults?.map((result, idx) => (
      <div className="search-result" key={idx}>
        {Object?.keys(result)?.map((key) => (
          <div
            className={
              key === "name" || key === "title"
                ? "search-property header"
                : "search-property"
            }
            key={key}
          >
            {key !== "name" && key !== "title"
              ? `${key}: ${result[key]}`
              : `${result[key]}`}
          </div>
        ))}
      </div>
    ));
  };

  useEffect(() => {
    setSearchInput("");
    setSearchQuery("");
    setSearchResult([]);
    setResultsArray([]);
  }, [detailedResults]);

  useEffect(() => {
    if (resultsArray[0]) {
      setDetailedResults([]);

      resultsArray.forEach((result) => {
        fetch(
          `https://rec-swapi.herokuapp.com/api/${searchFilter}/${result.uid}`
        )
          .then((res) => res.json())
          .then((result) => (result?.results ? result.results : result.result))
          .then((data) =>
            setDetailedResults((detailedResults) =>
              detailedResults.concat(data.properties)
            )
          )
          .catch((err) => console.error("Search Error: ", err));

        console.log("Fetching Detailed Record", result.name);
      });
    }
  }, [resultsArray]);

  useEffect(() => {
    if (searchQuery) {
      if (searchQuery !== "") {
        fetch(
          `https://rec-swapi.herokuapp.com/api/${searchFilter}?page=1&limit=999`
        )
          .then((res) => res.json())
          .then((data) =>
            setSearchResult(data?.results ? data.results : data.result)
          )
          .catch((err) => console.error("Search Error: ", err));
      }
    }
  }, [searchQuery]);

  useEffect(() => {
    if (searchResult[0]) {
      const tempResultsArray = searchResult.filter((obj) => {
        return (
          obj["name"]?.toLowerCase().search(searchQuery?.toLowerCase()) !== -1
        );
      });
      setResultsArray(
        tempResultsArray.length > 8
          ? tempResultsArray.slice(0, 8)
          : tempResultsArray
      );
    }
  }, [searchResult]);

  return (
    <div className="swapi-search">
      <div className="input-wrapper">
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          value={searchInput}
        />
        <button
          className="submit-button"
          onClick={(e) => handleSubmit(e)}
          disabled={searchQuery ? "disabled" : null}
        >
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
      <div className="results-wrapper">{renderResults()}</div>
    </div>
  );
}

export default SwapiSearch;
