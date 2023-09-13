import ENDPOINT from "infrastructure/api/endPoint";
import httpRequest from "infrastructure/api/httpRequest";

export const usePosts = () => {
  return httpRequest({
    method: "get",
    url: ENDPOINT.POSTS,
  });
};
