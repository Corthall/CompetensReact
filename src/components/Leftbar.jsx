import { Container, makeStyles,  Typography } from '@material-ui/core'
import { Home, Person ,MenuBook} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    leftBar:{
      position: "fixed",
      

    }
}));



function Leftbar() {

  const classes = useStyles();
  return (
    
    <Container className={classes.leftBar}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <Person className={classes.icon} />
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.item}>
        <MenuBook className={classes.icon} />
        <Typography className={classes.text}>News</Typography>
      </div>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
    </Container>
  );



}

export default Leftbar;