import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

import GoogleIcon from "../assets/google.png";
import BellIcon from "../assets/bell.png";
import NodeIcon from "../assets/node.png";

import Picture from './Picture';

const PictureList = [
    {
        id: 1,
        url: GoogleIcon,
    },
    {
        id: 2,
        url: BellIcon,
    },
    {
        id: 3,
        url: NodeIcon,
    }
]

const DragNDrop = () => {

    const [board, setBoard] = useState([]);
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addImageToBoard = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id);
        setBoard((board) => [...board, pictureList[0]]); // Keep all the dragged images
        //setBoard([pictureList[0]]); // This will replace the previous image with new dragged
    }
    return (
        <>
            <div className='pickup-zone' >
                {
                    PictureList.map((picture) => {
                        return <Picture url={picture.url} id={picture.id} />
                    })
                }
            </div>
            <div className='drop-zone' ref={drop}>
                {
                    board.map((picture) => {
                        return <Picture url={picture.url} id={picture.id} />
                    })
                }
            </div>
        </>
    )
}

export default DragNDrop