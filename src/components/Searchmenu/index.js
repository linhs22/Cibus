import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import image from "./egg.png"

export default function Searchmenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <br />
      {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{border:"1px solid lightgrey", borderRadius:"25px"}}>
        Choose a search
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Search Foods</MenuItem>
        <MenuItem onClick={handleClose}>Search Foodies</MenuItem>

      </Menu> */}
      <div>
      <Button variant="contained" color="primary">
  Foodie
</Button>
<Button variant="contained" disabled>
  Food
</Button>
{/* <img src={image} style={{margin:"5px" }} alt="Search" /> */}
      </div>
    </div>
  );
}
