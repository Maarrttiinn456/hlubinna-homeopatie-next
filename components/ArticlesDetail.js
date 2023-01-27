import { useRouter } from "next/router"
import Link from 'next/link'
import { Fragment, useEffect, useState } from "react"


const articlesDetail = (props) => {
    const router = useRouter()
    const myPath = router.query.clanek


    const searchArticle = props.articles.find(x => x.path == myPath)
    const {id,autor,title,image,path,perex,text} = searchArticle

    useEffect(function(){
        let text_content = document.getElementById('text_content')
        console.log(text_content);
        text_content.innerHTML += text
    })

    return <Fragment>
        <div className="m-auto" style={{maxWidth: "128rem", boxShadow: "3px 1px 3px #cccccc26, inset 3px 6px 7px #fff"}}>
            <div className="relative">
                <div>
                    <img className="h-30 lg:h-40 object-cover" src={image} width="100%" />
                </div>
                <div className="container relative">
                    <div className="grid grid-cols-12 md:gap-4 py-3 md:py-5">
                        <div className="mt-7 col-span-2 md:col-span-3 md:text-right md:border-r " style={{height: "fit-content"}}>
                            <div className="hidden md:block">
                                {
                                    props.articles.map((oneArticles) => {
                                        return(
                                            <Link href={oneArticles.path} key={oneArticles.id} className="text-sm xl:text-base xl:h5 text-primary font-semibold mb-1 mr-2 inline-flex">{oneArticles.title}</Link>
                                        )
                                    })
                                }
                            </div>
                            <div className="md:hidden" style={{writingMode: "vertical-rl"}}>
                                Všechny články
                            </div>
                        </div>
                        <div className="col-span-10 md:col-span-9">
                            <div className="flex flex-col md:flex-row items-end justify-between mb-2">
                                <Link href={"/"} className="bg-primary text-sm font-semibold m-y-0.5 px-1 inline-flex text-white mb-1 md:md-0">Úvod</Link>
                                <div className="h4 sm:h3 text-primary md:text-right md:ml-5">{title}</div>
                            </div>
                            <div id="text_content" className="leading-relaxed md:leading-loose text-justify"></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
    
}



export default articlesDetail