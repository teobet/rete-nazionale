import { ArticleT } from "../../types/Articles";

const Article = (props: { article: ArticleT }) => {
  const { title, excerpt, body, date } = props.article;

  return (
    <div className="article">
      <div className="title">{title}</div>
      <div className="excerpt" dangerouslySetInnerHTML={{ __html: excerpt }} />
      <div className="date">{date.toString()}</div>
    </div>
  );
};

export default Article;
