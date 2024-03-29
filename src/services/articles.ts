import axios from "axios";

const getArticles = async (limit?: number) => {
    const response: any =
        await axios.get(`http://localhost:8080/wp-json/wp/v2/posts/${limit ? `?per_page=${limit}` : ""}`)
            .catch((e) => console.error("Failed to retrieve articles"))

    const data = response?.data

    const formattedArticles = data?.map((a: any) => {
        const date = new Date(a.date)
        const article = {
            title: a.title.rendered,
            excerpt: a.excerpt.rendered,
            body: a.content.rendered,
            date
        }

        return article;
    })

    return formattedArticles
}

export {
    getArticles
}