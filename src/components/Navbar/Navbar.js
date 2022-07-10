import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { auth } from "../../helpers/firebaseConfig";
import { signOut } from "firebase/auth";

const Navbar = (props) => {
  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => {
        console.warn("sign out error", error);
      });
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{justifyContent: "space-between" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Food app
            </Typography>
          </Link>
          {props.loggedIn ? (
            <Button
              onClick={logOut}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Log out
            </Button>
          ) : (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Login
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
