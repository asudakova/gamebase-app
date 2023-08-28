import React from 'react';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Stack } from '@mui/material';
import bg from '/bg-title.jpg';

const GameCard: React.FC = () => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '12px',
        }}
      >
        <CardActionArea>
          <CardMedia
            component="div"
            sx={{
              pt: '40%',
              borderRadius: '12px 12px 0 0',
            }}
            image={bg}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2" color="text.primary">
              Overwatch 2
            </Typography>
            <Typography color="text.secondary">Activision Blizzard</Typography>
            <Stack direction="row" spacing={2} justifyContent="space-between">
              <Typography color="text.secondary">22.04.2022</Typography>
              <Typography color="background.paper" bgcolor="text.secondary" borderRadius="12px" px="5px">
                Shooter
              </Typography>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default GameCard;
