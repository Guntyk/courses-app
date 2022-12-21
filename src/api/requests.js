import axios from "axios";

const coursesApi = axios.create({
  baseURL: "http://localhost:4000",
});

coursesApi.interceptors.response.use(
  (response) => [null, response.data],
  (error) => [error, null]
);

//* Auth
export const loginUserFetch = (data) => coursesApi.post(`/login`, data);
export const registerUserFetch = (data) => coursesApi.post(`/register`, data);
export const logoutUserFetch = (token) =>
  coursesApi.delete(`/logout`, {
    headers: { Authorization: token },
  });

//* Courses
export const getCoursesFetch = (params) =>
  coursesApi.get("/courses/all", { params });
export const getCourseFetch = (id) => coursesApi.get(`/courses/${id}`);
export const createCourseFetch = (data) =>
  coursesApi.post(`/courses/add`, data, {
    headers: {
      Authorization: window.localStorage.getItem("userToken"),
    },
  });
export const deleteCourseFetch = (id) =>
  coursesApi.delete(`/courses/${id}`, {
    headers: {
      Authorization: window.localStorage.getItem("userToken"),
    },
  });

//* Authors
export const getAuthorsFetch = (params) =>
  coursesApi.get("/authors/all", { params });
export const getAuthorFetch = (id) => coursesApi.get(`/authors/${id}`);
export const createAuthorFetch = (data) =>
  coursesApi.post(`/authors/add`, data, {
    headers: {
      Authorization: window.localStorage.getItem("userToken"),
    },
  });
export const deleteAuthorFetch = (id) => coursesApi.delete(`/authors/${id}`);
