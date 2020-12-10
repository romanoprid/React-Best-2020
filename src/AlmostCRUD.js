import axios from "axios";
import { setImages } from "./components/List";

const restApi = axios.create({
  baseURL: "http://localhost:8080/hockeypucks",
  responseType: "json",
});

export const fetchData = async () => {
  try {
    let responseData = await restApi.get("/");
    console.log(responseData);
    return setImages(responseData.data);
  } catch {
    console.log("error, cant fetch data");
  }
};

export const fetchDataById = async (id) => {
  try {
    let responseElement = await restApi.get("/" + id);
    console.log(responseElement);
    return setImages([responseElement.data]);
  } catch {
    console.log("error, cant fetch element");
  }
};

export const patchData = async (element) => {
  console.log("in patch");
  try {
    let responseElement = await restApi.put("/" + element.id, element);
    console.log(responseElement);
    console.log("after patch");
    return setImages([responseElement.data]);
  } catch (e) {
    console.log("error, cant patch element");
    console.log(e);
  }
};
