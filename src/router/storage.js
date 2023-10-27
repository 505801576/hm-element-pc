const KEY = 'my-token-element-pc'

export const getToken = () => {
  return localStorage.getItem(KEY)
}

/* 接受到 实参传过来的数据 并本地储存 */
export const setToken = (token) => {
  localStorage.setItem(KEY,token)
}

export const removeToken = () => {
  localStorage.removeItem(KEY)
}