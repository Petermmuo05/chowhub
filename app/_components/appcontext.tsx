"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

function AppProvider({ children }) {
  const [cartdata, setcartdata] = useState([]);
  const [checkOutKitchenId, setCheckOutKitchenId] = useState("");
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const [isSideBar, setSideBar] = useState(false);

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

        mealFormData,
        setMealFormData,
        subMealFormData,
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
