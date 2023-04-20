import Axios from "axios";

export const httpService = Axios.create({
    baseURL: "https://6434a90283a30bc9ad4effe5.mockapi.io/api/v1",
});
