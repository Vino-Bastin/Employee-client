import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

import AddIcon from "@mui/icons-material/Add";

const Header = () => {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={1}
        mx="10%"
        height="10vh"
      >
        <Typography variant="body1">Employee</Typography>
        <IconButton>
          <Tooltip title="Add New Employee">
            <AddIcon />
          </Tooltip>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
