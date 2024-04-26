import React, { useState } from "react";
import { Button, Typography, Stack } from "@mui/material";

interface SearchFilters {
  type: string;
  status: string;
  reuse_count: string;
}

interface Props {
  onSearch: (filters: SearchFilters) => void;
}

const Search: React.FC<Props> = ({ onSearch }) => {
  // const [status, setStatus] = React.useState("");

  // const handleSChange = (event: SelectChangeEvent) => {
  //   setStatus(event.target.value);
  // };

  const [filters, setFilters] = useState({
    type: "",
    status: "",
    reuse_count: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  return (
    <Stack
      sx={{
        backgroundColor: "black",
        padding: "2rem",
        borderTop: "0.5px solid gray",
        borderBottom: "0.5px solid gray",
      }}
    >
      <Typography
        sx={{
          fontSize: "30px",
          color: "#fff",
          textAlign: "start",
          paddingY: "1.2rem",
        }}
      >
        Search Through
      </Typography>
      <Stack sx={{ display: "flex", flexFlow: "row", gap: "40px" }}>
        <input
          type="text"
          name="type"
          placeholder="Type"
          value={filters.type}
          onChange={handleChange}
          style={{
            margin: "8px",
            width: "300px",
            borderColor: "white",
            padding: "8px",
            backgroundColor: "black",
            color: "white",
          }}
        />

        <Stack
          style={{
            margin: "8px",
            width: "300px",
            borderColor: "#ced4da",
            padding: "8px",
          }}
        >
          <label htmlFor="capsule-status" style={{ color: "#fff" }}>
            Status
          </label>
          <select
            id="capsule-status"
            value={filters.status}
            style={{
              width: "100%",
              padding: "8px",
              backgroundColor: "black",
              color: "white",
              borderColor: "white",
            }}
          >
            <option value="">None</option>
            <option value={filters.status}>Active</option>
            <option value={filters.status}>Retired</option>
            <option value={filters.status}>Destroyed</option>
            <option value={filters.status}>Unknown</option>
          </select>
        </Stack>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          flexFlow: "row",
          gap: "40px",
          marginTop: "1.5rem",
        }}
      >
        <input
          type="text"
          name="reuse_count"
          placeholder="Reuse Count"
          value={filters.reuse_count}
          onChange={handleChange}
          style={{
            margin: "8px",
            width: "300px",
            borderColor: "white",
            padding: "8px",
            backgroundColor: "black",
            color: "white",
          }}
        />
        <Button
          onClick={handleSearch}
          variant="contained"
          color="primary"
          sx={{ width: "300px" }}
        >
          Search
        </Button>
      </Stack>
    </Stack>
  );
};

export default Search;
