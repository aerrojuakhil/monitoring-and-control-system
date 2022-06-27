window.onload = function () {
    getflame();
    getgas();
}
setInterval(function () {
    getflame();
}, 1000);
function getflame() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
            if (this.responseText == 1) {
                alert("Fire Detected")
                document.getElementById("flame_val").innerHTML = "Fire Detected";
                document.getElementById("flame_val").style.color = "red";
            }
            else {
                window.onload = function() {
                document.getElementById("flame_val").innerHTML = "No Fire Detected";
                document.getElementById("flame_val").style.color = "black";
                }
            }
        }
    };
    xhttp.open("GET", "https://blynk.cloud/external/api/get?token=PiICxN5NNt2JWKLel25IWy6IFTPilbYU&v4", true);
    xhttp.send();
}
setInterval(function () {
    getgas();
}, 1000);
function getgas() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            parsed = JSON.parse(this.response)
            window.onload = function () {
                document.getElementById("gas_val").innerHTML = parsed;
            }
            console.log(parsed)
            if (parsed > 665) {
                alert("Danger: Received " + parsed);
                document.getElementById("gas_val").style.color = "red";
            }
            else {
                window.onload = function () {
                    document.getElementById("gas_val").style.color = "black";
                }

            }
        }
    };
    xhttp.open("GET", "https://blynk.cloud/external/api/get?token=PiICxN5NNt2JWKLel25IWy6IFTPilbYU&v2", true);
    xhttp.send();
}
