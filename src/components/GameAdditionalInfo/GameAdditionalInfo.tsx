import React from 'react';
import { Grid, Link, Stack, Typography } from '@mui/material';
import { GameAddInfoPropsType } from '../../utils/types';
import { timeConvertor } from '../../utils/timeConvertor';

const GameAdditionalInfo: React.FC<GameAddInfoPropsType> = ({
  url,
  title,
  genre,
  publisher,
  date,
  developer,
}) => {
  return (
    <Grid item xs={12} md={8} px={{ md: '20px' }} mb="20px" alignSelf="center">
      <Link
        href={url}
        underline="none"
        variant="h4"
        color="text.primary"
        target="_blank"
        sx={{ fontWeight: 'bold' }}
      >
        {title}
      </Link>
      <Grid container rowSpacing={1} columnSpacing={5} mt="20px">
        <Grid item xs={6}>
          <Stack>
            <Typography fontSize={20} color="text.secondary">
              Genre
            </Typography>
            <Typography fontSize={20} color="text.primary">
              {genre || '-'}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack>
            <Typography fontSize={20} color="text.secondary">
              Publisher
            </Typography>
            <Typography fontSize={20} color="text.primary">
              {publisher || '-'}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack>
            <Typography fontSize={20} color="text.secondary">
              Release date
            </Typography>
            <Typography fontSize={20} color="text.primary">
              {timeConvertor(date)}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack>
            <Typography fontSize={20} color="text.secondary">
              Developer
            </Typography>
            <Typography fontSize={20} color="text.primary">
              {developer || '-'}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GameAdditionalInfo;
