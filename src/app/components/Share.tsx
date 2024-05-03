import { siteConfig } from "@/data/site.config";
import React from "react";
import TwitterColorIcon from "./icons/TwitterColorIcon";
import { headers } from "next/headers";
import LinkedinIcon from "./icons/LinkedinIcon";

function Share() {
  const message = siteConfig.shareMessage;
  const headersList = headers();
  const referer = headersList.get("referer");

  return (
    <div className="flex flex-col gap-2">
      <span className="mb-1 font-bold text-2xl">Share</span>
      <ul className="flex gap-3 text-black dark:text-white">
        <li>
          <a
            href={`https://twitter.com/intent/tweet?text=${
              message + " " + referer
            }`}
            aria-label="Share on Twitter"
          >
            <TwitterColorIcon />
          </a>
        </li>
        <li>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${referer}`}
            aria-label="Share on LinkedIn"
          >
            <LinkedinIcon />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Share;
