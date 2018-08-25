const MAX_ITEMS = 20;

const getURL = (tag = 'sass') => {
  return `https://api.stackexchange.com/2.2/questions?page=1000&order=desc&sort=activity&tagged=${tag}&site=stackoverflow`;
};

/**
 * split array for pagination
 */
const splitArray = (arr, size) => {
  const pages = Math.ceil(arr.length / size);
  const finalArr = [];

  for (let i = 0; i < pages; i++) {
    finalArr.push(arr.slice(i * size, (i + 1) * size ))
  }

  return finalArr;
};

const joinArray = (arr) => {
  const joinArr = [];

  arr.forEach(item => {
    joinArr.push(...item);
  });

  return joinArr;
};

const getData = (tag, addData, catchError) => {
  fetch(getURL(tag))
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const filteredByTitleAndCreationDate = data.items
        .filter((item) => item.title.toLowerCase().match(tag.toLowerCase()));

      const finalData = splitArray(filteredByTitleAndCreationDate, MAX_ITEMS);

      addData(finalData);
    })
    .catch(() => {
      catchError();
    });
};

export default {
  getData,
  splitArray,
  joinArray,
  MAX_ITEMS
};
