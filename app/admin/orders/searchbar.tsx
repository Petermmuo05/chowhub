"use client";
import Image from "next/image";
import Search from "../../../public/search.svg";
import Filter from "../../../public/filter.svg";
import { Menu, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useApp } from "@/app/_components/appcontext";

export default function SearchBar({ MealsData }) {
  const [searchVal, setSearchVal] = useState("");
  const { setMealFilter, searchFilter, setSearchFilter, setOrderSearchInput } =
    useApp();

  useEffect(
    function () {
      setOrderSearchInput(searchVal);
    },
    [searchVal]
  );

  const [anchorEl, setAnchorEl] = useState(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);
  // const MealIdList = MealsData.map(({ id, name }) => id);
  // console.log(MealsData);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSubMenuAnchorEl(null); // Close the sub-menu when the main menu is closed
  };

  const handleSubMenuOpen = (event) => {
    setSubMenuAnchorEl(event.currentTarget);
  };

  const handleSubMenuClose = () => {
    setSubMenuAnchorEl(null);
    // toast(`selected ${id}`);
  };
  return (
    <div className="flex flex-row items-center mt-3 h-10 max-sm:h-8">
      <div className="flex flex-row items-center max-sm:gap-0 gap-2 border-poster px-1 h-10  max-sm:h-8 border rounded-md w-fit">
        <Image src={Search} alt="search" className="h-[17px]" />{" "}
        <input
          type="text"
          placeholder={`Search ${
            searchFilter === "id"
              ? "OrderId"
              : searchFilter === "user"
              ? "Customer"
              : ""
          }`}
          className="text-[14px] py-1 removefocus w-[50vw] "
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
      </div>
      <div
        className="flex flex-row items-center border-poster px-2 h-10 gap-1 border  max-sm:h-8 rounded-md w-fit"
        onClick={handleMenuOpen}
      >
        <Image src={Filter} alt="filter" className="h-[17px]" />
        <span className="text-[14px] text-[#b4b4a2]">Filters</span>
      </div>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem
          onClick={() => {
            handleMenuClose();
            setSearchFilter("id");
          }}
        >
          Order ID
        </MenuItem>

        <MenuItem
          aria-haspopup="true"
          onClick={(e) => {
            handleSubMenuOpen(e);
            setSearchFilter("meal");
          }}
        >
          Meal
        </MenuItem>

        <Menu
          anchorEl={subMenuAnchorEl}
          open={Boolean(subMenuAnchorEl)}
          onClose={handleSubMenuClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
        >
          {MealsData.map(({ id, name }) => {
            return (
              <MenuItem
                key={id}
                onClick={(e) => {
                  handleSubMenuClose();
                  setSearchFilter("meal");
                  setMealFilter(id);
                  handleMenuClose(); 
                }}
              >
                {name}
              </MenuItem>
            );
          })}
          {/* <MenuItem onClick={handleSubMenuClose}>Subitem 1</MenuItem>
          <MenuItem onClick={handleSubMenuClose}>Subitem 2</MenuItem>
          <MenuItem onClick={handleSubMenuClose}>Subitem 3</MenuItem> */}
        </Menu>

        <MenuItem
          onClick={() => {
            handleMenuClose();
            setSearchFilter("user");
          }}
        >
          Customer
        </MenuItem>
      </Menu>
      {searchFilter && (
        <div
          className="flex flex-row items-center border-poster px-2 h-10 gap-1 border min-sm:px-3 bg-red-500  max-sm:h-8 rounded-md w-fit text-[14px] text-white"
          onClick={() => {
            setMealFilter(null);
            setSearchFilter(null);
            setOrderSearchInput("");
          }}
        >
          Reset
        </div>
      )}
    </div>
  );
}
