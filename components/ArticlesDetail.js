import { useRouter } from "next/router"
import Link from 'next/link'
import { Fragment, useEffect, useState } from "react"


const articlesDetail = (props) => {
    const router = useRouter()
    const myPath = router.query.clanek


    const searchArticle = props.articles.find(x => x.path == myPath)
    const {id,autor,title,image,path,perex,text} = searchArticle


    const showNav = () => {
        let mobilaNav = document.querySelector('.js-mobile-nav')
        let pxOnTop = window.pageYOffset
        mobilaNav.style.top = -50 + pxOnTop+'px'
        mobilaNav.classList.add('active')
    }

    const closeNav = () => {
        let mobilaNav = document.querySelector('.js-mobile-nav')
        if(mobilaNav)
        {
            mobilaNav.classList.remove('active')
        }
        
    }

    const showScrollUp = () => {
        let btn = document.querySelector('.js-show-top-scroller')
        if(window.pageYOffset > 500)
        {
            if(typeof(btn) != 'undefined' && btn != null) btn.classList.remove('hidden')
                
        }   
        else{
            if(typeof(btn) != 'undefined' && btn != null) btn.classList.add('hidden')
                
        }   
    }

    const scrollUp = () => {
        window.scrollTo({top: 0})
    }


    const switchSideBtn = () => {
        const arrow = document.querySelector('.js-arrow-down')
        const text = document.querySelector('.js-all-articles-text')
        let provedJenJednou = false
        if(window.pageYOffset > 1 && provedJenJednou == false)
        {
            if(typeof(arrow) != 'undefined' && arrow != null)
            {
                arrow.classList.remove('hidden')
                text.classList.add('hidden')
            }
        }
        else{
            if(typeof(arrow) != 'undefined' && arrow != null)
            {
                arrow.classList.add('hidden')
                text.classList.remove('hidden')
            }
            
        }
    }

    const markMyArticle = (e) => {
        let article = e.currentTarget
        
        let marks = document.querySelectorAll('.js-mark-article')
    
        for(let i = 0; i < marks.length; i++)
        {
            marks[i].classList.remove('font-bold', 'underline')
        }

        article.classList.add('font-bold', 'underline')
    }


    useEffect(function(){
        let text_content = document.getElementById('text_content')
        text_content.innerHTML = text

        window.addEventListener("scroll", function(){
           switchSideBtn()
           closeNav()
           showScrollUp()
        },true)
    })

    

    return <Fragment>
        <div className="m-auto" style={{maxWidth: "128rem", boxShadow: "3px 1px 3px #cccccc26, inset 3px 6px 7px #fff"}}>
            <div className="relative">
                <div>
                    <img className="h-30 lg:h-40 object-cover" src={image} width="100%" />
                </div>
                <div className="container relative">
                    <div className="grid grid-cols-12 md:gap-4 py-3 md:py-5">
                        <div className="ol-span-1 md:col-span-3 md:text-right md:border-r " style={{height: "fit-content"}}>
                            <div className="hidden md:block">
                                <div>
                                    {
                                    props.articles.map((oneArticles) => {
                                            return(
                                                <Link href={oneArticles.path} key={oneArticles.title} onClick={markMyArticle} className="js-mark-article text-sm xl:text-base xl:h5 text-primary font-semibold mb-1 mr-2 inline-flex">{oneArticles.title}</Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="md:hidden bg-primary cursor-pointer fixed" onClick={showNav}>
                                <div>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d5d5d5" strokeWidth="2"
                                strokeLinecap="round" className="feather feather-chevron-right js-arrow-down hidden">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                    <div className="js-all-articles-text bg-primary text-sm font-semibold px-1 inline-flex text-white">Všechny články</div>
                                </div>
                            </div>
                            <div className="py-3 px-2 absolute bg-white js-mobile-nav shadow-lg block md:hidden">
                                <div className="text-end">
                                    <div className="bg-primary text-xs font-semibold m-y-0.5 px-0.5 inline-flex text-white mb-1 md:md-0 cursor-pointer" onClick={closeNav}>X</div>
                                </div>
                                {
                                    props.articles.map((oneArticles) => {
                                        return(
                                            <Link href={oneArticles.path} key={oneArticles.id} onClick={closeNav} className="text-sm xl:text-base xl:h5 text-primary font-semibold mb-1 mr-2 table" >{oneArticles.title}</Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-span-11 md:col-span-9">
                            <div className="flex flex-col md:flex-row items-end justify-between mb-2">
                                <Link href={"/"} className="bg-primary text-sm font-semibold m-y-0.5 px-1 inline-flex text-white mb-1 md:md-0">Úvod</Link>
                                <div className="h4 sm:h3 text-primary md:text-right md:ml-5 md:mb-5">{title}</div>
                            </div>
                            <div id="text_content" className="leading-relaxed md:leading-loose text-justify text-sm md:text-base"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-primary js-show-top-scroller cursor-pointer inline-block fixed bottom-3 right-2 md:right-5 p-0.5 hidden z-50" onClick={scrollUp}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fff" class="bi bi-arrow-up" viewBox="0 0 16 16">
                <   path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                </svg>
            </div>
        </div>
    </Fragment>
    
}



export default articlesDetail