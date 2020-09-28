import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import useStyles from './UserCard.styles';
import { _getUserData, _getToken } from '../../controllers/spotify-api';
import IUserCard from './UserCard.interface';

const UserCard: React.FC = () => {
  const [token, setToken] = useState<string>('');
  const [userData, setUserData] = useState<IUserCard>();
  const classes = useStyles();

  useEffect(() => {
    const getAccessToken = async () => {
      const tokenAccess: string = await _getToken();
      // console.log('Access Token ', tokenAccess);
      setToken(tokenAccess as string);
    };
    getAccessToken();
  }, []);

  useEffect(() => {
    const getUserInfo = async () => {
      if(token !== '') {
        const userData = await _getUserData(token);
        setUserData(userData as IUserCard);
        // console.log(userData);
      }
    };
    getUserInfo();
  }, [token]);

  return (
    <div className={classes.root}>
      {/* <Chip
        avatar={<Avatar alt="Adrian Fernandez" src={(userData) ? userData.images[0].url: ''} className={classes.large}/>}
        label={userData?.display_name}
      /> */}
      <Avatar alt="Adrian Fernandez" src={(userData) ? userData.images[0].url: ''} className={classes.large} />
    </div>
  );
}

export default UserCard;