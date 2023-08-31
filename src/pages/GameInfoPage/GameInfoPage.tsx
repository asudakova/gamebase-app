import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/typingReduxHooks';
import { Container, Grid, Box, CircularProgress, Button } from '@mui/material';
import GameAdditionalInfo from '../../components/GameAdditionalInfo/GameAdditionalInfo';
import SystemReq from '../../components/SystemReq/SystemReq';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import FailedLoading from '../../components/FailedLoading/FailedLoading';

const GameInfoPage: React.FC = () => {
  const { gameId } = useParams();
  const isInfoLoading = useAppSelector((state) => state.gameInfoReducer.isLoading);
  const gameInfo = useAppSelector((state) => state.gameInfoReducer.info);
  const isLoadingError = useAppSelector((state) => state.gameInfoReducer.isError);
  const requestParams = { id: Number(gameId) };

  return (
    <Container sx={{ py: 4, minHeight: 'calc(100vh - 132px)' }} maxWidth="lg">
      <Link to="/">
        <Button variant="outlined" startIcon={<ArrowBackIcon />} sx={{ mb: '20px' }}>
          Back
        </Button>
      </Link>
      {isLoadingError ? (
        <FailedLoading {...requestParams} />
      ) : isInfoLoading ? (
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
                alt={gameInfo?.title}
                src={gameInfo?.thumbnail}
              />
            </Grid>
            <GameAdditionalInfo
              url={gameInfo?.game_url}
              title={gameInfo?.title}
              genre={gameInfo?.genre}
              publisher={gameInfo?.publisher}
              date={gameInfo?.release_date}
              developer={gameInfo?.developer}
            />
            <Grid item xs={12} md={12}>
              <SystemReq {...gameInfo?.minimum_system_requirements} />
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default GameInfoPage;
