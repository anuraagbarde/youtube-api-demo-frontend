import axios from 'axios';
import { VIDEOS_URL } from '../Utils/constants';

export const getVideos = async (page, query) => {
  try {
    let URL = `${VIDEOS_URL}?page=${page}`;
    if(query?.length) URL += `&searchText=${query}`
    const { data } = await axios.get(URL);
    return data;
  } catch (err) {
    throw err;
  }
}