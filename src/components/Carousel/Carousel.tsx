import { useEffect, useState } from "react";
import { PageT } from "../../types/Pages";
import "./carousel.scss";

export default function Carousel(props: { pages?: PageT[] }) {
    const [selected, setSelected] = useState<number>(0);
    return (
        <div className="carousel-body">
            {props.pages ? (
                <img src={props.pages[selected].image} height={100}></img>
            ) : null}
            <button
                type="button"
                onClick={() =>
                    setSelected(
                        selected + 1 > (props.pages?.length || 1)-1 ? 0 : selected+1
                    )
                }
            >
                +
            </button>
            <button
                type="button"
                onClick={() =>
                    setSelected(
                        selected - 1 < 0 ? (props.pages?.length || 1)-1 : selected - 1
                    )
                }
            >
                -
            </button>
        </div>
    );
}
