import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0),
  },
  hr: {
    border: "none",
    height: 2,
    margin: 0,
    flexShrink: 0,
    backgroundColor: "blue",
  },
}));

export default useStyles;
