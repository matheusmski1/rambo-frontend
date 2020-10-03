import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0),
  },
  rightSideNavBar: {
    display: "flex",
    flexGrow: 1,
  },
  table: {
    minWidth: 650,
  },
}));

export default useStyles;
