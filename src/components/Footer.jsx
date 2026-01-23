import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
      <small className="madeby">
        Made with <span className="heartEmoji">♥</span>
        <a href="https://github.com/siffatkhan"> By Siffat</a>
      </small>
</footer>
  );
}

export default Footer;
