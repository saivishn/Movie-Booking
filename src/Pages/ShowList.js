import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, Button, CardMedia, ButtonBase, StepIcon } from "@mui/material";
import { ApiCalls } from "../Connections/Api/ApiCalls";
import { json, useLocation, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import IconButton from '@mui/material/IconButton';


const ShowList = () => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const { response } = await ApiCalls();
    if (!response?.length) {
      console.log("Data empty in fetchData");
      throw Error("Data Empty");
    }
    setList(response);
    localStorage.setItem("data", JSON.stringify(response));
  };

  const handleCardClick = (movieID) => {
    const summary = list.filter((mv, index) => {
      return movieID === mv?.show?.id
    })
    navigate("/summary", { state: summary });
  };

  useEffect(() => {
    if (!localStorage.getItem("data")) {
      fetchData();
    } else {
      setList(JSON.parse(localStorage.getItem("data")));
    }
  }, []);

  console.log(list, '___')

  return (
    <Box>

      <Box sx={{ flexGrow: 1, paddingBottom: 2 }}>
        <AppBar position="static" >
          <Toolbar >
            <IconButton style={{ fontSize: 40, fontWeight: 30, color: "black" }}><b>MOVIES</b></IconButton>
          </Toolbar>
        </AppBar>
      </Box>

      <Grid container style={{ padding: 15 }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {list.map((movie, index) => (
          <Grid item style={{ display: 'flex' }} xs={2} sm={4} md={3} key={index}>
            <ButtonBase sx={{ height: '100%' }} onClick={() => handleCardClick(movie.show.id)}>
              <Card sx={{ borderRadius: '15px', height: '100%' }}>

                <CardMedia sx={{ objectFit: "cover", height: '100%', width: '100%', margin: 'auto' }}
                  component="img"
                  image={movie.show.image.original}
                  alt={movie.show.name}
                />


                {/*             
            <CardContent>
            <div className="app">{<h1>{movie.show.name}</h1>}</div>
              <Button onClick={() => handleCardClick(movie.show.id)}>View Summary</Button>
            </CardContent> */}

              </Card>
            </ButtonBase>

          </Grid>
        ))}
      </Grid>

    </Box>
  );
};

export default ShowList;
