export default function Date({ dateString, format }) {
    const moment = require('moment');
    const date = moment(dateString).format(format);
    return(
        <p>
            {date}
        </p>
    )
  }