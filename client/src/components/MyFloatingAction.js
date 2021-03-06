import React, { useEffect } from "react";
import M from "materialize-css";

export const MyFloatingAction = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".fixed-action-btn");
    M.FloatingActionButton.init(elems, {
      direction: "left", // top default
      hoverEnabled: false, //true default
      //   toolbarEnabled: true,//add toolbar class for main div
    });
  }, []);
  return (
    <div className="fixed-action-btn ">
      <button className="btn-floating btn-large red ">
        <i className="large material-icons">mode_edit</i>
      </button>
      <ul>
        <li>
          <button className="btn-floating red">
            <i className="material-icons">insert_chart</i>
          </button>
        </li>
        <li>
          <button className="btn-floating yellow darken-1">
            <i className="material-icons">format_quote</i>
          </button>
        </li>
        <li>
          <button className="btn-floating green">
            <i className="material-icons">publish</i>
          </button>
        </li>
        <li>
          <button className="btn-floating blue">
            <i className="material-icons">attach_file</i>
          </button>
        </li>
      </ul>
    </div>
  );
};
