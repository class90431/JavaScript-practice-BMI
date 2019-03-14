var btn = document.querySelector('#btnResult');
var bmiUl = document.querySelector('.bmiUl');
var data = JSON.parse(localStorage.getItem('bmi'))||[];
var delA = document.querySelector('.del');

btn.addEventListener('click',addData,false);
bmiUl.addEventListener('click',delData,false);
innerPage();

function addData(e){
  // 宣告欄位 ＆ BMI 公式
  var height = parseInt(document.querySelector('#heightId').value);
  var weight = parseInt(document.querySelector('#weightId').value);
  var bmi = weight/(height/100)/(height/100);
  // 判斷 BMI 的"等級"和"顏色"
  var Level = "";
  var levelColor = "";
  switch (true) {
    case (bmi>16 && bmi<18.5):
      // alert('過輕');
      Level = '過輕';
      levelColor = "#31BAF9";
      break;
    case (bmi>18.5 && bmi<25):
      // alert('理想');
      Level = '理想';
      levelColor = "#86D73F";
      break;
    case (bmi>25 && bmi<30):
      // alert('過重');
      Level = '過重';
      levelColor = "#FF982D";
      break;
    case (bmi>30 && bmi<35):
      // alert('輕度肥胖');
      Level = '輕度肥胖';
      levelColor = "#FF6C03";
      break;
    case (bmi>35 && bmi<40):
      // alert('中度肥胖');
      Level = '中度肥胖';
      levelColor = "#FF6C03";
      break;
    case (bmi>40):
      // alert('重度肥胖');
      Level = '重度肥胖';
      levelColor = "#FF1200";
      break;
    default:
    // alert('嚴重體重不足	');
      Level = '體重超輕';
      levelColor = "#99ff35";
      break;
  }
  // 取得時間
  var dt = new Date();
  var month = new Array(12);
    month[0] = "01";
    month[1] = "02";
    month[2] = "03";
    month[3] = "04";
    month[4] = "05";
    month[5] = "06";
    month[6] = "07";
    month[7] = "08";
    month[8] = "09";
    month[9] = "10";
    month[10] = "11";
    month[11] = "12";
  var bmiObj = {
    'Level':Level,
    'levelColor':levelColor,
    'BMI值': Math.floor( bmi * 100) / 100 , // BMI 只取到小數點後兩位
    '體重':weight,
    '身高':height,
    '時間':month[dt.getMonth()] + '-' + dt.getDate() + '-' + dt.getFullYear()
  };
  if (document.querySelector('#heightId').value == ""||document.querySelector('#weightId').value ==""){
    alert('欄位不能為空!')
  }else{
  data.push(bmiObj);
  innerPage();
  localStorage.setItem('bmi',JSON.stringify(data));
  document.querySelector('#heightId').value="";
  document.querySelector('#weightId').value="";
  }
}
function innerPage(e){
  var str = "";
  for(i=0;i<data.length;i++){
    str += '<li class="bmiLi" style="border-left: 7px solid '+ data[i].levelColor +';"><a href="#" class="del" data-num="'+ i +'">刪了！</a><span class="bmiLevel">'+ data[i].Level +'</span><div class="liDiv"><span class="mainSmalltext">BMI<span class="mainNum">'+ data[i].BMI值 +'</span></span><span class="mainSmalltext">weight<span class="mainNum">'+ data[i].體重 +'</span></span><span class="mainSmalltext">height<span class="mainNum">'+ data[i].身高 +'</span></span><span class="mainTimeNow">'+ data[i].時間 +'</span></div></li>'
  }
  bmiUl.innerHTML = str;
}

function delData(e){
  e.preventDefault();
  var num = e.target.dataset.num;
  if(e.target.nodeName == "A"){
    data.splice(num,1);
    localStorage.setItem('bmi',JSON.stringify(data));
    innerPage();
  }
}