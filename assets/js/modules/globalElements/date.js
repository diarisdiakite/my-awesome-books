import { DateTime } from './luxon.js';

const updateDateTime = () => {
  const dt = DateTime.now();
  return dt.toLocaleString(DateTime.DATETIME_FULL);
};

const updateDate = () => {
  setInterval(() => {
    document.getElementById('currentDateTime').textContent = updateDateTime();
  }, 1000);
};

export default updateDate;