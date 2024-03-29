import { useEffect, useState } from "react";
import Articles from "../../components/Articles/Articles";
import "./homepage.scss"
import { getPages } from "../../services/pages";

export default function Home() {

  const [pages, setPages] = useState<any[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPages();

      setPages(data)
    };

    fetchData();
  }, []);


  return (
    <div className="homepage">
      <div className="articles-container">
        <div className="title">Ultimi articoli</div>
        <Articles />
      </div>
      <div className="about">
        {pages?.map((a) => {
          return a.image
        })}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quasi ipsum nesciunt dolor esse mollitia illum, porro consectetur beatae tenetur perspiciatis deleniti. Nisi sint rerum labore ipsa reprehenderit laboriosam distinctio.
      </div>
    </div>
  );
}
