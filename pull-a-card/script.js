((appenv) => {

    appenv.getAPI = function (event) {

        let fullUri = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";
        fetch(fullUri)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                let imageURL = data.cards[0].image;
                makeCard(imageURL);
            })
            .catch(err => console.log(err))
    }

    const makeCard = imageURL => {

        let img = document.createElement('img');
        img.setAttribute('src', imageURL);

        let div = document.querySelector('div');
        div.innerHTML = '';
        div.appendChild(img);
    }



})(window.appenv = window.appenv || {});

document.querySelector('button').addEventListener('click', appenv.getAPI)