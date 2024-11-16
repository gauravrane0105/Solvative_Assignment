import React from "react";

const SearchBox = ({ query, setQuery, onSearch }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") onSearch();
  };

  const handleShortcut = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "/") {
      e.preventDefault();
      document.getElementById("search-input").focus();
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleShortcut);
    return () => {
      window.removeEventListener("keydown", handleShortcut);
    };
  }, []);

  return (
    <input
      id="search-input"
      type="text"
      placeholder="Start searching..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyPress={handleKeyPress}
      className="search-box"
    />
  );
};

export default SearchBox;
