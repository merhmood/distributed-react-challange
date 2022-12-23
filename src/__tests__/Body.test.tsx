import React from "react";
import renderer from "react-test-renderer";
import Body from "../components/Body";

test("should render appropriate props in h1", () => {
  const tree = renderer.create(<Body title="Home" />).toJSON();
  expect(tree).toMatchSnapshot();
});
