import { useState } from "react";

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 },
];

export const DerivedState = () => {

    // Derived state: count of ages
    console.log(users);
    const userCount = users.length
    console.log(userCount)

    // Derived state: sum of ages
    const sumOfAge = users.reduce((accum, currElem) => accum + currElem.age, 0);
    console.log(sumOfAge);
    

    return (
        <div className="main-div">
            <h1>Users List</h1>
            <ul>
                {
                    users.map((e, index) => {
                        return (
                            <li key={index}>{e.name} : {e.age} year old</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
