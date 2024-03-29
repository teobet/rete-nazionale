import { ArticleT } from "../../types/Articles";
import "./article.scss"

const Article = (props: { article: ArticleT }) => {
  const { title, excerpt, body, date } = props.article;

  return (
    <div className="article">
      <div className="smallTitle">{title}</div>
      <div className="excerpt" dangerouslySetInnerHTML={{ __html: excerpt }} />
      <div className="date">{date.toString()}</div>
    </div>
  );
};

export default Article;
