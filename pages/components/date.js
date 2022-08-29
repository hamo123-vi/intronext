import { parseISO, format } from "date-fns";

export default function Date({ dateString, shape }) {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{
        format(date, shape)
    }</time>
}