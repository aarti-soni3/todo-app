export default function PriorityButton({ priority }) {

  if (priority === undefined) 
      priority = 0;

  const PriorityData = {
    0: {
      actionName: "Priority",
      iconName: " ",
      color: " ",
    },
    1: {
      actionName: "High",
      iconName: "fa fa-star",
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

  return priority !== 0 ? (
    <div
      className="dropdown"
      style={{
        top: "50%",
        right: "3%",
        position: "absolute",
        marginLeft: "8px",
      }}
    >
      <button
        className="btn btn-dark toggle"
        type="button"
        style={{
          cursor: "default",
          display: "block",
          border: "0.6px solid grey",
          backgroundColor: "#212529",
          fontSize: "10px",
          padding: "5px",
        }}
      >
        <i
          className={PriorityData[priority].iconName}
          style={{ color: PriorityData[priority].color }}
        />{" "}
        {PriorityData[priority].actionName}{" "}
      </button>
    </div>
  ) : (
    ""
  );
}
