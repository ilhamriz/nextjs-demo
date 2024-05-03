import React from "react";
import ToggleTheme from "./ToggleTheme";
import GithubIcon from "./icons/GithubIcon";
import TwitterIcon from "./icons/TwitterIcon";
import HeaderLink from "./HeaderLink";
import TagIcon from "./icons/TagIcon";

function Header() {
  const SOCIALNETWORKS = [
    {
      name: "Github",
      url: "https://github.com/danielcgilibert/blog-template",
      icon: GithubIcon,
    },

    {
      name: "Twitter",
      url: "https://github.com/danielcgilibert/blog-template",
      icon: TwitterIcon,
    },
  ];

  return (
    <header className="relative flex items-center h-12 font-semibold">
      <a className="text-lg mr-auto" href="/">
        Home
      </a>

      <div
        id="astro-header-drawer"
        className="shadow rounded-l-lg md:bg-transparent dark:md:bg-transparent bg-white dark:bg-[#0a0910] md:shadow-none md:rounded-none md:border-none md:h-auto md:static absolute transition-transform duration-300 ease-in translate-x-96 md:translate-x-0 top-12 -right-5 pl-4 pt-6 pb-4 md:p-0 h-[200px] w-[200px] z-50"
      >
        <nav className="flex h-full flex-col justify-between gap-12 text-left md:flex-row md:w-full md:gap-5">
          <div className="flex flex-col gap-4 md:flex-row md:border-r-2 border-black pr-4 dark:border-white">
            <HeaderLink
              href="/tags"
              className="flex items-center gap-1 text-2xl md:text-base"
            >
              <TagIcon /> Tags
            </HeaderLink>
          </div>

          <div className="flex justify-center items-center md:justify-end gap-3 md:p-0">
            {SOCIALNETWORKS.map((network) => (
              <HeaderLink
                key={network.name}
                href={network.url}
                className=""
                target="_blank"
                aria-label={network.name}
              >
                <span>{<network.icon />} </span>
              </HeaderLink>
            ))}
          </div>
        </nav>
      </div>

      {/* <div className="flex items-center gap-3 md:pl-3" transition:persist="navbar"> */}
      <div className="flex items-center gap-3 md:pl-3">
        <ToggleTheme />
        {/* <button
          id="astro-header-drawer-button"
          type="button"
          className="md:ml-6 md:hidden"
        >
          <MenuIcon />
          <span className="sr-only">Show Menu</span>
        </button> */}
      </div>
    </header>
  );
}

export default Header;
