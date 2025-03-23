"use client";
import { useState } from "react";
import AdminStatus from "./adminstatus";
import { Menu, MenuItem } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import { updateOrderStatus } from "@/_lib/actions";
export default function StatusDropdown({ status, orderId }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  let num;

  switch (status) {
    case "placed":
      num = 0;
      break;
    case "cooking":
      num = 1;
      break;
    case "ready":
      num = 2;
      break;
    default:
      num = -1; // or some other default value if status is unknown
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (num >= 0) {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  async function handleStatusChange(val) {
    const statusArr = ["placed", "cooking", "ready", "fulfilled", "cancelled"];
    const newStatus = statusArr[val];
    if (num >= val) {
      toast.error("Status Change Failed Successfully");
    } else {
      const newOrder = await updateOrderStatus(newStatus, orderId);
      toast.success("Status Change Successfully");
    }
    setAnchorEl(null);
  }
  return (
    <>
      <AdminStatus status={status} handleClick={handleClick} />
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem
          sx={{
            "&:hover": {
              backgroundColor: "rgb(255, 153, 0,0.1)", // Custom hover color
              color: "orange", // Optional: change text color on hover
            },
          }}
          onClick={() => handleStatusChange(1)}
        >
          Cooking
        </MenuItem>
        <MenuItem
          sx={{
            "&:hover": {
              backgroundColor: "rgb(255, 255, 0,0.1)", // Custom hover color
              color: "yellow", // Optional: change text color on hover
            },
          }}
          onClick={() => handleStatusChange(2)}
        >
          Ready
        </MenuItem>
        <MenuItem
          sx={{
            "&:hover": {
              backgroundColor: "rgb(0, 255, 0,0.1)", // Custom hover color
              color: "green", // Optional: change text color on hover
            },
          }}
          onClick={() => handleStatusChange(3)}
        >
          Fulfilled
        </MenuItem>
        <MenuItem
          onClick={() => handleStatusChange(4)}
          sx={{
            "&:hover": {
              backgroundColor: "#FF4D00", // Custom hover color
              color: "white", // Optional: change text color on hover
            },
            backgroundColor: "rgba(255, 0, 0, 0.1)",
            color: "red",
          }}
        >
          Cancelled
        </MenuItem>
      </Menu>
    </>
  );
}
