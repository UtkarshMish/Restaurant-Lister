import axios from "axios";
export const getRestaurants = () => axios.get("/api/restaurants");
export const getRestaurantsLocation = () =>
  axios.get("/api/restaurantLocation");
export const searchRestaurants = async id => {
  id = parseInt(id);
  const response = await getRestaurants();
  // eslint-disable-next-line eqeqeq
  return response.data.find(restaurant => restaurant["Restaurant ID"] === id);
};
