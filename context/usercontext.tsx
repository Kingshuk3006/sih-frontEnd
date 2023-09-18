"use client";

import {
    Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

import React, { useContext } from "react";
import { CircularProgress } from "@chakra-ui/react";

interface IDefaultValues {
  user: null | any;
  setUser: Dispatch<SetStateAction<any | null>>;
}

const defaultValues: IDefaultValues = {
  user: null,
  setUser: () => {},
};

const userContext = React.createContext(defaultValues);

export function useUser() {
  return useContext(userContext);
}

export function UserContextProvider({ children }: any) {
  const [user, setUser] = useState<any | null>(defaultValues.user);

  const [loading, setLoading] = useState<boolean>(false);


  useEffect(() => {
    
    let _data = window.localStorage.getItem("userData")
    if (_data) {
      let data = JSON.parse(_data)
      setUser(data)
    }
  }, []);


  return (
    <>
      {loading ? (
        <div className="h-screen w-screen flex flex-col justify-center items-center space-y-4">
          <CircularProgress isIndeterminate color="blue.400" />
          <h1>Loading please wait!</h1>
        </div>
      ) : (
        <userContext.Provider value={{ user, setUser }}>
          {children}
        </userContext.Provider>
      )}
    </>
  );
}