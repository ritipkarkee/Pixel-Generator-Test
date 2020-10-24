let rnd = Math.floor(Math.random() * 10 + 1);

function generator() {
    let loop = 0;
    let row = 0;
    let divContainer = document.getElementById("divContainer");

    while (row < 32) {
        let span = document.createElement("SPAN");
        span.classList = "pixel";
        span.style.background = xfactor(loop, row);
        divContainer.appendChild(span);
        loop++;
        if (loop >= 40) {
            loop = 0;
            row++;
        }
    }
}

function xfactor(loop, row) {
    let factor;
    let rndRange = 25;
    let rndDefault = 230;

    factor = (loop ^ row) * Math.sqrt(10 * rnd);

    if (factor > 25 && factor < 50 || factor > 70 && factor < 90) {
        let rndRed = Math.floor(Math.random() * rndRange + rndDefault);
        let rndGreen = Math.floor(Math.random() * rndRange + rndDefault);
        let rndBlue = Math.floor(Math.random() * rndRange + rndDefault);
        return "rgb(" + rndRed + "," + rndGreen + "," + rndBlue + ")";
    }

}