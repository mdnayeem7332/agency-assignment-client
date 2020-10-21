import React from 'react';

const AllOrder = ({ data }) => {

    const { name, email, serviceName, details } = data;

    return (

        <div>
            <table className="table table-hover bg-white">
                <tbody>
                    <tr>
                        <th>{name}</th>
                        <td>{email}</td>
                        <td>{serviceName}</td>
                        <td>{details}</td>
                        <td>
                            <div class="dropdown">
                                <button class="btn btn-transparent btn-outline-danger dropdown-toggle btn-sm" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Pending
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AllOrder;