import { useEffect, useState } from "react";
import { getArticles } from "../../services/articles";
import Article from "../Article/Article";
import { ArticleT } from "../../types/Articles";
import "./articles.scss";

// TODO Salviamoci sti dati almeno non dobbiamo chiederli ogni volta

const Articles = () => {
  const [articles, setArticles] = useState<[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getArticles(10);
      setArticles(data);
    };
    fetchData();
  }, []);

  return (
    <div className="articles">
      {articles?.map((a: ArticleT) => (
        <Article article={a} key={a.id}/>
      ))}
    </div>
  );
};

export default Articles;
