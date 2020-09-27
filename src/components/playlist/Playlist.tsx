import React, { useContext, useEffect, useState } from 'react';
import { UserPreferencesContext } from '../../store/userPreferences/useUserPreferenceContext';
import { _getToken, _getTracks, _getPlaylistByGenre, _getMyPlaylists, _getMyUserId } from '../../controllers/spotify-api';
import { ACTIONS } from '../../store/userPreferences/userPreferencesActions';
import { IPlaylist } from './playlists.interface';

const Playlist: React.FC = () => {
  const { state } = useContext(UserPreferencesContext);
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
      const myPlaylists = await _getMyPlaylists(token, 'adrian.ipod25');

      (myPlaylists) && setPlaylists(myPlaylists);
    };

    getMyPlaylists();
  }, []);

  return (
    <React.Fragment>
      <h2>My Playlists: </h2>
      <select name="playlists">
        {
          playlists.map((playlist: IPlaylist) => {
            const { id, name } = playlist;
            return <option key={id} value={id}>{name}</option>
          })
        }
      </select>
    </React.Fragment>
  );
};

export default Playlist;
