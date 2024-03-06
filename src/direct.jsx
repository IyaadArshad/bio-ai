import Cookies from "js-cookie";

function Direct () {
    var description = JSON.parse(Cookies.get("description"));

    if (description.length === 0) {
        window.location.href = "/generate";
    }
    else {
        window.location.href = "/bio";
    }
}

export default Direct;