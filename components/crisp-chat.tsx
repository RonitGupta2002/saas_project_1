"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("db93f78c-0fef-4453-8854-a7ba0979785c");
  }, []);

  return null;
};