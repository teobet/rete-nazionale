import { useEffect, useState } from "react";
import { getArticle } from "../../services/articles";
import { ArticleT } from "../../types/Articles";
import "./article.scss"
import { useParams, useSearchParams } from "react-router-dom";

const Article = () => {
    const [article, setArticle] = useState<ArticleT | null>(null);
    const [queryParameters] = useSearchParams()
    const params = useParams();
    const id = Number(params.id)
    
    useEffect(() => {
        const fetchData = async () => {
            id && setArticle(await getArticle(id))
        }

        fetchData();
    }, [])
    
    console.log(getArticle(id));
    return <div className="article">
        <div className="title">
            {article?.title}
        </div>
        <div className="body" dangerouslySetInnerHTML={{__html: article?.body || ''}} />
    </div>
}

export default Article;