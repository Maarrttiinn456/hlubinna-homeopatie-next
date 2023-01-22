import React, { useCallback } from 'react'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'


const SliderItem = (props) => {

    const options = { loop: true }
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return(
        <div className="articles-slider overflow-hidden" ref={emblaRef}>
            <div className='slider-container flex'>
                    {
                        props.articles.map((oneArticle) => {
                            const  {id,autor,title,image,path,perex,text} = oneArticle
                            return(
                                <div key={id} className="bg-center-cover articles-slider-item h-50 md:h-60 slider-item" style={{backgroundImage: `url(${image})`}}>
                                    <div className="container min-h-full flex flex-col justify-between px-5 sm:px-10 md:px-15 py-5 md:py-10">
                                        <div>
                                            <Link href={path} className="text-white h4 md:h3 cursor-pointer select-none"> {title}
                                            </Link>
                                            <div className="text-white mt-3 text-sm  md:text-base select-none">
                                                {perex}
                                            </div>
                                        </div>
                                        <div className="flex justify-end md:justify-between items-center text-white w-full">
                                            <div className="h2 text-shadow hidden md:block">
                                                {id}
                                            </div>
                                            <Link data-id="" href={path} className="js-lighter-before text text-white font-bold js-set-storage cursor-pointer z-50 hover:underline transition duration-500 select-none"> 
                                                Číst více...
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>
            <div className="articles-slider-controls absolute w-full">
                <div className="container w-full">
                    <div className="flex justify-between w-100">
                        <div className="controls-prev cursor-pointer" onClick={scrollPrev}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#d5d5d5"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </div>
                        <div className="controls-next cursor-pointer" onClick={scrollNext}> 
                            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#d5d5d5" strokeWidth="2"
                                strokeLinecap="round" strokeLinecap="round" className="feather feather-chevron-right">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderItem   