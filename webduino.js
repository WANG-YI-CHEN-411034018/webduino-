// 宣告全局變量
var ultrasonic;
var led;
var myData;

// 獲取當前日期的函數
function get_date(t) {
  var varDay = new Date(),
    varYear = varDay.getFullYear(),
    varMonth = varDay.getMonth() + 1,
    varDate = varDay.getDate();
  var varNow;
  // 根據輸入的格式返回對應的日期
  if (t == "ymd") {
    varNow = varYear + "/" + varMonth + "/" + varDate;
  } else if (t == "mdy") {
    varNow = varMonth + "/" + varDate + "/" + varYear;
  } else if (t == "dmy") {
    varNow = varDate + "/" + varMonth + "/" + varYear;
  } else if (t == "y") {
    varNow = varYear;
  } else if (t == "m") {
    varNow = varMonth;
  } else if (t == "d") {
    varNow = varDate;
  }
  return varNow;
}

// 獲取當前時間的函數
function get_time(t) {
  var varTime = new Date(),
    varHours = varTime.getHours(),
    varMinutes = varTime.getMinutes(),
    varSeconds = varTime.getSeconds();
  var varNow;
  // 根據輸入的格式返回對應的時間
  if (t == "hms") {
    varNow = varHours + ":" + varMinutes + ":" + varSeconds;
  } else if (t == "h") {
    varNow = varHours;
  } else if (t == "m") {
    varNow = varMinutes;
  } else if (t == "s") {
    varNow = varSeconds;
  }
  return varNow;
}

// 獲取DOM元素的函數
function getElement(dom) {
  var element = document.querySelector(dom);
  return element;
}

// 為DOM元素添加事件監聽器的函數
function controllerBtnEvent(c, e, callback) {
  if (e !== 'click') {
    var _u = navigator.userAgent;
    // 判斷用戶的設備類型，並根據設備類型添加對應的事件監聽器
    if (_u.indexOf('Android') > -1 || _u.indexOf('iPhone') > -1 || _u.indexOf('iPad') > -1) {
      c.addEventListener(e[1], function () {
        callback();
      });
    } else {
      c.addEventListener(e[0], function () {
        callback();
      });
    }
  } else {
    c.addEventListener('click', function () {
      callback();
    });
  }
}

// 初始化webduino
boardReady({board: 'Smart', device: 'Edy5N', transport: 'mqtt'}, function (board) {
  board.samplingInterval = 50;
  // 初始化超聲波感測器和LED燈
  ultrasonic = getUltrasonic(board, 16, 14);
  led = getLed(board, 5);
  myData= {};
  // 設置Google試算表的URL和名稱
  myData.sheetUrl = 'https://docs.google.com/spreadsheets/d/1jUxpP_hAdiWUVoXgXLB5EiOl3WYIjv8DGzqEBTcC3W0/edit?usp=sharing';
  myData.sheetName = '工作表1';
  // 為按鈕添加點擊事件監聽器
  controllerBtnEvent(getElement('#demo-area-09 .btn-power'),'click', function () {
    // 點擊按鈕時，打開LED燈並將數據寫入Google試算表
    led.on();
    myData.column0 = get_date("ymd");
    myData.column1 = get_time("hms");
    myData.column2 = '按鈕開燈';
    writeSheetData(myData);
  });
  // 每500毫秒檢查一次超聲波感測器的讀數
  ultrasonic.ping(function (cm) {
    if (ultrasonic.distance >= 15) {
      // 如果讀數大於或等於15，則關閉LED燈並將數據寫入Google試算表
      led.off();
      myData.column0 = get_date("ymd");
      myData.column1 = get_time("hms");
      myData.column2 = '超聲波關燈';
      writeSheetData(myData);
    } else {
      // 如果讀數小於15，則打開LED燈並將數據寫入Google試算表
      led.on();
      myData.column0 = get_date("ymd");
      myData.column1 = get_time("hms");
      myData.column2 = '超聲波開燈';
      writeSheetData(myData);
    }
  }, 500);
});