import React from 'react';
import { useDrag } from 'react-dnd';
import "../App.css";

const Picture = ({ id, url }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }));
    return (
        <div className='picture-div'  >
            <img
                ref={drag}
                src={url}
                style={{ border: isDragging ? "5px solid red" : "0px" }}
            />
        </div>
    )
}

export default Picture