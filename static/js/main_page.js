fetch("/templates/nav_bar.html").then(response => {
    return response.text()
})
.then(data => {
    document.querySelector("header").innerHTML = data;
})

fetch("/templates/footer.html").then(response => {
    return response.text()
})
.then(data => {
    document.querySelector("footer").innerHTML = data;
})