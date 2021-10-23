import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function MenuMasthead() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <h2>Easy custom restaurant menus</h2>
      </div>
      <div className={classes.root}>
        <h4>start for free</h4>
      </div>
    </div>
  );
}
