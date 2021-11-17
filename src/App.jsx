import { makeStyles } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";

const useStyles = makeStyles((theme) => ({}));

function App() {
  const classes = useStyles();
  return (
    <div class="pageContent" >
      <Navbar />
      <Feed />
    </div>
  );
}

export default App;
