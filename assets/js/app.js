const modalclose = document.getElementById('closebtn');
const closePopup = document.querySelector('.popUp');
const searchbox = document.getElementById('searchbox');
const searchButton = document.getElementById('searchButton');
const image = document.querySelector('.Gif');
const imageArea = document.querySelector('.images');



const getApi = async() => {
    let getInputValue = searchbox.value;
    let = url = `https://api.giphy.com/v1/stickers/search?api_key=AAk5T6L7PecR33xQ0qEvVpfrpL6ZUlqq&q=${getInputValue}&limit=25&offset=0&rating=g&lang=en`;

    let data = await fetch(url);
    let Response = await data.json()

    console.log(Response.data)

    for (var i = 0; i < Response.data.length; i++) {
        image.setAttribute('src', Response.data[i].images.original.url)
    }
}


const btnclicked = searchButton.onclick = () => {
    openModal()
    getApi()
}

const openModal = () => {
    if (searchbox.value == "") {
        closePopup.style.display = 'block'
    }
}

const closeModal = () => {
    closePopup.style.display = 'none'
}

modalclose.onclick = () => closeModal()