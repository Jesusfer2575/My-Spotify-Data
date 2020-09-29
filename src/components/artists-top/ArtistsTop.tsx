import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import useStyles, { DivContainer } from './ArtistsTop.styles';
import { IArtistsTop } from './ArtistsTop.interface';
import { _getTopArtists, _getToken } from '../../controllers/spotify-api';
import useUserPreferenceContext from '../../store/userPreferences/useUserPreferenceContext';

const getRandom: () => number = () => {
  return Math.floor(Math.random());
}

export default function ArtistsTop() {
  const [topArtists, setTopArtists] = useState<IArtistsTop[]>();
  const { token } = useUserPreferenceContext();
  const classes = useStyles();

  useEffect(() => {
    const getTopArtists = async () => {
      const myTopArtists = await _getTopArtists(token, 10);
      myTopArtists && setTopArtists(myTopArtists);
    };

    getTopArtists();
  }, []);

  return (
    <div>
      {(topArtists) && topArtists.map((artist: IArtistsTop) => {
        return (
          <DivContainer key={artist.id}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={artist?.images[0].url}
                  title={artist.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {artist.name}
                  </Typography>
                  <Typography variant="body1" color="textPrimary" component="div">
                    <Typography variant="button" display="block" gutterBottom>
                      Popularity: {artist.popularity}
                    </Typography>
                    <Typography variant="button" display="block" gutterBottom>
                      Genres:
                    </Typography>
                    {
                      artist.genres.map((genre) => {
                        return (
                          <Chip 
                            key={genre} 
                            size="small"
                            variant="outlined"
                            label={genre} 
                            color={getRandom() === 1 ? 'primary':'secondary'}
                          />
                        )
                      })
                    }
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </DivContainer>
        )
      })}
    </div>
  );
}