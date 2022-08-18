import moment from "moment";

// general Util file 

export const convertDate = (milliSecond) => {
    return moment
        .unix(milliSecond)
        .locale("zh-tw")
        .format("dddd, MMMM Do YYYY");
};

export const getDayName = (milliSecond) => {
    return moment
        .unix(milliSecond)
        .locale("zh-tw")
        .format('dddd');
};