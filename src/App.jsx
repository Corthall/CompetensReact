import { Grid, makeStyles } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import RightBar from "./components/RightBar";

const useStyles = makeStyles((theme) => ({}));

function App() {
  const classes = useStyles();
  return (
    <div class="pageContent" >
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3}>
          <RightBar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
