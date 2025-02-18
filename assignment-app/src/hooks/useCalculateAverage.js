import { useState, useEffect } from "react";

export default function useCalculateAverage({ data, metric }) {
    const [average, setAverage] = useState(null);

    useEffect(() => {
        if (data.length === 0) {
            setAverage(0);
            return;
        }

        const total = data.reduce((total, el) => {
            total += Number(el[metric]);
            return total;
        }, 0);

        setAverage(Math.round(total / data.length).toLocaleString("en-US"));

    }, [data, metric]);

    return average;
}