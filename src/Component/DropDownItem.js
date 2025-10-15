
export default function DropDownItem(props) {

    const [icon,actionName,action] = [props.icon,props.actionName,props.action];

  return (
    <>
      <button className="dropdown-item me-2" onClick={action} >
      <i className={icon} ></i>
      <span className="dropdown-item-name">  {actionName}</span>
    </button>
    </>
  )
}
