import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const DataHandler = ({ items }) => {
  //items is json object of items.json
  const [mugs, setMugs] = useState();
  const [shirts, setShirts] = useState();
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tagsReducer);
  const brands = useSelector((state) => state.brandsReducer);
  const itemType = useSelector((state) => state.itemTypeReducer);
  const sortType = useSelector((state) => state.sortReducer);
  useEffect(() => {
    //finds mugs array,shirts array, unique brand types, unique tag types and sends them to reducers
    let mugs = [];
    let shirts = [];
    let brandTypes = { mug: [], shirt: [] };
    let tagTypes = { mug: [], shirt: [] };
    items.map((item) => {
      if (item?.itemType === "mug") {
        mugs.push(item);
        brandTypes.mug = [...new Set([...brandTypes.mug, item?.manufacturer])];
        tagTypes.mug = [...new Set([...tagTypes.mug, ...item?.tags])];
      } else if (item?.itemType === "shirt") {
        shirts.push(item);
        brandTypes.shirt = [
          ...new Set([...brandTypes.shirt, item?.manufacturer]),
        ];
        tagTypes.shirt = [...new Set([...tagTypes.shirt, ...item?.tags])];
      }
    });
    dispatch({ type: "SET_TAGS", list: tagTypes });
    dispatch({ type: "SET_BRANDS", list: brandTypes });
    if (itemType === "mug") {
      console.log("type", itemType);
      dispatch({ type: "SET_DATA", data: mugs });
    } else {
      dispatch({ type: "SET_DATA", data: shirts });
    }
    setMugs(mugs);
    setShirts(shirts);
  }, []);
  useEffect(() => {
    console.log("start to filter and sort", tags, brands, itemType, sortType);
    if (tags && brands && itemType && (sortType == 0 || sortType)) {
      let data;
      if (itemType == "mug") data = mugs;
      else data = shirts;
      if (data) {
        if (brands.checked?.length > 0 && tags.checked?.length > 0) {
          //using array.object.filter for filtering items according to tags and brands
          data = data?.filter(
            (datum) =>
              brands.checked?.includes(datum.manufacturer) &&
              tags.checked?.some((r) => datum.tags.indexOf(r) >= 0)
          );
        } else if (brands.checked?.length > 0) {
          data = data?.filter((datum) =>
            brands.checked?.includes(datum.manufacturer)
          );
        } else if (tags.checked?.length > 0) {
          data = data?.filter((datum) =>
            tags.checked?.some((r) => datum.tags.indexOf(r) >= 0)
          );
        }
        console.log(sortType);
        if (sortType == 1) {
          data = data.sort((b, a) => a.price - b.price);
        } else if (sortType == 0) {
          data = data.sort((a, b) => a.price - b.price);
        }if (sortType == 3) {
          data = data.sort((b, a) => a.added - b.added);
        } else if (sortType == 2) {
          data = data.sort((a, b) => a.added - b.added);
        }

        dispatch({ type: "SET_DATA", data: [...data] });
      }
    }
  }, [tags, brands, itemType, sortType]);
};

export default DataHandler;
