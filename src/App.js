import React, { useState, useEffect, useCallback } from "react";
import { fetchCities } from "./api/api";
import SearchBox from "./components/SearchBox";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import './styles/styles.css'

const App = () => {
  const [query, setQuery] = useState(""); // Empty query for default data
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(5); // Default to 5 items per page

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setTimeout(async () => {
      try {
        const offset = (currentPage - 1) * limit;
        const result = await fetchCities(query, limit, offset);
        setCities(result.data);
        setTotalPages(Math.ceil(result.metadata.totalCount / limit));
      } catch (error) {
        console.error("Error fetching data:", error);
        setCities([]);
      } finally {
        setIsLoading(false); // Ensure spinner stops even if there's an error
      }
    }, 500);
  }, [query, currentPage, limit]);

  useEffect(() => {
    fetchData(); // Fetch default data on component mount
  }, [fetchData]);

  return (
    <div className="app-container">
      <SearchBox query={query} setQuery={setQuery} onSearch={() => setCurrentPage(1)} />

      {/* Show spinner when loading data */}
      {isLoading && <div className="spinner"></div>}

      <div className="table-container">
        <Table data={cities} isLoading={isLoading} query={query} />
      </div>

      <div className="table-bottom">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
        <label>
          Items per page:{" "}
          <select
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
            style={{
              width: "60px",
              marginLeft: "10px",
              padding: "5px",
              borderRadius: "4px",
            }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default App;
