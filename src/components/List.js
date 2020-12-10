import hockey1 from "../images/darkBlue.jpg";
import hockey2 from "../images/blue.jpg";
import hockey3 from "../images/black.jpg";
import hockey4 from "../images/red.jpg";


export const setImages = (initialData) => {
  initialData.forEach((item) => {
    switch (parseInt(item.image)) {
      case 1:
        item.imageSrc = hockey1;
        break;
      case 2:
        item.imageSrc = hockey2;
        break;
      case 3:
        item.imageSrc = hockey3;
        break;
      case 4:
        item.imageSrc = hockey4;
        break;
    }
  });
  console.log("checking image", initialData);
  return initialData;
};
