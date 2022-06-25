var c = 1;
        function send1() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    if (c == 0) {
                        document.getElementById("button1").innerHTML = "Turn ON";
                        document.getElementById("state1").innerHTML = "Led is off";
                        document.getElementById("button1").style.backgroundColor = "red";
                        c = 1;
                    }
                    else {
                        document.getElementById("button1").innerHTML = "Turn Off";
                        document.getElementById("state1").innerHTML = "Led is on";
                        document.getElementById("button1").style.backgroundColor = "green";
                        c = 0;
                    }
                }
            };
            xhttp.open("GET", "https://blynk.cloud/external/api/update?token=PiICxN5NNt2JWKLel25IWy6IFTPilbYU&v0=" + c, true);
            xhttp.send();

        }

        setInterval(function () {
            getData();
        }, 1000);
        function getData() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    parsed = this.response;
                    console.log("New Line")
                    console.log(parsed)
                    if (parsed == 0) {
                        document.getElementById("button1").innerHTML = "Turn ON";
                        document.getElementById("state1").innerHTML = "Led is off";
                        document.getElementById("button1").style.backgroundColor = "red";
                    }
                    else{
                        document.getElementById("button1").innerHTML = "Turn Off";
                        document.getElementById("state1").innerHTML = "Led is on";
                        document.getElementById("button1").style.backgroundColor = "green";
                    }
                }
            };
            xhttp.open("GET", "https://blynk.cloud/external/api/get?token=PiICxN5NNt2JWKLel25IWy6IFTPilbYU&v0", true);
            xhttp.send();
        }
        var x = 1;
        function send2() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    if (x == 0) {
                        x = 1;
                    }
                    else if (x == 1) {
                        x = 0;
                    }
                }
            };
            xhttp.open("GET", "https://blynk.cloud/external/api/update?token=PiICxN5NNt2JWKLel25IWy6IFTPilbYU&v1=" + x, true);
            xhttp.send();

        }

        setInterval(function () {
            getData2();
        }, 1000);
        function getData2() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    parsed = this.response;
                    console.log(parsed)
                    if (parsed == 0) {
                        document.getElementById("button2").innerHTML = "Turn ON";
                        document.getElementById("state2").innerHTML = "Led is off";
                        document.getElementById("button2").style.backgroundColor = "red";
                    }
                    else if (parsed == 1) {
                        document.getElementById("button2").innerHTML = "Turn Off";
                        document.getElementById("state2").innerHTML = "Led is on";
                        document.getElementById("button2").style.backgroundColor = "green";
                    }
                }
            };
            xhttp.open("GET", "https://blynk.cloud/external/api/get?token=PiICxN5NNt2JWKLel25IWy6IFTPilbYU&v1", true);
            xhttp.send();
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
                    else{
                        document.getElementById("flame_val").innerHTML = "No Fire Detected";
                        document.getElementById("flame_val").style.color = "black";
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
                    document.getElementById("gas_val").innerHTML = parsed;
                    console.log(parsed)
                    if (parsed > 665) {
                        alert("Danger: Received " + parsed);
                        document.getElementById("gas_val").style.color = "red";
                    }
                    else{
                        document.getElementById("gas_val").style.color = "black";
                    }
                }
            };
            xhttp.open("GET", "https://blynk.cloud/external/api/get?token=PiICxN5NNt2JWKLel25IWy6IFTPilbYU&v2", true);
            xhttp.send();
        }
        setInterval(function () {
            getpir();
        }, 1000);
        function getpir() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText)
                    if (this.responseText == 1) {
                        alert("Motion Detected");
                        document.getElementById("pir_val").innerHTML = "Motion Detected";
                        document.getElementById("pir_val").style.color = "red";
                    }
                    else{
                        document.getElementById("pir_val").innerHTML = "No Motion Detected";
                        document.getElementById("pir_val").style.color = "black";
                    }
                }
            };
            xhttp.open("GET", "https://blynk.cloud/external/api/get?token=PiICxN5NNt2JWKLel25IWy6IFTPilbYU&v3", true);
            xhttp.send();
        }