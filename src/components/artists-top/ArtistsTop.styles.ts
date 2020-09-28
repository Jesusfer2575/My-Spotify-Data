import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
  },
  media: {
    height: 320,
  },
});

export const DivContainer = styled.div`
  padding-bottom: 20px;
`;

export default useStyles;