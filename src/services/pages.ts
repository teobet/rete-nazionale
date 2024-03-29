import axios from "axios";
const inner_url = async (outer_url:string) =>{
    const {data}:any =
        await axios.get(outer_url)
        .catch((e) => console.error("Failed to retrieve page image"))
    
    console.log(data.guid.rendered);
    
    return data.guid.rendered;
}


const getPages = async (limit?:number) => {
    const {data}: any =
        await axios.get(`http://localhost:8080/wp-json/wp/v2/pages/${limit?`?per_page=${limit}`:""}`)
            .catch((e) => console.error("Failed to retrieve pages"))

    const formattedPages = data?.map((a: any) => {
        
        const date = new Date(a.date)

        const page = {
            title: a.title.rendered,
            image: a._links["wp:featuredmedia"]?inner_url(a._links["wp:featuredmedia"][0].href):"",
            date
        }

        return page;
    })
    console.log(formattedPages);
    
    return formattedPages
}

export {
    getPages
}