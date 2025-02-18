import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";

export default function LoadingMessage() {
    const { data, loading, error } = useContext(DataContext);

    if (error) return <p>Whoops! An error occurred.</p>;
    if (loading) return <p>Loading...</p>;
    if (data.length > 0) return <p>Displaying {data.length} Records</p>;
    return <p>No Records To Display</p>;
}