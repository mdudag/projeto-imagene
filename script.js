document.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        document.querySelector('.quadroPesq2').style.display = "block"
        document.querySelector('#quadroPesq').style.display = "none"
        document.querySelector('#quadroDestaques').style.display = "none"
        document.querySelector('#quadroImg').style.display = "none"

        function fazGet(url) {
            let request = new XMLHttpRequest()
            request.open("GET", url, false)
            request.send()
            return request.responseText
        }

        function main() {
            let API_KEY = '28956871-8ea1618e9953c308ba075e288'
            let URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses')
            let data = fazGet(URL)
            let result = JSON.parse(data)
            
            result.hits.forEach(element => {
                urlImg = element.webformatURL
            });
        }

        main()
    }
})