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
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import CodeIcon from '@mui/icons-material/Code';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { ROUTERS } from '../../routers/RouterPath';
import { Link } from 'react-router-dom';

const listMenu = [
    {
        name: "Trang chủ",
        icon: <ChaletIcon />,
        path: ROUTERS.HOME
    },
    {
        name: "Danh mục",
        icon: <AppsIcon />,
        path: ROUTERS.CATEGORY
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
        {/* logo */}
        <Box className="box-menu-header">
           <Box className="box-logo-menu">
              <AirplaneTicketIcon className="ico-logo-menu"/>
              <Typography className="text-logo-menu">Admin Site</Typography>
           </Box>  
           <CodeIcon />       
        </Box>
        <Divider />
         {/* search */}
        <Paper className="paper-search-menu">         
            <IconButton type="button" aria-label="search" sx={{ color: "#AEB9E1" }}>
              <SearchIcon />
            </IconButton>
            <InputBase sx={{ color: "#AEB9E1" }} placeholder="Tìm kiếm ..."/>
        </Paper>
        {/* menu */}
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {listMenu.map((menu, index) => (
              <Link to={menu.path} className="link-menu">
                <ListItem key={index} disablePadding>
                    <ListItemButton>
                        <ListItemIcon className="ico-menu-item">
                            {menu.icon}
                        </ListItemIcon>
                        <ListItemText primary={menu.name} />
                    </ListItemButton>
                </ListItem>
              </Link>
                
            ))}
          </List>
          <Divider />          
        </Box>
      </Drawer>
    </Box>
  );
}

export default Menu
