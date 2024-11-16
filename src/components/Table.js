import React from "react";

const Table = ({ data, isLoading, query }) => {
    if (!query && data.length === 0) return <div className="start_searching">Start searching</div>;
    if (query && data.length === 0) return <div className="no_result">No results found</div>;
  
    return (
      <table className="places-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Place Name</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <img
                  src={`https://flagsapi.com/${item.countryCode}/flat/32.png`}
                  alt={`${item.country} flag`}
                  style={{ marginLeft: "10px" }}
                />
                {item.country}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;
  
