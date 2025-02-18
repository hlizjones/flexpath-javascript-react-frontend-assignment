import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import useCalculateAverage from "../hooks/useCalculateAverage";
import useCalculateMedian from "../hooks/useCalculateMedian";

export default function SearchMetrics() {
    const { data } = useContext(DataContext);

    return (
        <div className="row row-cols-1 row-cols-md-4 g-5 mb-4">
            <div className="col">
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">App Usage Time (min/day)</h5>
                        <p className="card-text">Average - {useCalculateAverage({ data, metric: "App Usage Time (min/day)" })} Minutes</p>
                        <p className="card-text">Median -  {useCalculateMedian({ data, metric: "App Usage Time (min/day)" })} Minutes</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">Screen On Time (hours/day)</h5>
                        <p className="card-text">Average - {useCalculateAverage({ data, metric: "Screen On Time (hours/day)" })} Hours</p>
                        <p className="card-text">Median -  {useCalculateMedian({ data, metric: "Screen On Time (hours/day)" })} Hours</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">Number of Apps Installed</h5>
                        <p className="card-text">Average - {useCalculateAverage({ data, metric: "Number of Apps Installed" })} Apps</p>
                        <p className="card-text">Median -  {useCalculateMedian({ data, metric: "Number of Apps Installed" })} Apps</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">Age</h5>
                        <p className="card-text">Average - {useCalculateAverage({ data, metric: "Age" })} Years Old</p>
                        <p className="card-text">Median -  {useCalculateMedian({ data, metric: "Age" })} Years Old</p>
                    </div>
                </div>
            </div>
        </div >
    );
}