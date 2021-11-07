import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";


export const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    margin: theme.spacing(1),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.primary,
    marginLeft: 10,
    marginRight: 10,
  },
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "100%",
  },
  grayPaper: {
    backgroundColor: grey[200]
  },
  body: {
    minWidth: 275,
    justifyContent: "left",
    alignItems: "left",
    display: "flex",
    marginLeft: 20,
    marginRight: 20,
  },
  bodycentered: {
    minWidth: 275,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginLeft: 20,
    marginRight: 20,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
  img: {
    border: "3px solid #555",
  },
  media: {
    width: "50%",
  },
}));
