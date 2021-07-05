
const count = 10
const apiKey = 'UnqfpNpOhYUk_f3lTI-lKWZKWqOipalHYB08r8ElXCM'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`


// Get photos from Unsplash API 
const getPhotos = async () => {
    try {
        const res = await fetch(apiUrl)
        const data = await res.json() 
        console.log(data)
    } catch (err) {
        console.log('SomeThing went wrong')
    }
}


// Loading photos
getPhotos()