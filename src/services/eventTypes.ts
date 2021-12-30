import axios from "axios";

const getEventTypesApi = "https://api.justgiving.com/bb3fb764/v1/event/types";
export const eventTypes = async () => {
  return await axios.get(getEventTypesApi, {
    headers: {
      "content-type": "application/json",
    },
  });
};
