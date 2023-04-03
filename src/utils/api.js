import axios from 'axios';
import {baseUrl} from './constants';

export const getCategories = async () => {
  const response = await axios.get(`${baseUrl}/news/categories`);
  return response;
};

export const getLatest = async (page, keyword) => {
  let response;
  if (keyword) {
    response = await axios.get(
      `${baseUrl}/news/?keyword=${keyword}&page=${page}`,
    );
  } else {
    response = await axios.get(`${baseUrl}/news?page=${page}`);
  }
  return response;
};

export const getArticle = async id => {
  const response = await axios.get(`${baseUrl}/news/show?id=${id}`);
  return response;
};

export const getArticlesByCategory = async categoryId => {
  const response = await axios.get(`${baseUrl}/news/?category=${categoryId}`);
  return response;
};
