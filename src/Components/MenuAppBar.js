import React from "react";
import styles from "../Styles/MenuAppBar.module.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import navbarLogo from "../Assets/navbarLogo.png";
import profilePic from "../Assets/profilePic.png";
import questionIcon from "../Assets/questionIcon.png";
import Dropdown from "react-bootstrap/Dropdown";

function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <div className={styles.root}>
      <AppBar position="static" color="white">
        <Toolbar>
          <IconButton
            edge="start"
            className={styles.menuButton}
            color="grey"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={styles.title}>
            <img src={navbarLogo} className={styles.navbarLogo} />
          </Typography>
          <div className={styles.rightIcons} />
          <IconButton aria-label="show 0 new notifications" color="grey">
            <Badge badgeContent={0} color="secondary">
              <NotificationsIcon />
            </Badge>
            <img src={questionIcon} />
          </IconButton>
          <Dropdown 
            style={{marginLeft: "30px"}}
          >
            <Dropdown.Toggle
              variant="transparent"
              id="dropdown-basic"
              className={styles.dropdownBtn}
            >
              Lara Erickson
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="grey"
          >
            <img src={profilePic} className={styles.profilePic} />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}

export default MenuAppBar;
