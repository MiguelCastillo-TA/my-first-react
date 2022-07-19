import React from 'react';

const ListButton = ({listItems}) => {

    const handleButtonClick = (item) => {
        alert(`button item: ${item}`)
    }

    return (
        <ul>
          {listItems.map((item, index) => {
            return <li key={item}>{item} {index} <button onClick={() => handleButtonClick(item)}>click me</button></li>
          })}
        </ul>
    )
}

export default ListButton;