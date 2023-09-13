import ENDPOINT from "infrastructure/api/endPoint";
import httpRequest from "infrastructure/api/httpRequest";

export const useUser = () => {
  return httpRequest({
    method: "get",
    url: ENDPOINT.USERS,
  });
};
