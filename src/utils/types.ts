export type GameCardTypeProps = {
  id: number;
  title?: string;
  date?: string;
  genre?: string;
  pic?: string;
  publisher?: string;
};

export type GameCardType = {
  id: number;
  developer?: string;
  freetogame_profile_url?: string;
  game_url?: string;
  genre?: string;
  platform?: string;
  publisher?: string;
  release_date?: string;
  short_descriptions?: string;
  thumbnail?: string;
  title?: string;
};

export type InitialStateGamesType = {
  foundGames: GameCardType[];
  isLoading: boolean;
  isError: boolean;
  lastParams: FetchGamesParamsType | {};
};

export type GameInfoFetchingErrorType = {
  message: string;
  lastParams: FetchInfoGameParamsType;
};

export type SystemReqType = {
  graphics?: string;
  memory?: string;
  os?: string;
  processor?: string;
  storage?: string;
};

export type ScreenshotsType = {
  id: number;
  image: string;
};

export type GameInfoType = {
  id: number;
  description?: string;
  developer?: string;
  freetogame_profile_url?: string;
  game_url?: string;
  genre?: string;
  minimum_system_requirements?: SystemReqType;
  platform?: string;
  publisher?: string;
  release_date?: string;
  screenshots?: ScreenshotsType[];
  short_descriptions?: string;
  status?: string;
  thumbnail?: string;
  title?: string;
};

export type InitialStateGameinfoType = {
  info: GameInfoType;
  isLoading: boolean;
  isError: boolean;
};

export type GameAddInfoPropsType = {
  url?: string;
  title?: string;
  genre?: string;
  publisher?: string;
  date?: string;
  developer?: string;
};

export type FetchGamesParamsType = {
  platform: string;
  'sort-by': string;
  category?: string;
};

export type FetchInfoGameParamsType = {
  id: number;
};
