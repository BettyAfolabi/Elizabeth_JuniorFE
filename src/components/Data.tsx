import React, { useState, useEffect } from "react";
import {
  Stack,
  Typography,
  Grid,
  Divider,
  Button,
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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filters, setFilters] = useState<SearchFilters>({
    type: "",
    status: "",
    reuse_count: "",
  });

  const capsulesPerPage: number = 10;

  useEffect(() => {
    fetchCapsules();
  }, [filters]);

  const fetchCapsules = async () => {
    try {
      const response = await fetch(`https://api.spacexdata.com/v4/capsules`);
      const data = await response.json();

      setCapsules(data);
    } catch (error) {
      console.error("Error fetching data:", error);
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
    setCurrentPage(1);
  };

  const indexOfLastCapsule = currentPage * capsulesPerPage;
  const indexOfFirstCapsule = indexOfLastCapsule - capsulesPerPage;
  const currentCapsules = capsules.slice(
    indexOfFirstCapsule,
    indexOfLastCapsule
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
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
        <Grid container spacing={2} sx={{ marginX: "auto" }}>
          {currentCapsules.map((capsule, index) => (
            <Grid item xs={12} sm={6} lg={2} width="170px">
              <Stack
                key={index}
                sx={{
                  display: "flex",
                  flexFlow: "column",
                  borderRadius: "10px",
                  backgroundColor: "#030342b3",
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
                    marginTop: "20px",
                  }}
                >
                  Click for More
                </Button>
              </Stack>
            </Grid>
          ))}
        </Grid>
        {/* Pagination */}
        <Stack
          sx={{
            display: "flex",
            flexFlow: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            marginTop: "2rem",
          }}
        >
          {Array.from({
            length: Math.ceil(capsules.length / capsulesPerPage),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className="pg-button"
            >
              {index + 1}
            </button>
          ))}
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
                  <Typography py={1}>
                    Status: {selectedCapsule.status}
                  </Typography>
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
    </>
  );
};

export default Data;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   Typography,
//   Stack,
//   Button,
//   Divider,
//   Pagination,
//   Grid,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material";
// import Search from "./Search";

// interface Capsule {
//   id: string;
//   status: string;
//   type: string;
//   serial: string;
//   water_landings: string;
//   land_landings: string;
//   last_update: string;
//   reuse_count: string;
//   launches: string;
// }

// interface SearchFilters {
//   type: string;
//   status: string;
//   reuse_count: string;
// }

// interface Props {
//   capsules: Capsule[];
//   setCapsules: (capsules: Capsule[]) => void;
// }

// const ITEMS_PER_PAGE = 10;

// const Data: React.FC<Props> = ({ capsules }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedCapsule, setSelectedCapsule] = useState<Capsule | null>(null);

//   const [filters, setFilters] = useState<SearchFilters>({
//     type: "",
//     status: "",
//     reuse_count: "",
//   });
//   const [openDialog, setOpenDialog] = useState(false);

//   const fetchCapsules = async (setCapsules: (capsules: Capsule[]) => void) => {
//     try {
//       const response = await axios.get(
//         `https://api.spacexdata.com/v4/capsules?limit=1000&type=${filters.type}&status=${filters.status}&launch_date=${filters.reuse_count}`
//       );
//       setCapsules(response.data);
//     } catch (error) {
//       console.error("Error fetching capsules:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCapsules(SetCapsules);
//   }, [filters]);

//   const handlePageChange: (
//     event: React.ChangeEvent<unknown>,
//     newPage: number
//   ) => void = (_event, newPage) => {
//     setCurrentPage(newPage);
//   };

