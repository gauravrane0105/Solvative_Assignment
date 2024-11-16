export const fetchCities = async (query = "", limit = 5, offset = 0) => {
    const dummyData = [
      { id: 1, name: "New York", country: "USA", countryCode: "US" },
      { id: 2, name: "London", country: "UK", countryCode: "GB" },
      { id: 3, name: "Paris", country: "France", countryCode: "FR" },
      { id: 4, name: "Berlin", country: "Germany", countryCode: "DE" },
      { id: 5, name: "Tokyo", country: "Japan", countryCode: "JP" },
      { id: 6, name: "Sydney", country: "Australia", countryCode: "AU" },
      { id: 7, name: "Rome", country: "Italy", countryCode: "IT" },
      { id: 8, name: "Toronto", country: "Canada", countryCode: "CA" },
      { id: 9, name: "Beijing", country: "China", countryCode: "CN" },
      { id: 10, name: "Mumbai", country: "India", countryCode: "IN" },
      { id: 11, name: "New Delhi", country: "India", countryCode: "IN" },
      { id: 12, name: "Jaipur", country: "India", countryCode: "IN" },
      { id: 13, name: "Kolkata", country: "India", countryCode: "IN" },
      { id: 14, name: "Chennai", country: "India", countryCode: "IN" },
      { id: 15, name: "Pune", country: "India", countryCode: "IN" },
      { id: 16, name: "California", country: "USA", countryCode: "US" },
    ];
  
    const filteredData = query
      ? dummyData.filter((city) =>
          city.name.toLowerCase().includes(query.toLowerCase())
        )
      : dummyData;
  
    const paginatedData = filteredData.slice(offset, offset + limit);
  
    return {
      data: paginatedData,
      metadata: { totalCount: filteredData.length },
    };
  };
  