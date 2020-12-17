import axios from "axios";
import {setImages} from "./components/List";

const restApi = axios.create({
  baseURL: "http://localhost:8080/hockeypucks",
  responseType: "json",
});

export const fetchData = async () => {
  try {
    let responseData = await restApi.get("/");
    return setImages(responseData.data);
  } catch {
    console.log("error, cant fetch data");
  }
};

export const fetchDataById = async (id) => {
  try {
    let responseElement = await restApi.get("/" + id);
    return setImages([responseElement.data]);
  } catch {
    console.log("error, cant fetch element");
  }
};

export const patchData = async (element) => {
  try {
    await restApi.put("/" + element.id, element);
  } catch {
    console.log("error, cant patch element");
  }
};
