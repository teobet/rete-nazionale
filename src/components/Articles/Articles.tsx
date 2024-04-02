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
      {articles?.map((article: ArticleT) => (
        <Article article={article} key={article.id}/>
      ))}
    </div>
  );
};

export default Articles;
