import axios from "axios";

const getArticles = async (limit?: number) => {
    const response: any =
        await axios.get(`http://localhost:8080/wp-json/wp/v2/posts/${limit ? `?per_page=${limit}` : ""}`)
            .catch((e) => console.error("Failed to retrieve articles"))

    const data = response?.data

    const formattedArticles = data?.map((a: any) => formatArticle(a))

    return formattedArticles
}

const getArticle = async (id: number) => {
    const response = await axios.get(`http://localhost:8080/wp-json/wp/v2/posts/${id}`)
        .catch((e) => console.log("Failed to retrieve article"))

    const formattedArticle = formatArticle(response?.data)

    return formattedArticle
}

const formatArticle = (article: any) => {
    if (!article) return null

    const date = new Date(article.date)
    const formattedArticle = {
        id: article.id,
        title: article.title.rendered,
        excerpt: article.excerpt.rendered,
        body: article.content.rendered,
        date
    }


    return formattedArticle
}

export {
    getArticles,
    getArticle
}