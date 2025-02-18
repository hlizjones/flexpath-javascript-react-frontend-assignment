import React, { useContext, useEffect } from "react";
import LoadingMessage from "./LoadingMessage";
import { DataContext } from "../context/DataProvider";

export default function UserInput() {
    const { url, setUrl } = useContext(DataContext);

    useEffect(() => {
        localStorage.setItem("url", url);
    }, [url]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (document.getElementById("filterType").value === "Select Filter") {
            setUrl(`/api/data/search`);
        } else {
            const filterType = document.getElementById("filterType").value;
            const keyword = document.getElementById("keyword").value;
            setUrl(`/api/data/search?filterType=${filterType}&keyword=${keyword}`);

        }
    }

    const reset = async (e) => {
        e.preventDefault();
        document.getElementById("filterType").value = "Select Filter";
        document.getElementById("keyword").value = "";
        document.getElementById("filterType").style.color = "#5b636a";
        setUrl(`null`);
    }

    const changeColor = async (e) => {
        e.preventDefault();
        document.getElementById("filterType").style.color = "#212529";
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="col-md-3 mb-5">
                <label className="form-label text-nowrap" htmlFor="filterType" >Select data point to filter search by</label>
                <select className="form-select" name="filterType" id="filterType" defaultValue="Select Filter" onChange={changeColor} >
                    <option value="Select Filter" disabled readOnly>Select Filter</option>
                    <option value="model">model</option>
                    <option value="gender">gender</option>
                    <option value="operatingSystem">operatingSystem</option>
                    <option value="behaviorClass">behaviorClass</option>
                </select>
            </div>
            <div className="col-md-5 mb-3">
                <input className="form-control" type="search" id="keyword" placeholder="Search by Keyword" />
            </div>
            <div className="col-md-5 d-grid gap-3 mb-3">
                <button className="btn focus-ring" type="submit">Search</button>
                <button className="btn focus-ring" type="button" onClick={reset}>Reset</button>
            </div>
            <div className="mb-5">
                <LoadingMessage />
            </div>
        </form>
    );
}

