import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Typography,
  Stack,
  Button,
  Divider,
  Pagination,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Search from "./Search";

interface Capsule {
  id: string;
  status: string;
  type: string;
  serial: string;
  water_landings: string;
  land_landings: string;
  last_update: string;
  reuse_count: string;
  launches: string;
}

interface SearchFilters {
  type: string;
  status: string;
  reuse_count: string;
}

const Data: React.FC = () => {
  const [capsules, setCapsules] = useState<Capsule[]>([]);
  const [selectedCapsule, setSelectedCapsule] = useState<Capsule | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const [filters, setFilters] = useState({
    type: "",
    status: "",
    reuse_count: "",
  });

  useEffect(() => {
    fetchCapsules();
  }, [page, filters]);

  const fetchCapsules = async () => {
    try {
      const response = await axios.get(
        `https://api.spacexdata.com/v4/capsules?limit=1000&type=${filters.type}&status=${filters.status}&launch_date=${filters.reuse_count}`
      );
      setCapsules(response.data);
    } catch (error) {
      console.error("Error fetching capsules:", error);
    }
  };
  const handleButtonClick = (capsule: Capsule) => {
    setSelectedCapsule(capsule);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSearch = (searchFilters: SearchFilters) => {
    setFilters(searchFilters);
    setPage(1);
  };

  return (
    <Stack>
      <Search onSearch={handleSearch} />
      <Stack
        sx={{
          backgroundImage: "url('/rocketdesign.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "contain",
          padding: "2rem",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "36px",
            paddingY: "2rem",
            color: "#fff",
            fontWeight: "600",
          }}
        >
          SpaceX Capsules
        </Typography>
        <Grid container spacing={2}>
          {capsules.map((capsule) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} width="170px">
              <Stack
                key={capsule.id}
                sx={{
                  display: "flex",
                  flexFlow: "column",
                  borderRadius: "10px",
                  backgroundColor: "#05082B",
                  backgroundOpacity: "75%",
                  border: "1px #FFFFFF0D solid",
                  padding: "15px",
                  color: "#fff",
                  height: "250px",
                }}
              >
                <Typography
                  sx={{
                    flexBasis: "50%",
                    textAlign: "center",
                    fontSize: "24px",
                    paddingY: "1rem",
                  }}
                >
                  {capsule.serial}
                </Typography>
                <Divider color="#C6C6C6" />
                <Stack
                  sx={{
                    flexBasis: "50%",
                    justifyContent: "space-between",
                    paddingTop: "20px",
                  }}
                >
                  <Typography>Status: {capsule.status}</Typography>
                  <Typography>Type: {capsule.type}</Typography>
                </Stack>
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => handleButtonClick(capsule)}
                  sx={{
                    color: "#f6f6f6",
                    fontSize: "14px",
                    marginX: "auto",
                    marginY: "20px",
                  }}
                >
                  Click for More
                </Button>
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Pagination count={Math.ceil(25 / itemsPerPage)} page={page} />
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle
            sx={{
              backgroundColor: "black",
              color: "#fff",
              width: { xs: "300px", md: "600px" },
              gap: "20px",
              marginX: "auto",
              fontSize: "24px",
              textAlign: "center",
            }}
          >
            Capsule Full Details
          </DialogTitle>
          <DialogContent
            sx={{
              backgroundColor: "black",
              color: "#fff",
              width: { xs: "300px", md: "600px" },
              gap: "20px",
              marginX: "auto",
              fontSize: "18px",
            }}
          >
            {selectedCapsule && (
              <Stack>
                <Typography py={1}>
                  Capsule {selectedCapsule.serial} has{" "}
                  {selectedCapsule.reuse_count} reuse count
                </Typography>
                <Typography py={1}>Status: {selectedCapsule.status}</Typography>
                <Typography py={1}>
                  Launch Date: {selectedCapsule.launches}
                </Typography>
                <Typography py={1}>Type: {selectedCapsule.type}</Typography>
                <Typography py={1}>
                  Water Landings: {selectedCapsule.water_landings}
                </Typography>
                <Typography py={1}>
                  Land Landings: {selectedCapsule.land_landings}
                </Typography>
                <Typography py={1}>
                  Capsule {selectedCapsule.serial} last update:
                  {selectedCapsule.last_update}
                </Typography>
              </Stack>
            )}
          </DialogContent>
          <DialogActions sx={{ backgroundColor: "black", color: "#fff" }}>
            <Button onClick={handleCloseDialog}>Close</Button>
          </DialogActions>
        </Dialog>
      </Stack>
    </Stack>
  );
};

export default Data;
