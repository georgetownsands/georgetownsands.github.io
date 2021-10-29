import React, { useEffect, useRef } from "react";
import AppBar from "@material-ui/core/AppBar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { alpha, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Contact from "./Contact";
import Area from "./Area";
import Main from "./Main";
import {
  SECTION_MAIN,
  SECTION_CONTACT,
  SECTION_RESTAURANTS,
  SECTION_SHOPPING,
  SECTION_RENT,
  SECTION_ACTIVITIES,
  MODE_SEARCH,
} from "./Constants";

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

var initialMenuSections = [
  { id: SECTION_MAIN, menuName: "Main" },
  { id: SECTION_RENT, menuName: "Rent" },
  { id: SECTION_RESTAURANTS, menuName: "Restaurants" },
  { id: SECTION_SHOPPING, menuName: "Shopping" },
  { id: SECTION_ACTIVITIES, menuName: "Activities" },
  { id: MODE_SEARCH, menuName: "Search" },
  { id: SECTION_CONTACT, menuName: "Contact" },
];

export default function Child() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuSections] = React.useState(initialMenuSections);
  const [sectionId, setSectionId] = React.useState(0);
  const [searchValue, setSearchValue] = React.useState("");
  const isMenuOpen = Boolean(anchorEl);

  useEffect(() => {
    switch (sectionId) {
      case MODE_SEARCH:
        searchValueRef.focus();
        break;
      default:
        if (menuRef) {
          menuRef.current.scrollIntoView();
        }
    }
  }, [sectionId]);

  let menuRef = useRef(null);
  let searchValueRef = useRef(null);

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

  const handleSearchValueChange = (event) => {
    setSearchValue(event.target.value);
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
      <div ref={menuRef}>
        {sectionId === MODE_SEARCH && (
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <CardHeader title="Search" />
              <Typography variant="h5" color="textPrimary">
                <input
                  className={classes.inputInput}
                  type="text"
                  placeholder="Enter search word(s)..."
                  onChange={handleSearchValueChange}
                  ref={(node) => {
                    searchValueRef = node;
                  }}
                />
              </Typography>
            </CardContent>
          </Card>
        )}
      </div>
      <div className={classes.root}></div>
      <Main sectionId={sectionId}></Main>
      <Contact sectionId={sectionId}></Contact>
      <Area sectionId={sectionId} searchValue={searchValue}></Area>
    </div>
  );
}
