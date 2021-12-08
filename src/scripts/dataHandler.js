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
    if ((tags, brands, itemType, sortType)) {
      let data;
      if (itemType == "mug") data = mugs;
      else data = shirts;
      if(brands != {} && tags != {} ){
      data = data.filter(datum => datum.length > 6);
      }


    }
  }, [tags, brands, itemType, sortType]);
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
};

export default DataHandler;
