let doc_nilai = document.getElementById("value")
        let hasil = document.getElementById("hasil")
        let kurs = 9915
        let nilai = 0

        function changeValas() {
            let valas = document.getElementById("valas").value
            if (valas == "usd") {
                kurs = 9915
            } else if (valas == "sgd") {
                kurs = 13478
            } else if (valas == "myr") {
                kurs = 874
            } else if (valas == "jpy") {
                kurs = 120
            } else if (valas == "eur") {
                kurs = 15888
            } else if (valas == "sar") {
                kurs = 3592
            }
            convert()
        }
        function convert() {
            nilai = parseInt(doc_nilai.value)
            let rupiah = new Intl.NumberFormat("ID")
            hasil.innerHTML = "Rp. " + rupiah.format(nilai * kurs)
        }
