import React from "react";
// import {connect} from 'react-redux'
import { Dropdown, Icon } from "react-materialize";
import { Link } from "react-router-dom";

export default function MyDropdown({
  id,
  deleteTransaction,
  onClick,
  transaction,
}) {
  return (
    <>
      <Dropdown
        id={`Dropdown_${id}`}
        options={{
          alignment: "left",
          autoTrigger: true,
          closeOnClick: true,
          constrainWidth: true,
          container: null,
          coverTrigger: true,
          hover: false,
          inDuration: 150,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 250,
        }}
        trigger={
          <li style={{ margin: 5 }} className="black-text">
            ...
          </li>
        }
      >
        <Link
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
          to={{
            pathname: `/transaction/edit/${id}`,
            state: { transaction },
          }}
        >
          <Icon>edit</Icon>
          <label>Edit</label>
        </Link>
        {/* <button
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
          // onClick={onClick}
          data-target={`modal${id}`}
          className="btn-flat modal-trigger"
        >
          <Icon>edit</Icon>
          <label>Edit</label>
        </button> */}

        <button
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
          className="btn-flat"
          onClick={deleteTransaction}
        >
          <Icon>delete</Icon>
          <label>Delete</label>
        </button>
      </Dropdown>
    </>
  );
}

// // const mapStateToProps = state => {
// //   return {

// //   }
// // }
// const mapDispatch = dispatch => {
//   return {

//   }
// }

// export default connect(null, mapDispatch)(MyDropdown);
