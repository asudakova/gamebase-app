import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import GamePage from './pages/GameInfoPage/GameInfoPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { CssBaseline, Stack } from '@mui/material';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme({
  typography: {
    fontFamily: `"Cabin", sans-serif`,
  },
  palette: {
    background: {
      default: '#0E0B2A',
      paper: '#2F2740',
    },
    text: {
      primary: '#BAB9C1',
      secondary: '#74747B',
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Stack direction="column" minHeight="100vh">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/game/:gameId" element={<GamePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Stack>
    </ThemeProvider>
  );
};

export default App;
