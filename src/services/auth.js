import { client } from './client.js';

export function getUser() {
  return client.auth.currentUser;
}
