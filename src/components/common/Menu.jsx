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
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import AppsIcon from '@mui/icons-material/Apps';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import CodeIcon from '@mui/icons-material/Code';
import { ROUTERS } from '../../routers/RouterPath';
import { Link } from 'react-router-dom';
import Search from './Search';

const listMenu = [
    {
        name: "Trang chủ",
        icon: <OtherHousesIcon />,
        path: ROUTERS.HOME
    },
    {
        name: "Danh mục",
        icon: <AppsIcon />,
        path: ROUTERS.CATEGORY
    }
]

function Menu() {
  const [menuActive, setMenuActive] = React.useState(-1)
  const handleClickMenu = (index) => {
    setMenuActive(index)
  }

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
        
         {/* search */}
        <Search />

        <Divider className="divider-menu"/>

        {/* menu */}
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {listMenu.map((menu, index) => (
              <Link to={menu.path} className="link-menu" key={index}>
                <ListItem key={index} disablePadding>
                    <ListItemButton onClick={() => handleClickMenu(index)}>
                        <ListItemIcon className={`ico-menu-item${index === menuActive ? `-active` : ``}`}>
                            {menu.icon}
                        </ListItemIcon>
                        <ListItemText primary={menu.name} className={`${index === menuActive ? `text-menu-active` : ``}`}/>
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
