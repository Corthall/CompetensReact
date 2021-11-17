import { Card, CardActionArea, CardContent, makeStyles, Typography, CardMedia } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
media: {
    display: "flex",
    borderRadius: "3px"

}

}));



function Post() {

  const classes = useStyles();
  return <Card>
      <CardActionArea>
        <CardMedia className={classes.media} 
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.jKPKBFXi0tbftrhuxMgrwgHaE8%26pid%3DApi&f=1"
        title="Beach side"
        />
    <CardContent>
        <Typography variant="h4">
            My Beach site

        </Typography>
        <Typography variant="h5">
            Information about beach

        </Typography>

    </CardContent>

        


      </CardActionArea>


  </Card>



}

export default Post;
