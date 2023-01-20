import Navigation from './Navigation'
import Tabs from './Tabs'
import SliderItem from './SliderItem.js'

//data 
import tabs from '../data/tabs-data'
import articles from '../data/articles-data'

const HomePage = (props) => {
    return(
        <div>
            <Navigation/> 
            <section className="my-4 sm:my-5">
                <div className="container">
                    <h1 className="h2 sm:h1 text-primary">Hlubinná homeopatie</h1>
                    <div className="flex flex-col items-end justify-between w-100 lg:flex-row lg:items-baseline mt-1">
                        <div className="text-xl sm:text-xl font-bold text-primary">klasická homeopatie v novém podání</div>
                        <div className="bg-primary text-sm font-semibold p-y-0.5 px-1 text-white inline-flex mt-1 lg:mt-0">MUDr. Josef Schuster</div>
                    </div>
                </div>
            </section>
            <section className="h-30 md:h-50 bg-cover bg-bottom" style={{backgroundImage: `url(/img/hero_section.jpg)`}}></section>

            <section className="my-5 sm:mt-10">
                <div className="container">
                    <Tabs myTabsData={tabs}/>
                </div>
            </section>


            <section>
                <div className="relative">
                    <div className="">
                        <SliderItem articles={articles}/>
                    </div>
                    <div className="js-articles-slider-controls absolute w-full">
                        <div className="container w-full">
                            <div className="flex justify-between w-100">
                                <div className="js-controls-prev cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#d5d5d5"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left">
                                        <polyline points="15 18 9 12 15 6"></polyline>
                                    </svg>
                                </div>
                                <div className="js-controls-next cursor-pointer"> 
                                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#d5d5d5" strokeWidth="2"
                                        strokeLinecap="round" strokeLinecap="round" className="feather feather-chevron-right">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="js-all-articles hidden">
                        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 js-all-articles-list mb-5">
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default HomePage