import { useEffect, useState } from "react";
import Articles from "../components/Articles/Articles";
import { getPages } from "../services/pages";

export default function Home() {
  const [pages,setPages]=useState<[]>()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPages();
      console.log(data);
      
      setPages(data);
    };
    fetchData();
  }, []);

  return (
    <div className="body">
      <Articles />
      {/*
        pages?.map((page)=><div>{page.image}</div>)
  */}
    </div>
  );
}
