import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Functions.css";
import Card from "../templates/Card";

function Functions() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // Initial sorting order
  const [selectedLanguage, setSelectedLanguage] = useState(""); // State for selected language filter

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10); // Number of records to display per page

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = () => {
    setLoading(true);
    axios
      .get(`Universities.json`)
      .then((res) => {
        setData(res.data); // Update state with fetched data
        setLoading(false);
      })
      .catch(() => {
        alert("There was an error while retrieving the data");
        setLoading(false);
      });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (scrollY + windowHeight >= documentHeight - 100 && !loading) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage, loading]); // Include loading state in the dependency array

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchQuery(searchValue);
  };

  const handleSort = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
  };

  const handleLanguageSelect = (e) => {
    const language = e.target.value;
    setSelectedLanguage(language);
  };

  const sortedData = data.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.German_Ranking - b.German_Ranking;
    } else {
      return b.German_Ranking - a.German_Ranking;
    }
  });

  const filteredDataByLanguage = selectedLanguage
    ? sortedData.filter(
        (item) =>
          item.Teaching_Language.toLowerCase() ===
          selectedLanguage.toLowerCase()
      )
    : sortedData;

  const filteredData = filteredDataByLanguage.filter(
    (item) =>
      item.University_Name.toLowerCase().includes(searchQuery) ||
      item.Course_Sub_Type.toLowerCase().includes(searchQuery) ||
      item.Course_Name.toLowerCase().includes(searchQuery) ||
      item.City.toLowerCase().includes(searchQuery) ||
      item.State.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="Functions">
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={handleSearch}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <div className="filters">
        <button className="btn btn-primary" onClick={handleSort}>
          Sort by German Ranking
        </button>
        <select
          value={selectedLanguage}
          onChange={handleLanguageSelect}
          className="form-select"
        >
          <option value="">All Languages</option>
          <option value="English">English</option>
          <option value="German">German</option>
        </select>
      </div>

      <div className="cards">
        {filteredData.map((e) => (
          <Card
            key={e.id}
            imageURL={e.Logo}
            title={e.University_Name}
            degree={e.Course_Sub_Type}
            subject={e.Course_Name}
            Course_Link={e.Course_Link}
            Application_Link={e.Application_Link}
            City={e.City}
            State={e.State}
            Course_Ranking={e.Course_Ranking}
            Duration={e.Duration}
            German_Ranking={e.German_Ranking}
            Teaching_Language={e.Teaching_Language}
            Tuition_Fee={e.Tuition_Fee}
            Type_of_University={e.Type_of_University}
          />
        ))}
      </div>
      {loading && <div>Loading...</div>}
    </div>
  );
}

export default Functions;
