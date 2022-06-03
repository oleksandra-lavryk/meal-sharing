import React from "react";

import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

export function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-socials-links">
        <ul>
          <li>
            <a href="/">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href="/">
              <FaYoutube />
            </a>
          </li>
          <li>
            <a href="/">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="/">
              <BsTwitter />
            </a>
          </li>
          <li>
            <a href="/">
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a href="/">
              <AiFillGithub />
            </a>
          </li>
        </ul>
      </nav>
      <strong>&copy; 2022</strong>
    </footer>
  );
}
