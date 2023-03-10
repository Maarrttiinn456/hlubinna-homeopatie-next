


const FaqTabs = (props) => {
    return(
       <div>
            <div onClick={props.openTab} class="border-b border-primary pb-0.5 cursor-pointer">
                <div class="flex justify-between items-center sm:px-1">
                    <div class="text-1xl font-semibold ff-open-sans sm:h4 text-primary select-none">Nejčastější dotazy</div>
                    <div class="ml-3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" stroke="#113E59" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round" className="feather feather-plus">
                            <line class="plus" x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="mt-4 text-lg">
                <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {
                        props.faq.map((oneFaq) => {
                            const {title,faq} = oneFaq
                            return(
                            <div key={title} class="p-2 shadow-lg">
                                <div class="text-xl text-primary font-semibold">{title}</div>
                                <div class="text-sm mt-1">{faq}</div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
       </div>
    )
}

export default FaqTabs  