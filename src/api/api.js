import axios from "axios";

const url = "https://corona.lmao.ninja/v3/covid-19/countries";

export const getData = () => axios.get(url);
export const getSearch = (query) => axios.get(`${url}/${query}`);
