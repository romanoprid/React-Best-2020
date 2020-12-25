import {CatalogState} from "./Source";

let data = [];

const comparator = (a, b, standard) => {
  switch (standard) {
    case "highPrice":
      if (a.price_in_uah > b.price_in_uah) return -1;
      else if (a.price_in_uah < b.price_in_uah) return 1;
      else return 0;
  }
};

const sortBy = (inputList, sortType) => {
  if (sortType === "default") {
    return [...data];
  }
  let result = inputList.sort((a, b) => comparator(a, b, sortType));
  return result;
};


export const executeFilters = (props, sourceList) => {
  data = sourceList;
  let inputList = [...data];
  inputList = sortBy(inputList, props.sortType);
  return inputList;
};

export const findBy = (sample, source) => {
  sample = sample.toLowerCase();
  let resultList = [];
  source.forEach((item) => {
    switch (true) {
      case item.name.toLowerCase().includes(sample):
        resultList.push(item);
        break;
    }
  });
  data = resultList;
  if (sample == "") {
    data = source;
  }
  return data;
};

export const changeCatalogState = (e) => {
  switch (e.item.props.subMenuKey) {
    case "view-menu-":
      CatalogState.currentView = e.key;
      break;
    case "sort-menu-":
      CatalogState.sortType = e.key;
      break;
  }
  return CatalogState;
};