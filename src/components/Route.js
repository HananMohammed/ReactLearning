import React from 'react';
const Route = (props) => {
    console.log(props);
    let p = props.match.params.params
    console.log(p)
    return (
        <div>
            <h2>Route</h2>
            <p>This is Route Section </p>
            <p>{p}</p>
        </div>
    )
}

export default Route