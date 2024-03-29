import { useEffect, useState } from "react";
import { getArticles } from "../../services/articles";
import Article from "../Article/Article";
import { ArticleT } from "../../types/Articles";
import "./articles.scss";

const Articles = () => {
  const [articles, setArticles] = useState<[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getArticles();
      setArticles(data);
    };
    fetchData();
  }, []);

  return (
    <div className="articles">
      {articles?.map((a: ArticleT) => (
        <Article article={a} />
      ))}
    </div>
  );
};

export default Articles;
