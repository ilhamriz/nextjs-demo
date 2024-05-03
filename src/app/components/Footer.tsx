import React from "react";

function Footer() {
  const today = new Date();

  return (
    <footer className="flex justify-center items-center w-full px-16 h-28 border-t-2">
      &copy; {today.getFullYear()} Weekend Inc. All rights reserved.
    </footer>
  );
}

export default Footer;
