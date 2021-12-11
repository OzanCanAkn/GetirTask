import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sort } from "../constants/httpQueries";
import axios from "axios";
import { getFiltered, getAll } from "./queries";
const DataHandler = () => {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tagsReducer);
  const brands = useSelector((state) => state.brandsReducer);
  const itemType = useSelector((state) => state.itemTypeReducer);
  const sortType = useSelector((state) => state.sortReducer);
  const [items, setItems] = useState();
  const [firstRender, setFirstRender] = useState(true);
  const [map, setMap] = useState();
  useEffect(() => {
    axios.get("https://getir-db.herokuapp.com/items").then((res) => {
      setItems(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get("https://getir-db.herokuapp.com/companies").then((res) => {
      let x = {};
      res.data.forEach((company) => {
        x = { ...x, [company.slug]: { name: company.name, count: 0 } };
      });
      setMap(x);
      console.log(x);
    });
  }, []);
  useEffect(() => {
    //finds mugs array,shirts array, unique brand types, unique tag types and sends them to reducers
    if (items?.length > 0 && firstRender && map) {
      let mapMug = map;
      let mapShirt = map;
      console.log(items);
      setFirstRender(false);
      let mugs = [];
      let shirts = [];
      let tagTypes = { mug: {}, shirt: {} };
      items?.forEach((item) => {
        //pops unwanted tagged or branded items
        if (item?.itemType === "mug") {
          mugs.push(item);
          mapMug[item.manufacturer].count++;

          item.tags.forEach((tag) => {
            if (tagTypes.mug?.[tag]) {
              tagTypes.mug[tag].count = 1 + tagTypes.mug?.[tag].count;
            } else {
              tagTypes.mug[tag] = { count: 1 };
            }
          });
        } else if (item?.itemType === "shirt") {
          mapShirt[item.manufacturer].count++;
          shirts.push(item);
          item.tags.forEach((tag) => {
            if (tagTypes.shirt?.[tag]) {
              tagTypes.shirt[tag].count = 1 + tagTypes.shirt?.[tag].count;
            } else {
              tagTypes.shirt[tag] = { count: 1 };
            }
          });
        }
      });
      dispatch({ type: "SET_TAGS", list: tagTypes });
      dispatch({
        type: "SET_BRANDS",
        list: { mug: mapMug, shirt: mapShirt },
      });
      if (itemType === "mug") {
        dispatch({ type: "SET_DATA", data: mugs });
      } else {
        dispatch({ type: "SET_DATA", data: shirts });
      }
    }
  }, [items, map]);
  useEffect(() => {
    let start = performance.now();
    console.log(brands.mug);
    if (
      Object.keys(tags.mug).length > 0 &&
      Object.keys(brands.mug).length > 0 &&
      itemType &&
      (sortType == 0 || sortType)
    ) {
      axios
        .get(
          getFiltered(
            sort[sortType],
            16,
            1,
            itemType,
            brands.checked,
            tags.checked
          )
        )
        .then((res) => {
          dispatch({ type: "SET_DATA", data: res.data });
        });
      console.log(start - performance.now());
    }
  }, [tags, brands, itemType, sortType]);
};

export default DataHandler;
