

const Navigation = () => {
    return(
        <section className="bg-primary">
            <div className="container">
                <nav>
                    <div className="flex justify-end items-center text-white h-6">
                        <div data-slide="o-mne" className="js-nav-scroll mr-2 md:mr-3 text-sm md:text-base cursor-pointer underline-offset-4 hover:underline">O mně</div>
                        <div data-slide="clanky" className="js-nav-scroll mr-2 md:mr-3 text-sm md:text-base cursor-pointer underline-offset-4 hover:underline">Články</div>
                        <div data-slide="kontakty" className="js-nav-scroll text-sm md:text-base cursor-pointer underline-offset-4 hover:underline">Kontakty</div>
                    </div>
                </nav> 
            </div> 
        </section>
    )
}

export default Navigation