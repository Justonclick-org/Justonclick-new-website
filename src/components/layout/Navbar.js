import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Collapse, Container } from "reactstrap";
import logo from "../assets/Justonclick-final.png";
import "./Navbar.css";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Technologies", to: "/technologies" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return React.createElement(
    "header",
    {
      className: "jocnav-wrap" + (scrolled ? " jocnav-scrolled" : ""),
    },
    React.createElement(
      Container,
      null,
      React.createElement(
        "div",
        { className: "jocnav-inner" },
        // Brand
        React.createElement(
          Link,
          {
            to: "/",
            className: "jocnav-brand",
            "aria-label": "Justonclick home",
          },
          React.createElement("img", {
            src: logo,
            alt: "Justonclick logo",
          })
        ),
        // Desktop nav
        React.createElement(
          "nav",
          {
            className: "jocnav-desktop",
            "aria-label": "Primary",
          },
          React.createElement(
            "ul",
            { className: "jocnav-links" },
            NAV_ITEMS.map((item) =>
              React.createElement(
                "li",
                { key: item.to },
                React.createElement(
                  Link,
                  {
                    to: item.to,
                    className:
                      "jocnav-link" +
                      (pathname === item.to ? " jocnav-active" : ""),
                  },
                  item.label
                )
              )
            ),
            React.createElement(
              "li",
              { className: "ms-2" },
              React.createElement(
                Link,
                {
                  to: "/contact",
                  className: "jocnav-cta",
                },
                "Schedule Consultation"
              )
            )
          )
        ), 
        // Mobile toggle button
        React.createElement(
          "button",
          {
            type: "button",
            className: "jocnav-toggle",
            "aria-label": "Toggle navigation",
            "aria-expanded": open,
            onClick: () => setOpen((v) => !v),
          },
          React.createElement("span", null)
        )
      ),
      // Mobile collapse (Reactstrap)
      React.createElement(
        Collapse,
        {
          isOpen: open,
          className: "jocnav-mobile",
        },
        React.createElement(
          "ul",
          null,
          NAV_ITEMS.map((item) =>
            React.createElement(
              "li",
              { key: item.to },
              React.createElement(
                Link,
                {
                  to: item.to,
                  className:
                    "jocnav-link" +
                    (pathname === item.to ? " jocnav-active" : ""),
                },
                item.label
              )
            )
          )
        ),
        React.createElement(
          Link,
          {
            to: "/contact",
            className: "jocnav-cta mb-4",
          },
          "Schedule Consultation"
        )
      )
    )
  );
}

export default Navbar;