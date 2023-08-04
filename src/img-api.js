import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

async function fetchImages(param, currentPage) {
  const BASE_URL = 'https://pixabay.com/api/';

  const searchParams = new URLSearchParams({
    key: '38612355-8184a077488cb30f59b3deec8',
    q: param,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'tru',
    per_page: 40,
    page: currentPage,
  });

  const url = `${BASE_URL}?${searchParams}`;

  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    console.warn(`${error}`);
    Notify.failure('Oops! Something went wrong! Try reloading the page!');
  }
}

export { fetchImages };
