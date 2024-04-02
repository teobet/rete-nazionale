import { useLocation } from "react-router"
import { Link } from "react-router-dom"
import "./breadcrumb.scss"

const Breadcrumbs = () => {
    let location = useLocation()
    let pathArray = location.pathname.split('/').slice(1)

    return <div className="breadcrumbs">
        <Link to={"/"} className="home">󰋜</Link>
        {
            pathArray.map((path: string) => {
                const link = pathArray.slice(0, pathArray.findIndex((string) => string === path) + 1).join('/')
                
                return <>
                    <div className="divisor">/</div>
                    <Link to={link} className="crumb" >{path.replace('-', ' ')}</Link>
                </>
            })
        }
    </div>
}

export default Breadcrumbs;