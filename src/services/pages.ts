import axios from "axios";
const inner_url = async (outer_url: string) => {
    const { data }: any = await axios.get(outer_url)
        .catch((e) => console.error("Failed to retrieve page image"))

    return data.guid.rendered;
}


const getPages = async (limit?: number) => {
    const { data }: any =
        await axios.get(`http://localhost:8080/wp-json/wp/v2/pages/${limit ? `?per_page=${limit}` : ""}`)
            .catch((e) => console.error("Failed to retrieve pages"))

    const formattedPages = await Promise.all(data?.map(async (a: any) => {
        const date = new Date(a.date)

        let image = a._links["wp:featuredmedia"] ?
            await inner_url(a._links["wp:featuredmedia"][0].href)
            : ""

        console.log(image);


        const page = {
            title: a.title.rendered,
            image,
            date
        }

        return page;
    }))

    return formattedPages
}

export {
    getPages
}