import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const OpenDrawer = () => {
  const menuItems = [
    { text: "HOME", link: "/" },
    { text: "ALL COLLECTION", link: "/works" },
    { text: "ABOUT US", link: "/about" },
    { text: "CONTACT", link: "/contact" },
    { text: "POLICY SUPPORT", link: "/PolicySupport" },
  ];

  const handleMenuClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "20px 0",
      }}
    >
      <List style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding style={{ width: "auto" }}>
            <ListItemButton
              onClick={handleMenuClick}
              component={Link}
              to={item.link}
              style={{ padding: "10px 20px" }} // Adds spacing
            >
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: 20,
                  color: "#C0D3CAFF",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default OpenDrawer;
