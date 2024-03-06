import Cookies from 'js-cookie';

function Nav() {
    return (
        <ul className="nav nav-tabs" style={{ marginBottom: '32px', borderWidth: '0.1px' }}>
            <li className="nav-item"><a className="nav-link active" href="#">bio.ai</a></li>
        </ul>
    );
}

function Body() {
    const email = Cookies.get('email');
    const name = Cookies.get('name');
    const description = Cookies.get('description');
    const pfp = Cookies.get('pfp');

    return (
        <>
        <style>
            {`
            body {
                background: url("portfolio-2.jpg") no-repeat;
background-size: cover;
            }
            `}
        </style>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="text-center d-xl-flex justify-content-xl-center align-items-xl-center" style={{ color: 'rgb(20,21,23)', background: 'rgba(255,255,255,0.55)', padding: '12px' }}>
                        <div style={{ padding: '16px', margin: '16px' }}>
                            <img id="pfp" src={pfp} style={{ borderRadius: '12px', margin: '4px', padding: '8px', height: '128px', width: 'auto' }} />
                            <h1 id="name" style={{ margin: '4px', padding: '8px' }}>{name}</h1>
                            <p id="email">{email}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="text-center d-xl-flex justify-content-xl-center align-items-xl-center" style={{ color: 'rgb(20,21,23)', background: 'rgba(255,255,255,0.55)', padding: '12px' }}>
                        <div style={{ padding: '16px', margin: '16px' }}>
                            <h1 style={{ margin: '4px', padding: '8px' }}>About Me</h1>
                            <p id="description" style={{ fontSize: 'xx-large' }}>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

function Bio () {
    return (
        <>
            <Nav />
            <Body />
        </>
    );
}

export default Bio;