let data = [];

export const comparator = (a, b, standard) => {
    switch (standard) {
        case "highPrice":
            if (a.priceInUAH > b.priceInUAH) return -1;
            else if (a.priceInUAH < b.priceInUAH) return 1;
            else return 0;
    }
};

export const sortBy = (inputList, sortType) => {
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
