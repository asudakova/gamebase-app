import React, { useState, useEffect } from 'react';
import { Grid, Pagination } from '@mui/material';
import GameCard from '../GameCard/GameCard';
import { useAppSelector } from '../../redux/typingReduxHooks';

const FoundGames: React.FC = () => {
  const currentGames = useAppSelector((state) => state.gamesReducer.foundGames);
  const pagesAmount = Math.ceil(currentGames.length / 12);
  const [page, setPage] = useState(1);
  const [currentPageGames, setCurrentPageGames] = useState(currentGames.slice(0, 10));

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    setCurrentPageGames(currentGames.slice(12 * (page - 1), 12 * (page - 1) + 12));
  }, [page]);

  return (
    <>
      <Grid container spacing={3} justifyContent="flex-start">
        {currentPageGames?.map((card) => (
          <GameCard
            key={card.id}
            id={card.id}
            title={card.title}
            date={card.release_date}
            genre={card.genre}
            pic={card.thumbnail}
            publisher={card.publisher}
          />
        ))}
      </Grid>
      <Pagination
        variant="outlined"
        shape="rounded"
        count={pagesAmount}
        page={page}
        onChange={handleChange}
        sx={{
          mt: '30px',
          '.MuiPagination-ul': {
            justifyContent: 'center',
          },
          '.MuiPagination-ul button': {
            fontSize: '16px',
          },
          '.css-unqsqn-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected': {
            bgcolor: '#1976d2',
          },
        }}
      />
    </>
  );
};

export default FoundGames;
