import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
// import NavigationIcon from '@mui/icons-material/Navigation';
import Fab from '@mui/material/Fab';
import logo from '../assets/pngegg.png';
import aicoach from '../assets/out2.png';


const PlaceCard = () => {
  const goToChat = () => {
    window.location.href = '/select';
  }
  return (
    <Card
      sx={{
        boxShadow: 3,
        borderRadius: 2,
        borderColor: "violet",
        overflow: "hidden",
        backgroundColor: "#f5f5f5",
        marginTop: -30,
        height: '50vh',
      }}
    >

      <CardContent style={{ width: '300px', height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap:'5vh', padding: '20px' }}>
        <div style={{ display: "flex", justifyContent: "center"}}>
          <img src={logo} alt="Logo" width={200} height={200} style={{marginTop: -60, padding:0, borderColor:"red", borderRadius:'2px'}} />
        </div>
        <div>
        <Typography variant="h6" component="div" gutterBottom>
        <div style={{ display: "flex", justifyContent: "center"}}>
          <img src={aicoach} alt="Logo" width={200} height={100} style={{marginTop:-30, borderColor:"black", borderRadius:'2px'}} />
        </div>
        </Typography>
        </div>
        <div>
        <Typography variant="body2" color="text.secondary">
          <Fab variant="extended" onClick={goToChat} style={{backgroundColor: '#00008B', color: 'white', height: '50px'}}>
            Let's Start
          </Fab>
        </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlaceCard;