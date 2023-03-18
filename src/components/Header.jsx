import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";

import AddIcon from "@mui/icons-material/Add";
import { Colors } from "../theme";

const Header = () => {
  return (
    <Box bgcolor={Colors.grey[100]}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={1}
        mx="10%"
        height="10vh"
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          color={Colors.blueAccent[500]}
        >
          Employee
        </Typography>
        <Tooltip title="Add New Employee">
          <Button>
            <AddIcon color="red" />
          </Button>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Header;
