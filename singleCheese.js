let url = new URLSearchParams(window.location.search);

if (url.has("id")) {
    fetch("https://elisabeths-ostebiks.herokuapp.com/api/v1/cheeses/" + url.get("id"))
        .then(res => res.json())
        .then(function(data) {
            document.querySelector(".cheeseName").innerText = data.name;
            document.querySelector(".brand span").innerText = data.brand;
            document.querySelector(".price span").innerText = data.price['$numberDecimal'];
            document.querySelector(".strength span").innerText = data.strength;
            document.querySelector(".weight span").innerText = data.weight;
        });
};