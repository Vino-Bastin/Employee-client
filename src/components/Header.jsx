/**
 * @file Header.jsx
 * @description Header component for the application.
 */

import React, { memo, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";

import AddIcon from "@mui/icons-material/Add";
import { Colors } from "../theme";
import NewEmployee from "./NewEmployee";

//* Header component
const Header = () => {
  //* state to control the new employee form Modal
  const [open, setOpen] = useState(false);

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
        {/* logo */}
        <Typography
          variant="h5"
          fontWeight="bold"
          color={Colors.blueAccent[500]}
        >
          Employee
        </Typography>

        {/* add new employee button */}
        <Tooltip title="Add New Employee">
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setOpen(true)}
          >
            <AddIcon />
          </Button>
        </Tooltip>

        {/* new employee form */}
        <NewEmployee isOpen={open} setOpen={setOpen} />
      </Box>
    </Box>
  );
};

export default memo(Header);
