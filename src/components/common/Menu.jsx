import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ChaletIcon from '@mui/icons-material/Chalet';
import AppsIcon from '@mui/icons-material/Apps';
import CycloneIcon from '@mui/icons-material/Cyclone';

const drawerWidth = 240;
const listMenu = [
    {
        name: "Trang chủ",
        icon: <ChaletIcon />
    },
    {
        name: "Danh mục",
        icon: <AppsIcon />
    }
]

function Menu() {
  return (
    <Box className="box-main-menu">
      <CssBaseline />
      <Drawer
        variant="permanent"
        className="drawer-menu"
      >
        <Box className="box-logo-menu">
           <CycloneIcon className="ico-logo-menu"/>
           <Typography className="text-logo-menu">Admin Site</Typography>
        </Box>
        <Divider />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {listMenu.map((menu, index) => (
                <ListItem key={index} disablePadding>
                    <ListItemButton>
                        <ListItemIcon className="ico-menu-item">
                            {menu.icon}
                        </ListItemIcon>
                        <ListItemText primary={menu.name} />
                    </ListItemButton>
                </ListItem>
            ))}
          </List>
          <Divider />          
        </Box>
      </Drawer>
    </Box>
  );
}

export default Menu
