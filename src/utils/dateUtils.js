function getDay(date) {
  let day = date.getDate().toString();
  return day.length === 1 ? '0' + day : day;
}

function getMonth(date) {
  let month = (date.getMonth() + 1).toString();
  return month.length === 1 ? '0' + month : month;
}

function formatDateApi(date) {
  const finalDay = getDay(date);
  const finalMonth = getMonth(date);
  const finalYear = date.getFullYear();

  return `${finalMonth}-${finalDay}-${finalYear}`;
}

function formatDateDisplay(date) {
  const finalDay = getDay(date);
  const finalMonth = getMonth(date);

  return `${finalDay}/${finalMonth}`;
}

function addDay(originalDate) {
  var date = new Date(originalDate.valueOf());
  date.setDate(date.getDate() + 1);
  return date;
}

export function getDates(startDate, stopDate) {
  var dateArray = [];
  var currentDate = startDate;

  while (currentDate <= stopDate) {
    const date = {
      apiFormat: formatDateApi(new Date(currentDate)),
      displayFormat: formatDateDisplay(new Date(currentDate))
    };

    dateArray.push(date);
    currentDate = addDay(currentDate);
  }

  return dateArray;
}
