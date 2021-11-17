import { alpha, AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { Mail, Notifications, Search } from "@material-ui/icons";
import { border, borderRadius } from "@mui/system";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent:"space-between"    
    },
  logoLarge: {
    display: "none",

    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSmall: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search:{
      display: "flex",
      alignItems: "center",
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover':{
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      borderRadius: theme.shape.borderRadius,
      width: "50%"
  },
  input:{
      color:"white",
      marginLeft:theme.spacing(1),
  },
  icons:{
    display:"flex",
    alignItems:"center"

  },
  badge:{
      marginRight: theme.spacing(1)
  }
}));

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLarge}>AFRY Big Brains</Typography>
        <Typography variant="h6" className={classes.logoSmall}>ABBS</Typography>
        <section role="search" className={classes.search}>
            
            <Search className={classes.searchButton}></Search>
            <InputBase placeholder="Search..." className={classes.input}></InputBase>
        </section>
        <section role="icon" className={classes.icons}>
            <Badge badgeContent={4} color="secondary">
                <Mail></Mail>
            </Badge>
            <Badge badgeContent={4} color="secondary">
                <Notifications></Notifications>
            </Badge>
            <Avatar alt="Itsa Me" src="http://4.bp.blogspot.com/-9j0Iv9b3J28/T0XHb0g96qI/AAAAAAAAAZg/1M-OIhf2Xxw/s1600/FortuneStMario.png"></Avatar>
        </section>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
