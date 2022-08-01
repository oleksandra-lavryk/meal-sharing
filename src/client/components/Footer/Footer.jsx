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
            <a target="_blank" href="https://www.instagram.com/">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/" target="_blank">
              <FaYoutube />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/" target="_blank">
              <BsTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/oleksandra-lavryk/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/oleksandra-lavryk" target="_blank">
              <AiFillGithub />
            </a>
          </li>
        </ul>
      </nav>
      <strong>&copy; 2022</strong>
    </footer>
  );
}
