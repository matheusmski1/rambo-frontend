import { grey } from "@material-ui/core/colors";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0),
  },
  rightSideNavBar: {
    display: "flex",
    flexGrow: 1,
  },
  hr: {
    border: "none",
    color: grey,
    height: 0.5,
    margin: 0,
    flexShrink: 0,
    backgroundColor: "#0058A9",
  },
}));

export default useStyles;
