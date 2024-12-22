import React from 'react'
import { Box, Container } from "@mui/material";
import PlaceCard from "./Placecard";
import CurvedImages from './CurvedImages';

function Home() {
    return (
        <Box
          sx={{
            height: "100vh", // Full screen height
            display: "flex",
            width: "100vw",
            marginLeft: "-160px",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            backgroundImage: "url('src/assets/port.jpg')", // Replace with your image URL
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.7)", // Overlay with opacity
              zIndex: 1,
            },
          }}
        >
          <Container
            sx={{
              position: "relative",
              zIndex: 2,
              textAlign: "center",
              color: "#fff", // Text color to contrast with the background
            }}
          >
            <Box
                sx={{
                    height: "fit-content",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                >
                <PlaceCard />
            </Box>
            {/* <CurvedImages/> */}
          </Container>
        </Box>
      );
}

export default Home