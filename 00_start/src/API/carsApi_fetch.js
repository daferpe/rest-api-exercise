const baseUrl = "http://localhost:3050";

export const getAllCars = () => {
  return fetch(`${baseUrl}/api/cars`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw response.status;
      }
    })
    .then((result) => {
      return result;
    })
    .catch((err) => console.log(err));
};

export const getCarById = (id) => {
  return fetch(`${baseUrl}/api/cars/${id}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw response.status;
      }
    })
    .then((result) => {
      return result;
    })
    .catch((err) => console.log(err));
};

export const addCar = (car) => {
  return fetch(`${baseUrl}/api/cars`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw response.status;
      }
    })
    .then((result) => {
      return "ok";
    })
    .catch((err) => console.log(err));
};
