
const Footer = () => {
    return(
        <section className="bg-primary py-5 relative" id="kontakty">
            <div className="container">
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="basis-3/12">
                        <div>
                            <div className="text-white mb-1 lg:mb-2 mt-0 lg:mt-3">
                                Objednat se
                            </div>
                            <a href="tel:774180004" className="inline-flex flex-row items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
                                    stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                                    className="feather feather-phone">
                                    <path
                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                                    </path>
                                </svg>
                                <span className="ml-1 text-sm text-white">774 180 004</span>
                            </a>
                        </div>
                        <div className="mt-1 lg:mt-2">
                            <a href="mailto:schuster.js@sezenam.cz" className="inline-flex flex-row items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
                                    stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                                    className="feather feather-mail">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                                <span className="ml-1 text-sm text-white">schuster.j@seznam.cz</span>
                            </a>
                        </div>
                    </div>
                    <div className="basis-3/12">
                        <div className="text-white mb-1 lg:mb-2 mt-3">
                            Adresa
                        </div>
                        <div>
                            <a href="https://www.google.com/maps/place/U+Vojensk%C3%A9+nemocnice+10,+162+00+Praha+6/@50.0902771,14.3616868,17z/data=!3m1!4b1!4m5!3m4!1s0x470b956e66f99125:0x9593c5c7719d464e!8m2!3d50.0902737!4d14.3642617"
                                target="_blank">
                                <div className="inline-flex flex-row items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
                                        stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                                        className="feather feather-home">
                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                    </svg>
                                    <span className="ml-1 text-sm text-white">U Vojenské nemocnice 10, Praha 6</span>
                                </div>
                            </a>
                        
                        </div>
                    </div>
                    <div className="basis-5/12 mt-3 lg:mt-0">
                        <div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5119.654995538021!2d14.360495876247686!3d50.08951649101292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b956e66f99125%3A0x9593c5c7719d464e!2sU%20Vojensk%C3%A9%20nemocnice%2010%2C%20162%2000%20Praha%206!5e0!3m2!1scs!2scz!4v1670360680259!5m2!1scs!2scz"
                                width="100%" height="200" allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer