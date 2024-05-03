"use client";
import React, { useEffect, useState } from "react";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

function ToggleTheme() {
  const [pressed, setPressed] = useState(false);

  const getTheme = () => {
    const storedTheme =
      typeof localStorage !== "undefined" && localStorage.getItem("theme");

    return (
      storedTheme ||
      (window.matchMedia("(prefers-color-scheme: light)").matches
        ? "dark"
        : "light")
    );
  };

  const setTheme = (newTheme: string) => {
    const html = document.documentElement;
    const isDark = newTheme === "dark";

    html.classList.toggle("dark", isDark);
    html.classList.toggle("light", !isDark);

    localStorage.setItem("theme", newTheme);
  };

  const handleChangeTheme = () => {
    setPressed(!pressed);
    setTheme(pressed ? "light" : "dark");
  };

  useEffect(() => {
    setTheme(getTheme());
    setPressed(getTheme() === "dark");
  }, []);

  return (
    <div className="relative h-6 w-6">
      <button
        id="toggle-theme"
        className="group"
        onClick={handleChangeTheme}
        aria-pressed={pressed}
      >
        <span className="absolute left-0 right-0 top-0 opacity-0 group-aria-pressed:opacity-100">
          <SunIcon />
        </span>

        <span className="absolute left-0 right-0 top-0 opacity-0 group-aria-[pressed=false]:opacity-100">
          <MoonIcon />
        </span>
      </button>
    </div>
  );
}

export default ToggleTheme;
