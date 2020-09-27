import React, { useState, FormEvent, useEffect } from 'react';
import useUserPreferenceContext from '../../store/userPreferences/useUserPreferenceContext';
import { IGenre } from '../genres/genres.interface';
import { _getToken, _getGenres } from '../../controllers/spotify-api';

const Genres: React.FC = () => {
  const { addGenreId } = useUserPreferenceContext();
  const [genreId, setGenreId] = useState('');
  const [genresList, setGenresList] = useState<IGenre[]>([
    {
      href: '',
      icons: [],
      id: '',
      name: '',
    },
  ]);

  useEffect(() => {
    const getAccessToken = async () => {
      const tokenAccess: string = await _getToken();
      console.log('Access Token ', tokenAccess);
      return tokenAccess;
    };

    const getGenres = async () => {
      const accessToken = await getAccessToken();
      const genres: IGenre[] = (await _getGenres(accessToken)) as IGenre[];
      if (genres) setGenresList(genres);
      // console.log('GENRES', genres);
    };
    getGenres();
  }, []);

  const handleChange = (e: FormEvent<HTMLSelectElement>) => {
    setGenreId(e.currentTarget.value);
    addGenreId(e.currentTarget.value);
  };

  return (
    <React.Fragment>
      <select name="genres" onChange={handleChange}>
        {genresList.map((genre) => {
          return (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          );
        })}
      </select>
      <div>{genreId}</div>
    </React.Fragment>
  );
};

export default Genres;
