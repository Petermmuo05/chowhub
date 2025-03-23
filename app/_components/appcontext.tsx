"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

function AppProvider({ children }) {
  const [cartdata, setcartdata] = useState([]);
  const [checkOutKitchenId, setCheckOutKitchenId] = useState("");
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const [isSideBar, setSideBar] = useState(false);
  const [statusFilter, setStatusFilter] = useState(null);
  const [searchFilter, setSearchFilter] = useState(null);
  const [dateFilter, setDateFilter] = useState(null);
  const [orderSearchInput, setOrderSearchInput] = useState("");
  const [mealFilter, setMealFilter] = useState(null);

  const [summaryData, setSummaryData] = useState({});
  const [mealFormData, setMealFormData] = useState({});
  const [subMealFormData, setSubMealFormData] = useState({});

  return (
    <AppContext.Provider
      value={{
        cartdata,
        setcartdata,
        isMenuOpen,
        setisMenuOpen,
        checkOutKitchenId,
        setCheckOutKitchenId,
        summaryData,
        setSummaryData,
        isSideBar,
        setSideBar,
        statusFilter,
        setStatusFilter,
        dateFilter,
        setDateFilter,
        searchFilter,
        setSearchFilter,
        mealFilter,
        setMealFilter,
        mealFormData,
        setMealFormData,
        subMealFormData,
        orderSearchInput,
        setOrderSearchInput,
        setSubMealFormData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

function useApp() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("Appcontext was used outside the App Provider");
  return context;
}
export { AppProvider, useApp };
