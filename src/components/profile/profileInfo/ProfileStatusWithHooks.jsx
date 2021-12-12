
import React, { useEffect, useState } from 'react'

export default function ProfileStatusWithHooksjsx(props) {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    }, [props.status])

    const deActivateEditMode = ()=>{
        setEditMode(false);
        props.updateStatus(status)

    }
    const onChangeStatus = (e)=>{
        setStatus(e.currentTarget.value)
    }


    return (
        <div>
            {!editMode&&
            <div>
                <span onDoubleClick={e=>setEditMode(true)}>{ props.status || "!!!!"}</span>
            </div>
}
{editMode &&
            <div>
                <input 
                onBlur={deActivateEditMode}
                 autoFocus={true}
                 onChange={onChangeStatus}
                 value={status}
                />
            </div>
}

        </div>
    )
}
