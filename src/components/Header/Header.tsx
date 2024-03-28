import logo from "../../logo.png";

export default function Header(props?: {
  data?: { link: string; label: string; id: number }[];
  callback: Function;
}) {
  return (
    <header
      id="header"
      onLoad={() =>
        props?.callback(document.getElementById("header")?.offsetHeight)
      }
    >
      {" "}
      {/* quando sta situa carica, aggiorna lo state dell'altezza in 'App' */}
      <img src={logo} height={100} alt="" />
      <div className="header-links">
        {props?.data
          ?.sort((a, b) => a.id - b.id)
          .map((element) => {
            return (
              <a className="header-link" href={"/" + element.link}>
                {element.label}
              </a>
            );
          })}
      </div>
    </header>
  );
}