//   const handleButtonClick = (capsule: Capsule) => {
//     setSelectedCapsule(capsule);
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   const handleSearch = (searchFilters: SearchFilters) => {
//     setFilters(searchFilters);
//     setCurrentPage(1);
//   };

//   const slicedCapsules = capsules.slice(
//     (currentPage - 1) * ITEMS_PER_PAGE,
//     currentPage * ITEMS_PER_PAGE
//   );

//   return (
//     <Stack>
//       <Search onSearch={handleSearch} />
//       <Stack
//         sx={{
//           backgroundImage: "url('/rocketdesign.jpg')",
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "contain",
//           padding: "2rem",
//         }}
//       >
//         <Typography
//           sx={{
//             textAlign: "center",
//             fontSize: "36px",
//             paddingY: "2rem",
//             color: "#fff",
//             fontWeight: "600",
//           }}
//         >
//           SpaceX Capsules
//         </Typography>
//         <Grid container spacing={2}>
//           {slicedCapsules.map((capsule) => (
//             <Grid
//               item
//               xs={12}
//               sm={6}
//               md={4}
//               lg={3}
//               xl={2}
//               width="170px"
//               key={capsule.id}
//             >
//               <Stack
//                 key={capsule.id}
//                 sx={{
//                   display: "flex",
//                   flexFlow: "column",
//                   borderRadius: "10px",
//                   backgroundColor: "#030342b3",
//                   backgroundOpacity: "75%",
//                   border: "1px #FFFFFF0D solid",
//                   padding: "15px",
//                   color: "#fff",
//                   height: "250px",
//                 }}
//               >
//                 {" "}
//                 <Typography
//                   sx={{
//                     flexBasis: "50%",
//                     textAlign: "center",
//                     fontSize: "24px",
//                     paddingY: "1rem",
//                   }}
//                 >
//                   {capsule.serial}
//                 </Typography>
//                 <Divider color="#C6C6C6" />
//                 <Stack
//                   sx={{
//                     flexBasis: "50%",
//                     justifyContent: "space-between",
//                     paddingTop: "20px",
//                   }}
//                 >
//                   <Typography>Status: {capsule.status}</Typography>
//                   <Typography>Type: {capsule.type}</Typography>
//                 </Stack>
//                 <Button
//                   size="small"
//                   variant="contained"
//                   onClick={() => handleButtonClick(capsule)}
//                   sx={{
//                     color: "#f6f6f6",
//                     fontSize: "14px",
//                     marginX: "auto",
//                     marginY: "20px",
//                   }}
//                 >
//                   Click for More
//                 </Button>
//               </Stack>
//             </Grid>
//           ))}
//         </Grid>
//         <Dialog open={openDialog} onClose={handleCloseDialog}>
//           <DialogTitle
//             sx={{
//               backgroundColor: "black",
//               color: "#fff",
//               width: { xs: "300px", md: "600px" },
//               gap: "20px",
//               marginX: "auto",
//               fontSize: "24px",
//               textAlign: "center",
//             }}
//           >
//             Capsule Full Details
//           </DialogTitle>
//           <DialogContent
//             sx={{
//               backgroundColor: "black",
//               color: "#fff",
//               width: { xs: "300px", md: "600px" },
//               gap: "20px",
//               marginX: "auto",
//               fontSize: "18px",
//             }}
//           >
//             {selectedCapsule && (
//               <Stack>
//                 <Typography py={1}>
//                   Capsule {selectedCapsule.serial} has{" "}
//                   {selectedCapsule.reuse_count} reuse count
//                 </Typography>
//                 <Typography py={1}>Status: {selectedCapsule.status}</Typography>
//                 <Typography py={1}>
//                   Launch Date: {selectedCapsule.launches}
//                 </Typography>
//                 <Typography py={1}>Type: {selectedCapsule.type}</Typography>
//                 <Typography py={1}>
//                   Water Landings: {selectedCapsule.water_landings}
//                 </Typography>
//                 <Typography py={1}>
//                   Land Landings: {selectedCapsule.land_landings}
//                 </Typography>
//                 <Typography py={1}>
//                   Capsule {selectedCapsule.serial} last update:
//                   {selectedCapsule.last_update}
//                 </Typography>
//               </Stack>
//             )}
//           </DialogContent>
//           <DialogActions sx={{ backgroundColor: "black", color: "#fff" }}>
//             <Button onClick={handleCloseDialog}>Close</Button>
//           </DialogActions>
//         </Dialog>
//         <Pagination
//           count={Math.ceil(capsules.length / ITEMS_PER_PAGE)}
//           page={currentPage}
//           onChange={handlePageChange}
//           variant="outlined"
//           shape="rounded"
//           size="large"
//           sx={{ marginTop: "20px", justifyContent: "center" }}
//         />{" "}
//       </Stack>
//     </Stack>
//   );
// };

// export default Data;
