import { createTheme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: blue[500],
        },
    },
    myButton:{
        backgroundColor: "red",
        color: "white",
        border: "1px solid black"
    }
});