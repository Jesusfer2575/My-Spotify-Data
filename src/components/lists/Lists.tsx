import React from 'react';
import Grid from '@material-ui/core/Grid';
import ArtistsTop from '../artists-top/ArtistsTop';
import Authorize from '../authorize/Authorize';
import { DivContainer } from './Lists.styles';

const Lists: React.FC = () => (
  <Grid container direction="row" justify="center" alignItems="center">
    <DivContainer>
      <Authorize />
      <ArtistsTop />
    </DivContainer>
  </Grid>
);

export default Lists;
