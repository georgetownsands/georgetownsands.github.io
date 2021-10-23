import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  heading: {
    minWidth: 275,
    justifyContent: "left",
    alignItems: "left",
    display: "flex",
  },
  body: {
    minWidth: 275,
    justifyContent: "left",
    alignItems: "left",
    display: "flex",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  bodycentered: {
    minWidth: 275,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginTop: 10,
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
    border: "3px solid #555"
  }
}));