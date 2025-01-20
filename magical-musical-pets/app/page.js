"use client";

import "./globals.css";
import "./page.css";
import { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const [isDisplayPopup, setDisplayPopup] = useState(false);

  const openPopup = () => {
    setDisplayPopup(true);
  };

  const closePopup = () => {
    setDisplayPopup(false);
  };

  const renderPopup = () => {
    if (!isDisplayPopup) {
      return null;
    }
    return (
      <div id="popup-modal" className="modal">
        <div className="modal-content">
        <span className="close-btn" onClick={closePopup}>&times;</span>
          <h2 style={{marginTop: "0"}}>Welcome to Magical Musical Pets!</h2>
          <p>Are you ready to begin your adventure?</p>
          <button onClick={closePopup}>OK</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Image src="/mmp.png" alt="Logo" id="logo" width={500} height={500} />
      <nav id="homepage-nav">
        <Link href="homepage">Home</Link>
        <Link href="calendar">Calendar</Link>
        <Link href="pet-customization">Pet Customization</Link>
      </nav>
      <main>
        {renderPopup()}
        <div id="floating-container">
          <Image src="/RightFloatBg.png" alt="" id="container-image" width={540} height={540} />
          <button id="container-button" onClick={openPopup}>Get Started!</button>
        </div>
        <div id="gif-wrapper">
          <div id="floating-container-left"></div>
          <Image src="/Magical Musical pets.gif" id="title" alt="Magical Musical Pets GIF"
            width={500} height={500} />
        </div>
      </main>
    </>
  );
}
