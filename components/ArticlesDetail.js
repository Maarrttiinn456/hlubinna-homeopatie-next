import { useRouter } from "next/router"



const articlesDetail = (props) => {
    const router = useRouter()
    const myPath = router.query.clanek

    const searchArticle = props.articles.find(x => x.path == myPath)
    const {id,autor,title,image,path,perex,text} = searchArticle

    return (
        <div className="my-0 xl:my-5" style={{maxWidth: "1200px", margin: "auto", boxShadow: "1px 5px 10px #cccccc7a"}}>
            <div>
                <div>
                    <img className="h-30 lg:h-50" src={image} width="100%" />
                </div>
                <div className="container">
                    <div className="p-3 md:p-5">
                        <div className="h4 sm:h3 mb-2 text-primary">{title}</div>
                        <div>{text}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default articlesDetail