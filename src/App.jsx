import { Button, makeStyles} from '@material-ui/core'

import { Person } from '@material-ui/icons';

const useStyles = makeStyles((theme) =>({
  button:{
    ... theme.myButton
  },
}));



function App() {
  const classes = useStyles();
  return <div>
  

  </div>;



}

export default App;