const filter = {
  dateformat: function(time) {
    var date = new Date(time + 8 * 3600 * 1000);
    return date
      .toJSON()
      .substr(0, 19)
      .replace('T', ' ');
  },
  formatDate(time) {
    if (!time) return '';
    var now = new Date(time);
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let arr = [month, date, hour, minute, second];
    if (month < 10) {
      month = '0' + month;
    }
    if (date < 10) {
      date = '0' + date;
    }
    if (hour < 10) {
      hour = '0' + hour;
    }
    if (minute < 10) {
      minute = '0' + minute;
    }
    if (second < 10) {
      second = '0' + second;
    }
    return (
      year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second
    );
  }
};
export default filter;
