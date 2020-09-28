import React, { useEffect, useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { _getToken, _getMyPlaylists } from '../../controllers/spotify-api';
import { IPlaylist } from './Playlists.interface';
import useStyles from './Playlist.styles';
import { InputLabel } from '@material-ui/core';

const userId: string = process.env.REACT_APP_USER_ID || '';

const Playlist: React.FC = () => {
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState('');
  const classes = useStyles();

  useEffect(() => {
    const getAccessToken = async () => {
      const tokenAccess: string = await _getToken();
      console.log('Access Token ', tokenAccess);
      return tokenAccess;
    };

    const getMyPlaylists = async () => {
      const token = await getAccessToken();
      const myPlaylists = await _getMyPlaylists(token, userId);

      myPlaylists && setPlaylists(myPlaylists);
    };

    getMyPlaylists();
  }, []);

  const selectHandleChange = (event: React.ChangeEvent<{value: unknown}>) => {
    setSelectedPlaylist(event.target.value as string);
  }

  return (
    <React.Fragment>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="playlists-select-label">Playlists</InputLabel>
        <Select
          labelId="playlists-select-label"
          id="playlists-select"
          value={selectedPlaylist}
          onChange={selectHandleChange}
          label="Playlists"
        >
          <MenuItem value="">None</MenuItem>
          {playlists.map((playlist: IPlaylist) => {
            const { id, name } = playlist;
            return (
              <MenuItem key={id} value={id}>
                {name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </React.Fragment>
  );
};

export default Playlist;
