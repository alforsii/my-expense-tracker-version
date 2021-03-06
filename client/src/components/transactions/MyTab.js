import React from "react";
import { Tab, Tabs } from "react-materialize";

export default function MyTab() {
  return (
    <>
      <Tabs
        className="tab-demo z-depth-1"
        options={{
          swipeable: true,
        }}
      >
        <Tab
          className="blue"
          options={{
            duration: 300,
            onShow: null,
            responsiveThreshold: Infinity,
            swipeable: false,
          }}
          //   title="Test 1"
        >
          Test 1
        </Tab>
        <Tab
          active
          className="red"
          options={{
            duration: 300,
            onShow: null,
            responsiveThreshold: Infinity,
            swipeable: false,
          }}
          //   title="Test 2"
        >
          Test 2
        </Tab>
      </Tabs>
    </>
  );
}
