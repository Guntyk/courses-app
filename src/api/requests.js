import axios from "axios";

const coursesApi = axios.create({
  baseURL: "http://localhost:4000/",
});

coursesApi.interceptors.response.use(
  (response) => [null, response.data],
  (error) => [error, null]
);

//* Auth
export const loginUser = (data) => coursesApi.post(`/login`, data);
export const registerUser = (data) => coursesApi.post(`/register`, data);
export const logoutUser = (token) =>
  coursesApi.delete(`/logout`, {
    headers: { Authorization: token },
  });

//* Courses
export const getCourses = (params) =>
  coursesApi.get("/courses/all", { params });
export const getCourse = (id) => coursesApi.get(`/courses/${id}`);
export const createCourse = (data) => coursesApi.post(`/courses/add`, data);
export const deleteCourse = (id) => coursesApi.delete(`/courses/${id}`);

//* Authors
export const getAuthors = (params) =>
  coursesApi.get("/authors/all", { params });
export const getAuthor = (id) => coursesApi.get(`/authors/${id}`);
export const createAuthor = (data) => coursesApi.post(`/authors/add`, data);
export const deleteAuthor = (id) => coursesApi.delete(`/authors/${id}`);
