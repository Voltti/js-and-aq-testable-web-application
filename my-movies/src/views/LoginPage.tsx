import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography, Container } from "@mui/material";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.username === "pete" && formData.password === "00pete00") {
      setError("");
      navigate("/movies");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Login Page
      </Typography>
      <Box component="form" onSubmit={handleLoginClick} noValidate>
        <TextField
          margin="normal"
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          value={formData.username}
          onChange={handleInputChange}
        />
        <TextField
          margin="normal"
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {error && (
          <Typography variant="body2" color="error" align="center">
            {error}
          </Typography>
        )}
        <Button type="submit" fullWidth variant="contained">
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
