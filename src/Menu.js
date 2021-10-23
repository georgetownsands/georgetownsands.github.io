import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { alpha, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Contact from "./Contact";
import Restaurants from "./Restaurants";
import Shopping from "./Shopping";
import Main from "./Main";
import {
  SECTION_MAIN,
  SECTION_CONTACT,
  SECTION_RESTAURANTS,
  SECTION_SHOPPING,
} from "./Constants";
import { LoadRestaurants, LoadShops } from "./LoadData";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    transition: theme.transitions.create("width"),
    fontSize: "20px",
    width: "95%",
    padding: "5px 10px 10px 10px",
    marginRight: "5px",
    lineHeight: "120%",
    color: "inherit",
  },
  input: {
    width: "100%",
  },
}));

const initialRestaurants = [
  {
    id: 1,
    name: "",
  },
];

const initialShops = [
  {
    id: 1,
    name: "",
  },
];

var initialMenuSections = [
  { id: SECTION_MAIN, menuName: "Main" },
  { id: SECTION_RESTAURANTS, menuName: "Restaurants" },
  { id: SECTION_SHOPPING, menuName: "Shopping" },
  { id: SECTION_CONTACT, menuName: "Contact" },
];

export default function Child() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuSections] = React.useState(initialMenuSections);
  const [sectionId, setSectionId] = React.useState(0);
  const isMenuOpen = Boolean(anchorEl);
  const [isDataLoaded, setIsDataLoaded] = React.useState(false);
  const [restaurants, setRestaurants] = React.useState(initialRestaurants);
  const [shops, setShops] = React.useState(initialShops);

  useEffect(() => {
    if (!isDataLoaded) {
      LoadRestaurants(setRestaurants);
      setIsDataLoaded(true);
      LoadShops(setShops);
    }
  }, [isDataLoaded]);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClick = (id) => {
    setSectionId(id);
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Georgetown Sands
          </Typography>
          <div>
            <IconButton
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              open={isMenuOpen}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              onClose={handleClose}
            >
              {menuSections.map((menuSection) => (
                <MenuItem
                  key={menuSection.id}
                  onClick={() => onClick(menuSection.id)}
                >
                  {menuSection.menuName}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.root}></div>
      <Main sectionId={sectionId}></Main>
      <Contact sectionId={sectionId}></Contact>
      <Restaurants
        sectionId={sectionId}
        restaurants={restaurants}
      ></Restaurants>
      <Shopping sectionId={sectionId} shops={shops}></Shopping>
    </div>
  );
}
