import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const categories = [
  { title: 'Shoes', image: '/shoes.jpg' },
  { title: 'Clothes', image: '/clothes.jpg' },
  { title: 'Accessories', image: '/acessories.jpg' },
  { title: 'Jackets', image: '/jacket.jpg' },
];

const Home = () => {
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   const handleExploreCategories = () => {
//     navigate('/category-preview'); // Redirect to category preview page
//   };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '40px' }}>
        Welcome to Rafay's Store
      </Typography>
      <Typography variant="body1" paragraph align="center">
        Rafay's Store is a leading online retailer offering a diverse range of shoes, clothes, accessories, and jackets.
        With a commitment to quality and style, we strive to bring you the latest trends at competitive prices.
        Explore our collection and discover the perfect items to elevate your wardrobe.
      </Typography>
   
      <Grid container spacing={4}>
        {categories.map((category, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card>
              <CardMedia component="img" height="240" image={category.image} alt={category.title} />
              <CardContent>
                <Typography variant="h6" align="center">
                  {category.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        // onClick={handleExploreCategories}
        style={{ display: 'block', margin: '20px auto' }} // Center the button
      >
        Explore Our Categories
      </Button>
    </Container>
  );
};

export default Home;

