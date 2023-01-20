

const SliderItem = (props) => {
    return(
        <div className="my-slider">
            {
                props.articles.map((oneArticle) => {
                    const  {autor,title,image,path,perex,text} = oneArticle
                    return(
                        <div key={title}>
                            <div className="bg-center-cover articles-slider-item h-50 md:h-60" style={{backgroundImage: `url(${image})`}}>
                                <div className="container min-h-full flex flex-col justify-between px-5 sm:px-10 md:px-15 py-5 md:py-10">
                                    <div>
                                        <div data-id="" className="text-white h4 md:h3 cursor-pointer select-none"> {title}
                                        </div>
                                        <div className="text-white mt-3 text-sm  md:text-base select-none">
                                            {perex}
                                        </div>
                                    </div>
                                    <div className="flex justify-end md:justify-between items-center text-white w-full">
                                        <div className="h2 text-shadow hidden md:block">
                                            1
                                        </div>
                                        <a data-id="" href="" className="js-lighter-before text text-white font-bold js-set-storage cursor-pointer z-50 hover:underline transition duration-500 select-none"> 
                                            Číst více...
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    )
                })
            }
        </div>
    )
}

export default SliderItem