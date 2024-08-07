
export function searchGalleryQuery(query) {
    const URL = "https://pixabay.com/api/";
    const API_KEY = "45320623-f265cdcadbbe2c6a410e5ea22";

    return fetch(`${URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .catch((error) => {
        console.log(error);
    })
}