import React, { useEffect, useState } from 'react';
import { _getToken, _getMyPlaylists } from '../../controllers/spotify-api';
import { IPlaylist } from './playlists.interface';

const userId: string = process.env.REACT_APP_USER_ID || '';

const Playlist: React.FC = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const getAccessToken = async () => {
      const tokenAccess: string = await _getToken();
      console.log('Access Token ', tokenAccess);
      return tokenAccess;
    };

    const getMyPlaylists = async () => {
      const token = await getAccessToken();
      // const user = await _getMyUserId(token);
      // const { id } = user;
      // console.log('User Id', id);
      const myPlaylists = await _getMyPlaylists(token, userId);

      myPlaylists && setPlaylists(myPlaylists);
    };

    getMyPlaylists();
  }, []);

  return (
    <React.Fragment>
      <h2>My Playlists: </h2>
      <select name="playlists">
        {playlists.map((playlist: IPlaylist) => {
          const { id, name } = playlist;
          return (
            <option key={id} value={id}>
              {name}
            </option>
          );
        })}
      </select>
    </React.Fragment>
  );
};

export default Playlist;
