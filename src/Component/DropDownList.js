import React from 'react'
import DropDownItem from './DropDownItem'

export default function DropDownList(props) {

    const [handleOnEdit,handleOnDelete] = [props.handleOnEdit,props.handleOnDelete];
    
    return (
        <div className="dropdown" style={{ zIndex: '2', top: '10%', right: '10%', position: 'absolute', marginLeft: '8px' }}>
            <button className="btn toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-ellipsis-h"></i>
            </button>
            <ul className="dropdown-menu" >
                <DropDownItem icon="fa-solid fa-edit" actionName="Edit" action={handleOnEdit} />
                <DropDownItem icon="fa-solid fa-trash" actionName="Delete" action={handleOnDelete} />
            </ul>
        </div>
    )
}
