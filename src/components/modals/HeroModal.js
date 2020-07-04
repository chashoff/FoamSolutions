import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { IoIosDocument, IoIosList } from "react-icons/io";
import { MdPhone, MdNoEncryption } from 'react-icons/md';
import './HeroModal.css';
import Typed from "react-typed";


const content = [
  {
    text: 'HEF',
    animation: 'fade',
  },
  {
    text: 'AR',
    animation: 'fade',
  },
  {
    text: 'AFFF',
    animation: 'fade',
  }
];

const HeroModal = () => (
  <div style={{ margin: "0 auto" }}>
    <div
      className="boxShadow"
      style={{
        width: "600px",
        backgroundColor: "rgba(30, 39, 38, 0.7)",
        padding: "1.5em",
        userSelect: "none"
      }}
    >
      <img
        style={{ height: "150px", marginBottom: "1rem" }}
        src={require("../../images/drop.svg")}
        alt=""
      />
      <img style={{paddingBottom: '1rem'}} src={require("../../images/text_logo.svg")} alt="" />
      <Typed style={{fontSize: '1.8rem', color: 'lightgrey'}} strings={["A Friendly Company Doing", "An Eco Friendly Company Doing<br>Eco Friendly Testing"]} typeSpeed={40} backSpeed={50} />
    </div>
    <div style={styles.navContainer}>
      <Link className="navItem" style={styles.navItem} to="/">
        <FaHome style={styles.icon} />
        <span style={styles.navFont}>Home</span>
      </Link>
      <Link className="navItem" style={styles.navItem} to="/about">
        <IoIosDocument style={styles.icon} />
        <span style={styles.navFont}>About</span>
      </Link>
      <Link className="navItem" style={styles.navItem} to="/codes">
        <IoIosList style={styles.icon} />
        <span style={styles.navFont}>NFPA Codes</span>
      </Link>
      <Link className="navItem" style={styles.navItem} to="/contact">
        <MdPhone style={styles.icon} />
        <span style={styles.navFont}>Contact</span>
      </Link>
    </div>
  </div>
);
export default HeroModal;

const styles = {
  navFont: {
    color: "darkGrey",
    fontWeight: "600",
    fontSize: "1.25em",
    textTransform: "uppercase",
    userSelect: "none"
  },
  navItem: {
    backgroundColor: "rgba(30, 39, 38, 0.7)",
    marginTop: ".25em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: ".25em"
  },
  navContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridColumnGap: ".25em"
  },
  icon: {
    fontSize: "4.5em",
    color: "lightgrey"
  }
};