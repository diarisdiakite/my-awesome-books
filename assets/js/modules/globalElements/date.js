const updateDateTime = () => {
  const dt = luxon.DateTime.now();
  return dt.toLocaleString(luxon.DateTime.DATETIME_FULL);
};

const updateDate = () => {
  setInterval(() => {
    document.getElementById('currentDateTime').textContent = updateDateTime();
  }, 1000);
};

export default updateDate;