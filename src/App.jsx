import { Button, makeStyles} from '@material-ui/core'

import { Person } from '@material-ui/icons';

const useStyles = makeStyles((theme) =>({
  button:{
    ...theme.myButton
  },
}));



function App() {
  
  const classes = useStyles();
  return <div>
    <Button
      variant="contained"
      startIcon={<Person />}
      className={classes.button}
    >TExt</Button>

  </div>;



}

export default App;