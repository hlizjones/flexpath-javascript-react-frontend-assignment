import { useState, useEffect } from "react";

export default function useCalculateMedian({ data, metric }) {
    const [median, setMedian] = useState(null);

    useEffect(() => {
        if (data.length === 0) {
            setMedian(0);
            return;
        }

        const usageTimes = data.map((el) => Number(el[metric]));
        const sortedUsageTimes = usageTimes.sort((a, b) => a - b);
        const middle = Math.floor(sortedUsageTimes.length / 2);

        if (sortedUsageTimes.length % 2 === 0) {
            setMedian(((sortedUsageTimes[middle] + sortedUsageTimes[middle - 1]) / 2).toLocaleString("en-US"));
        } else {
            setMedian(sortedUsageTimes[middle].toLocaleString("en-US"));
        }
    }, [data, metric]);

    return median;
}