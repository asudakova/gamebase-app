import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/typingReduxHooks';
import { Container, Grid, Box, CircularProgress, Button } from '@mui/material';
import GameAdditionalInfo from '../../components/GameAdditionalInfo/GameAdditionalInfo';
import SystemReq from '../../components/SystemReq/SystemReq';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const GameInfoPage: React.FC = () => {
  const { gameId } = useParams();
  const { isLoading, info } = useAppSelector((state) => state.gameInfoReducer);

  useEffect(() => {
    if (!isLoading) {
      console.log({ gameId, info });
    }
  }, [info]);

  return (
    <Container sx={{ py: 8, minHeight: 'calc(100vh - 132px)' }} maxWidth="lg">
      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1 }} bgcolor="background.paper" borderRadius="12px" p={2}>
          <Grid container justifyContent="center" mb="20px">
            <Grid item xs={12} sm={8} md={4} bgcolor="red" borderRadius="12px" overflow="hidden" mb="20px">
              <Box
                component="img"
                sx={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                }}
                alt={info?.title}
                src={info?.thumbnail}
              />
            </Grid>
            <GameAdditionalInfo
              url={info?.game_url}
              title={info?.title}
              genre={info?.genre}
              publisher={info?.publisher}
              date={info?.release_date}
              developer={info?.developer}
            />
            <Grid item xs={12} md={12}>
              <SystemReq {...info?.minimum_system_requirements} />
            </Grid>
          </Grid>
          <Link to="/">
            <Button variant="outlined" startIcon={<ArrowBackIcon />} sx={{ fontSize: '20px' }}>
              Back
            </Button>
          </Link>
        </Box>
      )}
    </Container>
  );
};

export default GameInfoPage;
