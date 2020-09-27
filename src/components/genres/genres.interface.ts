interface IGenreIcons {
  height: number;
  url: string;
  width: number;
}

export interface IGenre {
  href: string;
  icons: IGenreIcons[];
  id: string;
  name: string;
}

export interface GenresProps {
  genresList: IGenre[];
}
