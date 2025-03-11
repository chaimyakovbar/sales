import React, { useState } from 'react'
import { Link } from "react-router-dom"

import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import ListItem from '@mui/material/ListItem'
import { ViewHeadline } from "@mui/icons-material"
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'



const Drawer2 = () => {
  const [state, setState] = useState( false )

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  }

  const handleClose = () => {
    setState(false);
  };

  const handleMenuClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    handleClose();
  };

  const menuItems = [
    { text: "HOME", link: "/" },
    { text: "ALL COLLECTION", link: "/works" },
    { text: "ABOUT US", link: "/about" },
    { text: "CONTACT", link: "/contact" },
    { text: "POLICY SUPPORT", link: "/PolicySupport" },
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={handleMenuClick}
                component={Link}
                to={item.link}
              >
                <ListItemText>
                  <div
                    style={{
                      fontSize: "30px",
                      color: "#C0D3CAFF",
                      textAlign: "right",
                      padding: 0,
                      marginRight: "5%",
                    }}
                  >
                    {item.text}
                  </div>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Box>
  );

  return (
    <div>
          <Button onClick={toggleDrawer('top', true)}>{<ViewHeadline sx={{ color: "#C0D3CAFF" }} />}</Button>
          <Drawer
            anchor={'top'}
            open={state['top']}
            onClose={toggleDrawer('top', false)}
          >
            {list('top')}
          </Drawer>
    </div>
  );
}

export default Drawer2