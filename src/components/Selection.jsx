import React from 'react'
import Header from './Header'
import { Box, Card, Container, FormControl, Icon, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import PlaceCard from "./Placecard";

function Selection() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
  return (
    <>
        <Header/>
        <Box
          sx={{
            height: "89.3vh", // Full screen height
            display: "flex",
            justifyContent: "center",
            flexDirection: 'column',
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
              zIndex: 0,
            },
          }}
        >
            <FormControl sx={{my: 2, width: '30%'}}>
                <InputLabel id="demo-simple-select-label">Select Doctor</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    sx={{
                        background: 'rgba(255, 255, 255, 0.8)'
                    }}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{my: 2, width: '30%'}}>
                <InputLabel id="demo-simple-select-label">Select Pitch Duration</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    sx={{
                        background: 'rgba(255, 255, 255, 0.8)'
                    }}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{my: 2, width: '30%'}}>
                <InputLabel id="demo-simple-select-label">Select Product</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    sx={{
                        background: 'rgba(255, 255, 255, 0.8)'
                    }}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

            <Box sx={{ display: 'flex', gap: 10, zIndex: 10 }}>
                <Card sx={{ 
                    height: 250, 
                    width: 250, 
                    p: 2, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    bgcolor: 'white',
                    cursor: 'pointer'
                }} raised
                 onClick={() => {
                    window.location.href = '/chat'
                 }}
                >
                    <Icon />
                    <Typography variant="h6">
                        Stimulate as NO
                    </Typography>
                    <Typography variant="p" align='center'>
                        Listen to a tailored pitch that engages the doctor
                    </Typography>
                </Card>
                <Card sx={{ 
                    height: 250, 
                    width: 250, 
                    p: 2, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    bgcolor: 'white',
                    cursor: 'pointer'
                }} raised
                onClick={() => {
                    window.location.href = '/chat'
                 }}
                >
                    <Icon />
                    <Typography variant="h6">
                        Stimulate as Doctor
                    </Typography>
                    <Typography variant="p" align='center'>
                        See how a doctor responds to your pitch
                    </Typography>
                </Card>
            </Box>
        </Box>
    </>
  )
}

export default Selection