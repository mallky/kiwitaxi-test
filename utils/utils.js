const getURL = (tag = 'sass') => {
  return `https://api.stackexchange.com/2.2/questions?order=desc&sort=votes&tagged=${tag}&site=stackoverflow`;
};

const getData = (tag, addData) => {
  fetch(getURL(tag))
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const filteredByTitleAndCreationDate = data.items
        .filter((item) => item.title.match(tag))
        .sort((prevItem, nextItem) => prevItem.creation_date - nextItem.creation_date);

      addData(filteredByTitleAndCreationDate);
    });
};

export default {
  getData
};
