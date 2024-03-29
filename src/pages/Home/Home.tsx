import { useEffect, useState } from "react";
import Articles from "../../components/Articles/Articles";
import "./homepage.scss"
import { getPages } from "../../services/pages";
import { PageT } from "../../types/Pages";
import Carousel from "../../components/Carousel/Carousel";

export default function Home() {

  const [pages, setPages] = useState<PageT[]>()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPages();
      setPages(data)
    };
    fetchData();
  },[]);


  return (
    <div className="homepage">
      <div className="articles-container">
        <div className="title">Ultimi articoli</div>
        <Articles />
      </div>
      <div className="about">
        <Carousel pages={pages}/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quasi ipsum nesciunt dolor esse mollitia illum, porro consectetur beatae tenetur perspiciatis deleniti. Nisi sint rerum labore ipsa reprehenderit laboriosam distinctio.
      </div>
    </div>
  );
}
