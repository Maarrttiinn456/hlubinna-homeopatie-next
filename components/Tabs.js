import FaqTabs from './FaqTabs'

const openTab = (e) => {
    const currentTab = e.currentTarget.nextSibling
    !currentTab.classList.contains('hidden') ? currentTab.classList.add('hidden') : currentTab.classList.remove('hidden')
}

const Tabs = (props) => {
    return(
        <div>
            {
                props.myTabsData.map((oneTab) => {
                    const {id,heading, content} = oneTab
                    return(
                        
                        <div className="mb-5" key={id}>
                            <div>
                                <div onClick={openTab} className="border-b border-primary pb-0.5 cursor-pointer">
                                    <div className="flex justify-between items-center sm:px-1">
                                        <div className="text-1xl font-semibold ff-open-sans sm:h4  text-primary">{heading}</div>
                                        <div className="ml-3">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" stroke="#113E59" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                                                <line className="plus hidden" x1="12" y1="5" x2="12" y2="19" />
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-md md:text-lg mt-2 sm:mt-4 w-10/11 sm:w-3/4 m-auto px-1 sm:px-0">
                                    {content}
                                </div>
                            </div>
                        </div>
                    
                    )
                })
            }
            <FaqTabs faq={props.faq} openTab={openTab}/>
        </div>
    )
}

export default Tabs