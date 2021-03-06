import { Dropdown, Icon } from "react-materialize";
import { Link } from "react-router-dom";

const flexSpaceBetween = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
};

export default function MyDropdown({ id, deleteTransaction, transaction }) {
  return (
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
        style={flexSpaceBetween}
        to={{
          pathname: `/transaction/edit/${id}`,
          state: { transaction },
        }}
      >
        <Icon>edit</Icon>
        <label>Edit</label>
      </Link>

      <button
        style={flexSpaceBetween}
        className="btn-flat"
        onClick={deleteTransaction}
      >
        <Icon>delete</Icon>
        <label>Delete</label>
      </button>
    </Dropdown>
  );
}
