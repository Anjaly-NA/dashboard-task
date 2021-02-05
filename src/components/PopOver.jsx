import React, { useState } from "react";
import { Popover, IconButton } from "@material-ui/core/";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DesignDetail from "../views/dashboard/DesignDetail";

const PopOver = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <IconButton edge="end" size="small" onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <DesignDetail designId={props.designId} />
      </Popover>
    </div>
  );
};
export default PopOver;
