import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export const NavBar = () => (
  <AppBar position="static">
    <Toolbar variant="dense">
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        ERT Notes
      </Typography>
    </Toolbar>
  </AppBar>
);
