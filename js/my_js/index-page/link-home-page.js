//"use script";
console.log(1);

fetch("./html_pages/header_nav.htm")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector('header').innerHTML = data;
    });

fetch("./html_pages/home_page.htm")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("main").innerHTML = data;
    });

fetch("./html_pages/footer.htm")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("footer").innerHTML = data;
    });