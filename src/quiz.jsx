import './bootstrap.min.css';
import './Pills.css';
import Cookies from 'js-cookie';

function Quiz() {

    // Add the data to cookies

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const description = Array.from(document.querySelectorAll('input[name="value"]:checked')).map(input => input.value);
        Cookies.set("name", name);
        Cookies.set("email", email);
        Cookies.set("desc", JSON.stringify(description));
        window.location.href = "/generate";
    }

    // Name = 'name'
    // Email = 'email'
    // Description = ["Innovative", "Enthusiastic", "Capitalist", "Thoughtful"] and the rest of the options, only take what is selected.
    return (
        <>
            <style>
                {`
                body {
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background: url("portfolio-1.jpg") no-repeat!important;
                    background-size: cover!important;
                }
                `}
            </style>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-center d-xl-flex justify-content-xl-center align-items-xl-center">
                            <input
                                className="form-control"
                                type="text"
                                id="name"
                                placeholder="Name..."
                                style={{ background: "rgba(255,255,255,0.85)", margin: "8px" }}
                            />
                            <input
                                className="form-control"
                                type="email"
                                id="email"
                                style={{ background: "rgba(255,255,255,0.85)", margin: "8px" }}
                                placeholder="Email..."
                            />
                        </div>
                        <div className="col-md-4">
                            <div>
                                <label
                                    className="form-label form-label"
                                    style={{
                                        color: "rgb(0,0,0)",
                                        background: "rgba(173,181,189,0.85)",
                                        padding: "12px",
                                        borderRadius: "4px"
                                    }}
                                >
                                    What describes you?:
                                </label>
                                <div className="selectgroup selectgroup-pills">
                                    <label className="form-label selectgroup-item">
                                        <input
                                            className="selectgroup-input"
                                            type="checkbox"
                                            name="value"
                                            id="innovative"
                                            value="innovative"
                                        />
                                        <span className="selectgroup-button">Innovative 🎓</span>
                                    </label>
                                    <label className="form-label selectgroup-item">
                                        <input
                                            className="selectgroup-input"
                                            type="checkbox"
                                            id="enthusiastic"
                                            name="value"
                                            value="enthusiastic"
                                        />
                                        <span className="selectgroup-button">Enthusiastic 😄</span>
                                    </label>
                                    <label className="form-label selectgroup-item">
                                        <input
                                            className="selectgroup-input"
                                            type="checkbox"
                                            name="value"
                                            id="extrovert"
                                            value="extrovert"
                                        />
                                        <span className="selectgroup-button">Introvert 😊</span>
                                    </label>
                                    <label className="form-label selectgroup-item">
                                        <input
                                            className="selectgroup-input"
                                            type="checkbox"
                                            id="thoughtful"
                                            name="value"
                                            value="thoughtful"
                                        />
                                        <span className="selectgroup-button">Thoughtful 🤔</span>
                                    </label>
                                    <label className="form-label selectgroup-item">
                                        <input
                                            className="selectgroup-input"
                                            type="checkbox"
                                            name="value"
                                            id="happy"
                                            value="happy"
                                        />
                                        <span className="selectgroup-button">Happy 😊</span>
                                    </label>
                                    <label className="form-label selectgroup-item">
                                        <input
                                            className="selectgroup-input"
                                            type="checkbox"
                                            name="value"
                                            id="hard-working"
                                            value="hard-working"
                                        />
                                        <span className="selectgroup-button">Hard Working 💪</span>
                                    </label>
                                    <label className="form-label selectgroup-item">
                                        <input
                                            className="selectgroup-input"
                                            type="checkbox"
                                            name="value"
                                            id="extrovert"
                                            value="extrovert"
                                        />
                                        <span className="selectgroup-button">Extrovert 🗣️</span>
                                    </label>
                                    <label className="form-label selectgroup-item">
                                        <input
                                            className="selectgroup-input"
                                            type="checkbox"
                                            name="value"
                                            id="creative"
                                            value="creative"
                                        />
                                        <span className="selectgroup-button">Creative 🎨</span>
                                    </label>
                                    <label className="form-label selectgroup-item">
                                        <input
                                            className="selectgroup-input"
                                            type="checkbox"
                                            name="value"
                                            id="analytical"
                                            value="analytical"
                                        />
                                        <span className="selectgroup-button">Analytical 🧠</span>
                                    </label>
                                    <label className="form-label selectgroup-item">
                                        <input
                                            className="selectgroup-input"
                                            type="checkbox"
                                            name="value"
                                            id="adventurous"
                                            value="adventurous"
                                        />
                                        <span className="selectgroup-button">Adventurous 🌍</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center d-xl-flex justify-content-xl-center align-items-xl-center">
                            <button
                                className="btn btn-primary"
                                type="submit"
                                id="submit"
                                style={{ background: "rgba(28,127,158,0.65)" }}
                            >
                                Generate Bio{" "}
                                <svg
                                    className="bi bi-arrow-right"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Quiz;