import React, { useEffect } from 'react';
import useUserPreferencesContext from '../../store/userPreferences/useUserPreferenceContext';
export const authEndpoint = 'https://accounts.spotify.com/authorize';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
const redirectUri = 'http://localhost:3000';
const scopes = ['user-read-currently-playing', 'user-read-playback-state', 'user-top-read'];
// Get the hash of the url
const hash = window.location.hash
  .substring(1)
  .split('&')
  .reduce((initial: any, item) => {
    if (item) {
      const parts = item.split('=');
      // eslint-disable-next-line
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = '';

const Authorize: React.FC = () => {
  const { setAccessToken, token } = useUserPreferencesContext();
  useEffect(() => {
    // eslint-disable-next-line
    let _token = hash.access_token;
    if (_token) {
      setAccessToken(_token);
      console.log(_token);
    }
  }, []);

  return (
    <div>
      {!token && (
        <a
          href={`${authEndpoint}?client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectUri}&scope=${scopes.join(
            '%20',
          )}&response_type=token&show_dialog=true`}
        >
          Login to Spotify
        </a>
      )}
    </div>
  );
};
export default Authorize;
