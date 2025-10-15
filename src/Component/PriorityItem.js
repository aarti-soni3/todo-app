
export default function PriorityItem(props) {

    const [icon,actionName,action,color] = [props.icon,props.actionName,props.action,props.color];

  return (
    <>
      <button className="dropdown-item me-2" onClick={action}>
      <i className={icon} style={{color:color}}></i>
      <span className="dropdown-item-name">  {actionName}</span>
    </button>
    </>
  )
}
