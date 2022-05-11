import { makeStyles } from '@material-ui/core'
import Post from "./Post";
import { Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  feed: {
    paddingTop: theme.spacing(80),
  },
}));



const Feed = () => {
  const classes = useStyles();
  return (
    <Container classname={classes.feed}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
};

export default Feed