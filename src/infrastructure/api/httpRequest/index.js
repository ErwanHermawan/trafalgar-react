import axios from "axios";
import { useEffect, useState } from "react";

const RequestMaster = (param) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios({ ...param })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError({
          status: error.response.status,
          type: error.name,
          message: error.message,
        });
      });
      // eslint-disable-next-line
  }, []);

  return { data, error };
};

const httpRequest = (param) => {
  return RequestMaster(param);
};

export default httpRequest;