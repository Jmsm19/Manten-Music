import Fetch from 'isomorphic-fetch';
import { API_BASE_URL } from '../config';

export const getHeaders = (args = {}) => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
  ...args,
});

const setHeaders = () => new Headers(getHeaders());

export const GetData = (endpoint = '') =>
  Fetch(`${API_BASE_URL}${endpoint}`, {
    headers: setHeaders(),
  });

export const SendData = (method, endpoint = '', data = {}) =>
  Fetch(`${API_BASE_URL}${endpoint}`, {
    method: method.toUpperCase(),
    body: JSON.stringify(data),
    headers: setHeaders(),
  });
