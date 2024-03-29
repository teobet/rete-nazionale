import { useEffect, useRef, useState } from "react";
import logo from "../../logo.png";
import "./header.scss";
import { Link } from "react-router-dom";
import { LinkT } from "../../types/Links";

// TODO riutilizzare la creazione dei link

const Links = (links: LinkT[]) => {
  return (
    <>
      {links
        ?.sort((a, b) => a.id - b.id)
        .map((element) => (
          <Link className="link" to={element.link}>
            {element.label}
          </Link>
        ))}
    </>
  );
};

export default function Header(props?: {
  data?: { link: string; label: string; id: number }[];
}) {
  const [height, setHeight] = useState<number | undefined>(0);
  const [open, setOpen] = useState<boolean>(false);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    setHeight(header?.current?.clientHeight);
  }, []);

  return (
    <>
      <header id="header" ref={header}>
        <img src={logo} className="logo" alt="" />
        <div className="mobile-menu" onClick={() => setOpen(true)}>
          󰍜
        </div>
        <div className={`mobile-links ${open ? "open" : ""}`}>
          <Links links={props?.data} />
        </div>
        <div className="desktop-links">
          {props?.data
            ?.sort((a, b) => a.id - b.id)
            .map((element) => (
              <Link className="link" to={element.link}>
                {element.label}
              </Link>
            ))}
        </div>
      </header>
      <div className="headerSpacing" style={{ height: `${height}px` }} />
    </>
  );
}
