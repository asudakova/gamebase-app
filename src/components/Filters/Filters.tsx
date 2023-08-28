import React, { useState } from 'react';
import {
  Divider,
  Box,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';

import { platforms, genres, sortings } from '../../utils/constants';

const Filters: React.FC = () => {
  const [platform, setPlatform] = useState('');
  const [genre, setGenre] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('');

  const handleChangePlatform = (event: SelectChangeEvent) => {
    setPlatform(event.target.value as string);
  };
  const handleChangeGenre = (event: SelectChangeEvent<typeof genre>) => {
    const {
      target: { value },
    } = event;
    setGenre(typeof value === 'string' ? value.split(',') : value);
  };
  const handleChangeSortBy = (event: SelectChangeEvent) => {
    setSortBy(event.target.value as string);
  };

  // useEffect(() => {
  //   console.log({ platform, genre, sortBy });
  // }, [platform, genre, sortBy]);

  return (
    <Box bgcolor="background.secondary" sx={{ pb: 3 }}>
      <Stack direction="row" justifyContent="left" spacing={3} pb={2}>
        <FormControl color="primary" size="small" sx={{ minWidth: '150px' }}>
          <InputLabel id="platform-label">Platform</InputLabel>
          <Select
            labelId="platform-label"
            id="platform-select"
            value={platform}
            label="platform"
            onChange={handleChangePlatform}
            sx={{
              borderRadius: '12px',
              color: 'text.primary',
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: 'text.secondary',
              },
              '.MuiSvgIcon-root ': {
                fill: 'white !important',
              },
            }}
          >
            {platforms.map((type) => (
              <MenuItem key={type.id} value={type.value}>
                {type.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl color="primary" size="small" sx={{ minWidth: '150px' }}>
          <InputLabel id="sorting-label">Sort by</InputLabel>
          <Select
            labelId="sorting-label"
            id="sorting-select"
            value={sortBy}
            label="sorting"
            onChange={handleChangeSortBy}
            sx={{
              borderRadius: '12px',
              color: 'text.primary',
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: 'text.secondary',
              },
              '.MuiSvgIcon-root ': {
                fill: 'white !important',
              },
            }}
          >
            {sortings.map((type) => (
              <MenuItem key={type.id} value={type.value}>
                {type.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl color="primary" size="small" sx={{ minWidth: '150px' }}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            id="genre-select"
            value={genre}
            label="genre"
            multiple
            onChange={handleChangeGenre}
            sx={{
              borderRadius: '12px',
              color: 'text.primary',
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: 'text.secondary',
              },
              '.MuiSvgIcon-root ': {
                fill: 'white !important',
              },
            }}
          >
            {genres.map((type) => (
              <MenuItem key={type.id} value={type.value}>
                {type.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      <Divider variant="fullWidth" sx={{ backgroundColor: 'text.secondary' }} />
    </Box>
  );
};

export default Filters;
