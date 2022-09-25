import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PercentIcon from '@mui/icons-material/Percent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UserNavbar from './navigation/UserNavbar';
import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props} position='static'>
      {'Copyright © '}
      <Link color="inherit" href="/about">
        Lending Mock
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();



export default function OfferPage() {
  return (
    <>
    <UserNavbar/>
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PercentIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Offers For You
          </Typography>
          <Box  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}  sm={6}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="https://i1.wp.com/mvdna.com/wp-content/uploads/2018/03/SpecialOffer.png"
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Loan
                        </Typography>
                        <Typography variant="body2" color="text.secondary" align='justify'>
                            <ul>
                                <li>Type Of Loan: Housing Loan</li>
                                <li>Offered Intrest Rate: 7.6% Compound Intrest </li>
                                <li>Tenure period of loan: 20 years  </li>
                            </ul>
                        </Typography>
                        <Typography  variant>

                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
              </Grid>
              <Grid item xs={12}  sm={6}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="https://i1.wp.com/mvdna.com/wp-content/uploads/2018/03/SpecialOffer.png"
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Loan
                        </Typography>
                        <Typography variant="body2" color="text.secondary" align='justify'>
                            <ul>
                                <li>Type Of Loan: Housing Loan</li>
                                <li>Offered Intrest Rate: 7.6% Compound Intrest </li>
                                <li>Tenure period of loan: 20 years  </li>
                            </ul>
                        </Typography>
                        <Typography  variant>

                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 20 }} />
      </Container>
    </ThemeProvider>
    </>
  );
}