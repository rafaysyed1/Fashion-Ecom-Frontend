import { Container, Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: { xs: 2, md: 6 } }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          All rights reserved 2023 by RafayDeveloper
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
