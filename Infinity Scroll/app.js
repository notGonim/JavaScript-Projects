const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

const count = 30
const apiKey = 'UnqfpNpOhYUk_f3lTI-lKWZKWqOipalHYB08r8ElXCM'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

let photosArr = []

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
// Get photos from Unsplash API 
const getPhotos = async () => {
    try {
        const res = await fetch(apiUrl)
        photosArr = await res.json()
    } catch (err) {
        console.log('SomeThing went wrong')
    }
}



// Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Display Photos, Add to DOM
function displayPhotos() {
    imagesLoaded = 0;
    totalImages = photosArr.length;
    // Run function for each object in photosArray
    photosArr.forEach((photo) => {
        // Create <a> to link to full photo
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });
        // Create <img> for photo
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
        });
        // Event Listener, check when each is finished loading
        img.addEventListener('load', imageLoaded);
        // Put <img> inside <a>, then put both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);
    })
}


// Check to see if scrolling near bottom of page, Load More Photos
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false;
        // Loading photos
        getPhotos()
    }
});


// Loading photos
getPhotos()