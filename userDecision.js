function userCard() {
    let keyPressed;
    document.addEventListener("keyup", function (event) {
        if (event.keyCode === 37) {


            user.push("LA");
        }
        if (event.keyCode === 38) {


            user.push("UA");

        }
        if (event.keyCode === 39) {


            user.push("RA");
        }
        if (event.keyCode === 40) {


            user.push("DA");
        }

        return keyPressed;
    });


}
