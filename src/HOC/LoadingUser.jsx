import React from "react";
import withLoading from "./withLoading.jsx";


function Users({data,...props}) {

    return (
        <div>
            <h1>{props.counter}</h1>
            <table className="table">
                {data.map(data=><tr>
                    <td>{data.name}</td>
                    <td>{data.username}</td>
                    <td>{data.id}</td>
                </tr>)}
            </table>
        </div>

    )
}


const loadUser=withLoading(Users,'https://60b4f1e8fe923b0017c8338d.mockapi.io/user');

export default (loadUser)