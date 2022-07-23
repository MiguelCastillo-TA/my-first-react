import React, {useState} from "react";

const PersonCard = (props) => {
    const [age, setAge] = useState(props.age)
    const [name, setName] = useState(props.name)

    const updateStateAge = () => {
        let newAge = age
        newAge++
        setAge(newAge)
    }

    const updateName = () => {
        let newName = prompt("What is your new name?")
        setName(newName)
    }


    return (
        <div>
            <p>{name}</p>
            <p id="age">{age}</p>
            <button onClick={updateStateAge}>update age</button>
            <button onClick={updateName}>update name</button>
        </div>
    )
}

export default PersonCard;
