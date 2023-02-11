
import Tabs from './Tabs'
import Slider from './Slider.js'
import Navigation from './Navigation'

const HomePage = (props) => {
    return(
        <div>
            <Navigation/> 
            <section className="mb-4 sm:mb-5 mt-10 sm:mt-11">
                <div className="container">
                    <h1 className="h2 sm:h1 text-primary">Hlubinná homeopatie</h1>
                    <div className="flex flex-col items-end justify-between w-100 lg:flex-row lg:items-baseline mt-1">
                        <div className="text-xl sm:text-xl font-bold text-primary">klasická homeopatie v novém podání</div>
                        <div className="bg-primary text-sm font-semibold p-y-0.5 px-1 text-white inline-flex mt-1 lg:mt-0">MUDr. Josef Schuster</div>
                    </div>
                </div>
            </section>
            <section className="h-30 md:h-50 bg-cover bg-bottom" style={{backgroundImage: `url(/img/hero_section.jpg)`}}></section>

            <section className="my-5 sm:my-10" id='o-mne'>
                <div className="container">
                    <Tabs myTabsData={props.myTabsData} faq={props.faq}/>
                </div>
            </section>


            <section>
                <div className='relative'>
                    <Slider articles={props.articles}/>
                </div>
                <div className="container">
                    <div className="js-all-articles hidden">
                        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 js-all-articles-list mb-5">
                            
                        </div>
                    </div>
                </div>
            </section>
            <div className='bg-primary'>
                <div className='w-4/5 m-auto'></div>
            </div>
        </div>
    )
}


export default HomePage