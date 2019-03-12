// 選取 Dom
var btnResult = document.querySelector('#btnResult');
var bmiData = JSON.parse(localStorage.getItem('bmi值'))||[];
// 監聽"看結果"按鈕
btnResult.addEventListener('click',addData,false);
// btnResult.addEventListener('click',innerPage,false);

// Bmi 公式計算 function
function addData(e){
  var height = parseInt(document.querySelector('#heightId').value)/100;
  var weight = parseInt(document.querySelector('#weightId').value);
  var bmi = (weight/(height*height));
  var bmiObj = {
    content:bmi
  };
  if (document.querySelector('#heightId').value == ""||document.querySelector('#weightId').value ==""){
    alert('欄位不能為空!')
  }else{
    for(i=0;i<bmiData.length;i++){
      bmiData.push(bmiObj)
    }
    // 儲存成字串
    var bmiString = JSON.stringify(bmiObj);
    // 儲存至 LocalStorage
    localStorage.setItem('bmi',bmiString);
  } 
}
// 更新頁面 function
// function innerPage(e){
//   var bmiData = JSON.parse(localStorage.getItem('bmi'));
//   console.log(typeof(bmiData));
// }