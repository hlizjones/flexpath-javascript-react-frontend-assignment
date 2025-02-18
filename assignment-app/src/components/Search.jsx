import React from "react";
import UserInput from "./UserInput";
import SearchMetrics from "./SearchMetrics";
import SearchResults from "./SearchResults";

export default function Search() {
    return (
        <div className="container">
            <UserInput />
            <SearchMetrics />
            <SearchResults />
        </div>
    );
}