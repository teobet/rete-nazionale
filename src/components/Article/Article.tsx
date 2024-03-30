import { redirect, useNavigate } from "react-router-dom";
import { ArticleT } from "../../types/Articles";
import "./article.scss"

const Article = (props: { article: ArticleT }) => {
  const { id, title, excerpt, body, date } = props.article;
  const navigate = useNavigate()

  return (
    <div className="articleC" onClick={() => navigate(`/articolo/${id}`)}>
      <div className="smallTitle">{title}</div>
      <div className="excerpt" dangerouslySetInnerHTML={{ __html: excerpt }} />
      <div className="date">{date.toString()}</div>
    </div>
  );
};

export default Article;
