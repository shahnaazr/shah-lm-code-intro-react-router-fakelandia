import React from "react";
import { createContext, useContext } from "react";
import { Misdemeanour } from "../../types/misdemeanours.types";
import useMisdemeanoursData from "./misdemeanours_data";

type MisdemeanoursContextProps = {
  misdemeanours: Misdemeanour[];
};

const MisdemeanoursContext = createContext<
  MisdemeanoursContextProps | undefined
>(undefined);

const MisdemeanoursContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const misdemeanours = useMisdemeanoursData();

  return (
    <MisdemeanoursContext.Provider value={{ misdemeanours }}>
      {children}
    </MisdemeanoursContext.Provider>
  );
};

const useMisdemeanours = (): MisdemeanoursContextProps => {
  const context = useContext(MisdemeanoursContext);

  if (!context) {
    throw new Error("useMisdemeanours inside MisdemeanoursProvider");
  }

  return context;
};

export { MisdemeanoursContextProvider, useMisdemeanours, MisdemeanoursContext };
