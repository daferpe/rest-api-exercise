import axios from "axios";
const baseUrl = "http://localhost:3050";

export const getAllCars = () => {
  return axios
    .get(`${baseUrl}/api/cars`)
    .then((result) => {
      const cars = result.data.map((i) => i);
      return cars;
    })
    .catch((err) => console.log(err));
};

export const getCarById = (id) => {
  return axios
    .get(`${baseUrl}/api/cars/${id}`)
    .then((result) => {
      return result.data;
    })
    .catch((err) => console.log(err));
};

export const addCar = (car) => {
  return axios
    .post(`${baseUrl}/api/cars`, car)
    .then((result) => {
      return "ok";
    })
    .catch((err) => console.log(err));
};
