import React from "react";

import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export function ContactsPage() {
  return (
    <>
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-socials-container">
        <div className="contact-social-item">
          <a
            className="contact-social-item-icon"
            href="mailto:oleksandra.lavryk96@gmail.com"
          >
            <AiOutlineMail />
          </a>
          <a
            className="contact-social-item-text"
            href="mailto:oleksandra.lavryk96@gmail.com"
          >
            <span>Email</span>
          </a>
        </div>
        <div className="contact-social-item">
          <a
            className="contact-social-item-icon"
            href="tel:+4512345678"
            target="_blank"
          >
            <BsFillTelephoneFill />
          </a>
          <a
            className="contact-social-item-text"
            href="tel:+4512345678"
            target="_blank"
          >
            <span>+45 12 34 56 78</span>
          </a>
        </div>
        <div className="contact-social-item">
          <a
            className="contact-social-item-icon"
            target="_blank"
            href="https://www.instagram.com/"
          >
            <BsInstagram />
          </a>
          <a
            className="contact-social-item-text"
            target="_blank"
            href="https://www.instagram.com/"
          >
            <span>Instagram</span>
          </a>
        </div>
        <div className="contact-social-item">
          <a
            className="contact-social-item-icon"
            href="https://www.youtube.com/"
            target="_blank"
          >
            <FaYoutube />
          </a>
          <a
            className="contact-social-item-text"
            href="https://www.youtube.com/"
            target="_blank"
          >
            <span>YouTube</span>
          </a>
        </div>
        <div className="contact-social-item">
          <a
            className="contact-social-item-icon"
            href="https://www.facebook.com/"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            className="contact-social-item-text"
            href="https://www.facebook.com/"
            target="_blank"
          >
            <span>Facebook</span>
          </a>
        </div>
      </div>
      <h2 className="contact-title">Find Us</h2>
      <p className="address-text">Suhmsgade 4</p>
      <p className="address-text">1125 København</p>
      <iframe
        className="address-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d334.37222473642316!2d12.576573714695309!3d55.68239570144981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652531a8be8fcf3%3A0x8fa2ed071ac542bf!2sKongehatten!5e0!3m2!1sru!2sdk!4v1654259381126!5m2!1sru!2sdk"
        width="100%"
        height="450"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}
