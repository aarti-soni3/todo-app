import PriorityItem from "./PriorityItem";

export default function PriorityList({
  handleOnHighPriorityClick,
  handleOnMediumPriorityClick,
  handleOnLowPriorityClick,
  priority,
}) {
  const PriorityData = {
    0: {
      actionName: "Priority",
      iconName: "",
      color: "",
    },
    1: {
      actionName: "High",
      iconName:"fa fa-star",
      color: "#c32121ff",
    },
    2: {
      actionName: "Medium",
      iconName: "fa fa-star-half-o",
      color: "orange",
    },
    3: {
      actionName: "Low",
      iconName: "fa fa-star-o",
      color: "green",
    },
  };

  return (
    <div
      className="dropdown"
      style={{
        zIndex: "2",
      }}
    >
      <button
        className="btn btn-dark toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{
          display: "block",
          border: "0.6px solid grey",
          backgroundColor: "#6b6b6b5d",
        }}
      >
        <i
          className={PriorityData[priority].iconName}
          style={{ color: PriorityData[priority].color }}
          aria-hidden="true"
        />{" "}{PriorityData[priority].actionName}{" "}
      </button>
      <ul className="dropdown-menu">
        <PriorityItem
          icon={"fa fa-star"}
          actionName="High"
          action={handleOnHighPriorityClick}
          color={PriorityData[1].color}
        />
        <PriorityItem
          icon="fa fa-star-half-o"
          actionName="Medium"
          action={handleOnMediumPriorityClick}
          color={PriorityData[2].color}
        />
        <PriorityItem
          icon="fa fa-star-o"
          actionName="Low"
          action={handleOnLowPriorityClick}
          color={PriorityData[3].color}
        />
      </ul>
    </div>
  );
}
