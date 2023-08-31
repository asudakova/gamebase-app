import React from 'react';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { GameCardTypeProps } from '../../utils/types';
import { useAppDispatch } from '../../redux/typingReduxHooks';
import { fetchGameInfo } from '../../redux/gameInfo/actions';
import { timeConvertor } from '../../utils/timeConvertor';

const GameCard: React.FC<GameCardTypeProps> = ({ id, title, date, genre, pic, publisher }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleGameCardClick = () => {
    dispatch(fetchGameInfo(id));
    navigate(`/game/${id}`);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} onClick={handleGameCardClick}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '12px',
        }}
      >
        <CardActionArea sx={{ height: '100%' }}>
          <CardMedia
            component="div"
            sx={{
              pt: '50%',
              borderRadius: '12px 12px 0 0',
            }}
            image={pic}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              color="text.primary"
              sx={{ fontWeight: 'bold' }}
            >
              {title}
            </Typography>
            <Typography color="text.secondary">{publisher || '-'}</Typography>
            <Stack direction="row" spacing={2} justifyContent="space-between">
              <Typography color="text.secondary">{timeConvertor(date) || '-'}</Typography>
              <Typography color="background.paper" bgcolor="text.secondary" borderRadius="12px" px="5px">
                {genre || '-'}
              </Typography>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default GameCard;
