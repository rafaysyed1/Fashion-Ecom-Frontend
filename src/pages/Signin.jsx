import { TextField, Button, Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signin = ({ onSubmit }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    role: "user", // Default role
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(credentials);
    setCredentials({
      email: "",
      password: "",
      role: "user",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 20px)', margin: '20px' }}>
      <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ display: 'flex', justifyContent: 'center' }}>
          Login
        </Typography>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <div>
            <TextField
              id="email"
              name="email"
              label="Email"
              value={credentials.email}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </div>
          <div>
            <TextField
              id="password"
              name="password"
              label="Password"
              value={credentials.password}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              fullWidth
              type="password"
            />
          </div>
          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel id="role-label">Role</InputLabel>
            <Select
              labelId="role-label"
              name="role"
              value={credentials.role}
              onChange={handleChange}
              label="Role"
            >
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </Select>
          </FormControl>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '20px'
            }}
          >
            <Button variant="contained" color="primary" type="submit" sx={{ width: { xs: '80%', sm: '40%' }, padding: '10px' }}>
              Log In
            </Button>
          </Box>
        </form>
        <Typography variant="body1" style={{ marginTop: '10px', textAlign: 'center' }}>
          Don't have an account? <Link to="/signup" sx={{ color: 'blue' }}>Sign Up</Link> {/* Link to sign up */}
        </Typography>
      </Box>
    </div>
  );
};

export default Signin;

