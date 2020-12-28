let url = new URLSearchParams(window.location.search);

let offset = url.get("offset") ? url.get("offset") : 0;
let previousOffset, nextOffset;

let nextLink = document.querySelector(".nextLink");
let previousLink = document.querySelector(".previousLink");

fetch(`https://elisabeths-ostebiks.herokuapp.com/api/v1/cheeses?offset=${offset}`)
    .then(res => res.json())
    .then(function(data){
        console.log(data);

        let maxOffset = data.count - (data.count % 5);

        nextOffset = offset >= maxOffset ? maxOffset : parseInt(offset) + 5;
        previousOffset = offset <= 0 ? 0 : parseInt(offset) - 5;
        
        nextLink.href = `?offset=${nextOffset}`;
        previousLink.href = `?offset=${previousOffset}`;

        if(data.next == null){
            nextLink.remove();
        }

        if(data.previous == null){
            previousLink.remove();
        }

        let cheese = document.querySelector("#cheese");
        let cheeseList = document.querySelector(".cheeseList");

        data.results.forEach(function(result) {
            let clone = cheese.content.cloneNode(true);
            clone.querySelector(".cheese").innerText = result.name;
            //clone.querySelector(".cheese").href = `./singleCheese.html?id=${id}`;

            cheeseList.appendChild(clone);
        })
    });