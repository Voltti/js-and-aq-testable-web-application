import React, { useState } from "react";
import { Typography, Container, Grid, Button } from "@mui/material";
import { Movie } from "../components/Movie";
import { IMovie, initialMovies } from "../utils/movies";
import { useNavigate } from "react-router-dom";
import AddMovie from "./AddMovie";



export const MyMovies = () => {
  const [dialogIsOpen, setdialogIsOpen] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
  };

  return (
    <Container>
      <div style={{ position: "relative" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={logout}
          style={{ position: "absolute", top: 8, right: 0 }}
        >
          Log Out
        </Button>
      </div>
      <Typography variant="h3" gutterBottom>
        My Movies
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => setdialogIsOpen(true)}
      >
        Add Movie
      </Button>
      <Grid container spacing={2}>
        {initialMovies.map((movie: IMovie, index) => {
          const { releaseDate, name, review, userScore } = movie;
          return (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Movie
                releaseDate={releaseDate}
                name={name}
                review={review}
                userScore={userScore}
              />
            </Grid>
          );
        })}
      </Grid>
      <AddMovie open={dialogIsOpen} onClose={() => setdialogIsOpen(false)}/>
    </Container>
  );
};

export default MyMovies;
