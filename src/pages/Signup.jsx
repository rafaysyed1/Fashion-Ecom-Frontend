import { TextField, Button, Box, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = credentials;
    if (password !== confirmPassword) {
      alert("Password doesn't match. Try again!");
    } else {
      console.log(credentials);
      // reset form fields
      setCredentials({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    }
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 20px)', margin: '20px' }}>
        <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ display: 'flex', justifyContent: 'center' }}>
            Sign Up
          </Typography>
          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <div>
              <TextField
                id="name"
                label="Name"
                value={credentials.name}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                fullWidth
              />
            </div>
            <div>
              <TextField
                id="email"
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
                label="Password"
                value={credentials.password}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                fullWidth
                type="password"
              />
            </div>
            <div>
              <TextField
                id="confirmPassword"
                label="Confirm Password"
                value={credentials.confirmPassword}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                fullWidth
                type="password"
              />
            </div>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px'
              }}
            >
              <Button variant="contained" color="success" type="submit" sx={{ width: { xs: '80%', sm: '40%' }, padding: '10px' }}>
                Sign Up
              </Button>
            </Box>
          </form>
        </Box>
        </div>
      <Typography variant="body1" style={{ marginTop: '20px', textAlign: 'center' }}>
        Already have an account? <Link to="/login" sx={{ color: 'blue' }}>Sign In</Link>
      </Typography>
     
    </>
  );
}

export default Signup;
