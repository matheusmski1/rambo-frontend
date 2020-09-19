import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  form: {
    padding: theme.spacing(8),
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
