const MAX_ITEMS = 20;

const getURL = (tag = 'sass') => {
  return `https://api.stackexchange.com/2.2/questions?page=1000&order=desc&sort=votes&tagged=${tag}&site=stackoverflow`;
};

const getData = (tag, addData) => {
  fetch(getURL(tag))
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const filteredByTitleAndCreationDate = data.items
        .filter((item) => item.title.toLowerCase().match(tag.toLowerCase()))
        .sort((prevItem, nextItem) => prevItem.creation_date - nextItem.creation_date);

      // split array for pagination
      const pages = Math.ceil(filteredByTitleAndCreationDate.length / MAX_ITEMS);
      const finalData = [];

      for (let i = 0; i < pages; i++) {
        finalData.push(filteredByTitleAndCreationDate.slice(i * MAX_ITEMS, (i + 1) * MAX_ITEMS ))
      }

      addData(finalData);
    });
};

export default {
  getData,
  MAX_ITEMS
};
