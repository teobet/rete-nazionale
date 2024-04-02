import { useEffect, useRef, useState } from "react";
import logo from "../../logo.png";
import "./header.scss";
import { Link } from "react-router-dom";
import { LinkT } from "../../types/Links";

import image from "../../assets/link.png";

const Links = (props: { links: LinkT[]; callback: Function }) => {
  return (
    <>
      {props.links
        .sort((a, b) => a.id - b.id)
        .map((link) => (
          <Link to={link.link} onClick={() => props.callback(false)} key={link.id}>
            {link.image ? (
              <img src={image} className="image-link" />
            ) : (
              <div className="link">{link.src}</div>
            )}{" "}
            {/* TODO: fixa col path giusto */}
          </Link>
        ))}
    </>
  );
};

export default function Header(props: { data: LinkT[] }) {
  const [height, setHeight] = useState<number | undefined>(0);
  const [open, setOpen] = useState<boolean>(false);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    setHeight(header?.current?.offsetHeight);
  }, [header?.current]);

  return (
    <>
      <header id="header" ref={header}>
        <Link to="/">
          <img src={logo} className="logo" alt="" />
        </Link>
        <div className="mobile-menu" onClick={() => setOpen(true)}>
          󰍜
        </div>
        <div className={`mobile-links ${open ? "open" : ""}`}>
          <div className="mobile-close" onClick={() => setOpen(false)}>
            
          </div>
          <Links links={props.data} callback={setOpen} />
        </div>
        <div className="desktop-links">
          <Links links={props.data} callback={setOpen} />
        </div>
      </header>
      <div className="headerSpacing" style={{ height: `${height}px` }} />
    </>
  );
}
