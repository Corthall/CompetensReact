import { Grid, makeStyles, Box } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import RightBar from "./components/RightBar";

const useStyles = makeStyles((theme) => ({
  right:{
    [theme.breakpoints.down("sm")]:{
      display:"none"
    }
  },
  pageContent:{
    display: "flex",
    
  },
  appBarSpacer: theme.mixins.toolbar

}));

function App() {
  const classes = useStyles();
  return (
    <div class="pageContent" >
      <Navbar className={classes.Navbar}/>
      <div className={classes.appBarSpacer}/>
      <Box m={3}>

      <Grid className={classes.Content} container spacing={3} >
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <RightBar />
        </Grid>
      </Grid>
      </Box>
    </div>
  );
}

export default App;
