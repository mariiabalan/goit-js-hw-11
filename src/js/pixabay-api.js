const API_KEY = '45071357-999033ebbf151b40dc2c05ece';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query, page = 1) {
    const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
}