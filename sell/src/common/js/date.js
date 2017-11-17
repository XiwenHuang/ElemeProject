/**
 * Created by wenZerrrrrr on 2017/9/15.
 */
/* eslint-disable no-unused-vars */
export default {
  formatDate: (str) => {
    // debugger;
    var a = new Date(str);
    var day = a.getDate(); // 日
    var month = a.getMonth() + 1; // 月
    var year = a.getFullYear(); // 年
    var hour = a.getHours(); // 小时
    var min = a.getMinutes(); // 分钟
    var sec = a.getSeconds(); // 秒
    let formatData = year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec;
    formatData = formatData.toString();
    return formatData;
  }
};
