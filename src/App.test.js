import React from "react";
import { Provider } from "react-redux";
import { shallow } from "enzyme";
import configureStore from "./redux/reducers/configureStore";
const store = configureStore();
import {
  ProductList,
  Header,
  CheckboxGroup,
  SortTab,
  Chart,
  Footer,
  BrandsCheckbox,
} from "./components";
describe("rendering components", () => {
  it("renders ProductList component without crash", () => {
    shallow(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );
  });
  it("renders CheckboxGroup component without crash", () => {
    shallow(
      <Provider store={store}>
        <CheckboxGroup />
      </Provider>
    );
  });
  it("renders SortTab component without crash", () => {
    shallow(
      <Provider store={store}>
        <SortTab />
      </Provider>
    );
  });
  it("renders Footer component without crash", () => {
    shallow(
      <Provider store={store}>
        <Footer />
      </Provider>
    );
  });
  it("renders Header component without crash", () => {
    shallow(
      <Provider store={store}>
        <Header />
      </Provider>
    );
  });
  it("renders Chart component without crash", () => {
    shallow(
      <Provider store={store}>
        <Chart />
      </Provider>
    );
  });
  it("renders BrandsCheckbox component without crash", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <BrandsCheckbox />
      </Provider>
    );
    expect(wrapper);
  });
});
