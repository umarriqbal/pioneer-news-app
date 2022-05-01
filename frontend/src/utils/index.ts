
import moment from "moment";

const getTimeFrom = (isoTimeStr: string) => {
    return moment(isoTimeStr).fromNow();
};

export {getTimeFrom}