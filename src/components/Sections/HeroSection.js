export const HeroSection = ({heroLayout}) => {

    return (
        <section className={`hero-section_${heroLayout} py-0`}>
            <div className='masthead py-0'>
                <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                    <div className="d-flex justify-content-center">
                        <div className="text-center">
                            <h1 className="mx-auto my-0 text-uppercase">Professional Developer,</h1>
                            <h2 className="text-white-50 mx-auto mt-2 mb-5">Let's Get To Work!</h2>
                            <a className="btn btn-primary" href="#about">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
