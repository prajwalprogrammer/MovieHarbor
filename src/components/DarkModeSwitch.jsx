"use client";
import React,{useEffect,useState} from "react";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [Mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {Mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            className="text-xl hover:text-amber-500 cursor-pointer"
            onClick={() => setTheme("light")}
          />
        ) : (
          <BsFillMoonFill
            className="text-xl hover:text-amber-500 cursor-pointer"
            onClick={() => setTheme("dark")}
          />
        ))}
    </>
  );
}
