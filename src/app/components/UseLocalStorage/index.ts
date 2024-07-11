"use client";

import { useState, useEffect } from "react";

export const useLocalStorage = (storageKey: any, initialValue: any) => {
  const [storageVal, setStorageVal] = useState(getFromLocalStorage(storageKey));

  useEffect(() => {
    setToLocalStorage(storageKey, storageVal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageVal]);

  return [storageVal, setStorageVal];
};

const getFromLocalStorage = (key: any) => {
  const value: any = window.localStorage.getItem(key);
  try {
    return JSON.parse(value);
  } catch (error) {
    return value;
  }
};

const setToLocalStorage = (key: any, value: any) => {
  if (typeof value === "object" && value) {
    value = JSON.stringify(value);
  }
  localStorage.setItem(key, value);
};
