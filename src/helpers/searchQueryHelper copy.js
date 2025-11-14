import { useState, useMemo } from "react";

export default function useSearchQuery(
  data,
  filterFunction,
  initialQuery = ""
) {
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  const filteredData = useMemo(() => {
    if (!searchQuery) return data;
    return data.filter((item) => filterFunction(item, searchQuery));
  }, [data, searchQuery, filterFunction]);

  const onReset = () => setSearchQuery("");

  return {
    searchQuery,
    setSearchQuery,
    filteredData,
    onReset,
  };
}
