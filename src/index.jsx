import './bootstrap.min.css';

function Header() {
    return (
        <header className="d-flex masthead" style={{ backgroundBlendMode: 'darken', backgroundImage: "url('bg-masthead.jpg')" }}>
            <div className="container my-auto text-center">
                <h1 className="mb-1">bio.ai</h1>
                <h3 className="mb-5"><em>Let the world know who you are</em></h3>
                <a className="btn btn-primary btn-xl js-scroll-trigger" role="button" href="/quiz">Create my bio</a>
                <div className="overlay"></div>
            </div>
        </header>
    );
}

function About() {
    return (
        <section id="about" className="content-section bg-light">
            <div className="container text-center">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h2>bio.ai allows you to create a portfolio in minutes!</h2>
                        <p className="lead mb-5"><span>Using advanced GPT-4-Turbo Technology, you can generate a full page with a short form!</span></p>
                        <a className="btn btn-dark btn-xl js-scroll-trigger" role="button" href="/quiz">Create My Bio</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CTAB() {
    return (
        <section className="callout" style={{ background: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), url('bg-callout.jpg')", backgroundPosition: "center center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="container text-center">
                <h2 className="mx-auto mb-5"><span>Welcome to </span><em>your</em><span><br />next bio!</span></h2>
                <a className="btn btn-primary btn-xl" role="button" href="/quiz">Create my bio</a>
            </div>
        </section>
    );
}

function Footer() {
    <footer class="footer text-center">
    <div class="container">
        <p class="text-muted mb-0 small">Copyright © Bio AI 2024</p>
    </div><a class="js-scroll-trigger scroll-to-top rounded" href="/quiz"><i class="fa fa-angle-up"></i></a>
</footer>
}

function Index () {
    return (
        <>
        <Header />
        <About />
        <CTAB />
        <Footer />
        </>
    )
}

export default Index;