let nama = document.getElementById("nama")
        let email = document.getElementById("email")
        let jam = document.getElementById("jam")
        let tujuan = document.getElementById("tujuan")
        let tiket = document.getElementById("tiket")

        let span = document.getElementsByTagName("span")
        let hasil = document.getElementById("hasil")

        function validasi() {
            if (nama.value == "" || nama.value.length >= 30) {
                span[0].style.visibility = "visible"
            } else {
                hasil.innerHTML += nama.value + "<br>"
            }

            if (email.value == "") {
                span[1].style.visibility = "visible"
            } else {
                hasil.innerHTML += email.value + "<br>"
            }

            if (jam.value == "") {
                span[2].style.visibility = "visible"
            } else {
                hasil.innerHTML += jam.value + "<br>"
            }
            if (tujuan.value == "") {
                span[3].style.visibility = "visible"
            } else {
                hasil.innerHTML += tujuan.value + "<br>"
            }
            if (tiket.value == "") {
                span[4].style.visibility = "visible"
            } else {
                hasil.innerHTML += tiket.value + "<br>"
            }
        }