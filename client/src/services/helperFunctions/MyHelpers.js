import moment from "moment";
export const myUTC = new Date().getUTCDate();

export const toFixedDecs = (value, decimals = 2) => {
  if (!value) {
    return "";
  }
  if (value === ".") {
    return (value = "0.");
  }

  var regex = new RegExp(`^-?\\d+(?:\\.\\d{0,${decimals}})?`);
  const decimalsNumber = value.toString().match(regex)[0];
  const parsed = parseFloat(Math.abs(decimalsNumber)).toFixed(2);
  if (isNaN(parsed)) {
    return "0";
  }
  return parsed;
};

export const MyMoment = (date, format) => {
  return moment(date).utc(myUTC).format(format);
};
