import Link from 'next/link'



const Navigation = () => {
    return(
        <section className="bg-primary fixed top-0 w-full z-50	">
            <div className="container">
                <nav>
                    <div className="flex justify-end items-center text-white h-6">
                        <div onClick={(e) => {window.scrollTo({top: 500})}} className="js-nav-scroll mr-2 md:mr-3 text-sm md:text-base cursor-pointer underline-offset-4 hover:underline">O mně</div>
                        <Link href={"/co-je-to-hlubinna-homeopatie"} className="js-nav-scroll mr-2 md:mr-3 text-sm md:text-base cursor-pointer underline-offset-4 hover:underline">Články</Link>
                        <div onClick={(e) => {window.scrollTo(0, document.body.scrollHeight)}} className="js-nav-scroll text-sm md:text-base cursor-pointer underline-offset-4 hover:underline">Kontakty</div>
                    </div>
                </nav> 
            </div> 
        </section>
    )
}

export default Navigation