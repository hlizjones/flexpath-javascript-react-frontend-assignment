import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";

export default function SearchResults() {
    const { loading, data, error } = useContext(DataContext);

    if (loading) return <div>Loading Records...</div>;

    return (
        <>
            {error && <p id="resultsError">Error: {error.message}</p>}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col" >User ID</th>
                        <th scope="col">Device Model</th>
                        <th scope="col">Operating System</th>
                        <th scope="col">App Usage Time (min/day)</th>
                        <th scope="col">Screen On Time (hours/day)</th>
                        <th scope="col">Battery Drain (mAh/day)</th>
                        <th scope="col">Number of Apps Installed</th>
                        <th scope="col">Data Usage (MB/day)</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">User Behavior Class</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((el) => {
                        return (
                            <tr key={el["User ID"]}>
                                <th>{el["User ID"]}</th>
                                <th>{el["Device Model"]}</th>
                                <th>{el["Operating System"]}</th>
                                <th>{el["App Usage Time (min/day)"]}</th>
                                <th>{el["Screen On Time (hours/day)"]}</th>
                                <th>{el["Battery Drain (mAh/day)"]}</th>
                                <th>{el["Number of Apps Installed"]}</th>
                                <th>{el["Data Usage (MB/day)"]}</th>
                                <th>{el["Age"]}</th>
                                <th>{el["Gender"]}</th>
                                <th>{el["User Behavior Class"]}</th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

