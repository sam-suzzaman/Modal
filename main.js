// ==codes for modal=================================================

let allItems = document.querySelectorAll('.card')
// সম্পূর্ণ মডাল টি কে নেয়ার জন্য 
let modalFullScreen = document.querySelector('.modal-wrapper')
// যে ডিভ এর background হিসাবে ইমেজ কে শো করানো হবে
let modalItemDisplay = document.querySelector('.modal-item')

// collecting all images
let images = document.querySelectorAll('img')

// creating an array to store all images sourch link are avilabe in this container
let storeOfImages = []

// get a copy of all images and push it into the array
images.forEach(function (value) {
    storeOfImages.push(value.src)
})

let j = 0

// adding a eventListener to all items to open the modal on click on it
allItems.forEach(function (value) {
    value.addEventListener('click', function (e) {
        // storing the image link
        let imageLink = e.target.src

        // change the background image
        modalItemDisplay.style.backgroundImage = `url(${imageLink})`
        modalFullScreen.classList.add('show')

        // grab the index of the image that is clicked
        j = storeOfImages.indexOf(imageLink)
    })
})

// access left and right controller
let leftController = document.querySelector('.prev')
let rightController = document.querySelector('.next')

leftController.addEventListener('click', prevFun)
rightController.addEventListener('click', nextFun)

function prevFun() {
    j--
    if (j < 0) {
        j = storeOfImages.length - 1
    }

    modalItemDisplay.style.backgroundImage = `url(${storeOfImages[j]})`

}

function nextFun() {
    j++
    if (j > storeOfImages.length - 1) {
        j = 0
    }

    modalItemDisplay.style.backgroundImage = `url(${storeOfImages[j]})`

}


// access the close button
let close = document.querySelector('.close')
close.addEventListener('click', function () {
    modalFullScreen.classList.remove('show')
})