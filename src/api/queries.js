const URL = "https://getir-db.herokuapp.com/";


const getFiltered = (sorting, pageLimit, initialPage, itemType, brands, tags) => {
  let tag = "";
  if (tags?.length > 0) {
    tags.forEach((element) => {
      tag=tag.concat(`${element}|`);
    });
    tag = tag.slice(0, -1);
  }
  let brand = "";
  if (brands?.length > 0) {
    brands.forEach((element) => {
      brand = brand.concat(`${element}|`);
    });

    brand = brand.slice(0, -1);
  }
  //query for fetch data with all filters
  const query = `${URL.concat("items")}?${sorting}`
    .concat(initialPage && pageLimit ? `_page=${initialPage}&_limit=${pageLimit}` : "")
    .concat(tag?.length > 0 ? `&tags_like=${tag}` : "")
    .concat(brand ? `&manufacturer_like=${brand}` : "")
    .concat(`&itemType=${itemType}`);
    console.log(query)
  return query;
};
export {  getFiltered };
