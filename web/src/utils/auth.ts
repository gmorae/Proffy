export const userAuth = () => localStorage.getItem('token') !== null

export const parseJwt = () => {
  var base64 = localStorage.getItem('token') as string;

  return JSON.parse(window.atob(base64.split('.')[1]))
}