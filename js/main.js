// 以下のような重複値を含む配列arrayの中から、重複値を除く配列を作成して下さい。
const array = [2,4,7,5,4,3,8];
// 条件としては以下の4つが挙げられます。
// 1.filterを利用する
// 2.indexOfを利用する
// 3.返り値を使用する
// 4.結果をコンソールに出力する

const newArray = array.filter((x,i)=>{
    return array.indexOf(x) === i;
});
console.log(newArray);

// 2020年と2021年がうるう年かどうかを判定するコードを記述してください。
// 条件としては以下の5つが挙げられます。

// 1.if文を使用する
// 2.leapYearという関数を使用する
// 3.引数に西暦を渡す
// 4.返り値を使用する
// 5.結果はコンソールに出力する

// ※うるう年は以下のように定義されます。
// 1.西暦が4で割り切れるかつ100で割り切れない
// 2.西暦が400で割り切れる

const leapYear = (year)=>{
    if (year % 4 === 0 && year % 100 !== 0){
        return `${year}はうるう年です。`;
    }else if(year % 400 === 0){
        return `${year}はうるう年です。`;
    }else{
        return `${year}はうるう年ではありません。`;
    }
}

console.log(leapYear(2020));
console.log(leapYear(2021));