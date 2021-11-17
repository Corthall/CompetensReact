import { makeStyles } from "@material-ui/core";
import Navbar from "./components/Navbar";

const useStyles = makeStyles((theme) => ({}));

function App() {
  const classes = useStyles();
  return (
    <div class="pageContent" >
      <Navbar />
    </div>
  );
}

export default App;
