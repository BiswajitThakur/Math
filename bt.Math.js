'use strict';
/*
* Biswajit Thakur *
* 02-11-2020 *
*/

/*
* function sum ultra large numbers
* example *
*    longAdd("num1","num2","num3"...).val;
*/
function longAdd(...numbers){
const t1 = new Date();

const number_s = [...numbers];
  let answer = number_s[0];
function add(a,b){

  let a1 = a+'';
      a1= a1.replace(/,/g,'').replace(/\s/g,'');
      a1=(a1.indexOf('.')>-1)?a1:a1+'.00';
  let b1 = b+'';
      b1=b1.replace(/,/g,'').replace(/\s/g,'');
      b1=(b1.indexOf('.')>-1)?b1:b1+'.00';

let a_ = a1.substring(0,a1.indexOf('.'));
    a_ = a_.replace(/^[0]+/i,'');
let _a = a1.substr(a1.indexOf('.')+1);
let b_ = b1.substring(0,b1.indexOf('.'));
    b_ = b_.replace(/^[0]+/i,'');
let _b = b1.substr(b1.indexOf('.')+1);
let _aL = _a.length;
let _bL = _b.length;
      if( _aL > _bL){
           for(let j=1;j<=_aL-_bL;j++){
                _b += '0'; }
   } else if ( _aL < _bL){
           for(let j=1;j<=_bL-_aL;j++){
                _a += '0'; } };
    _aL = _a.length;
    _bL = _b.length;
let aL_ = a_.length;
let bL_ = b_.length;
      if( aL_ > bL_){
         let z1 = '';
          for(let j=1;j<=aL_-bL_;j++){
              z1 += '0';
          } b_ = z1 + b_;
      } else if ( aL_ < bL_){
          let z2 = '';
            for(let j=1;j<=bL_-aL_;j++){
              z2 += '0';
            } a_ = z2 + a_;
      };
let num1 = a_ + _a;
let num2 = b_ + _b;
let numL = num1.length || num2.length;
     let ans = '';
     let carry = 0;
     let h;
 for(let s=numL-1;s>=0;s--){
    h=Number(num1.charAt(s))+Number(num2.charAt(s))+carry;
        ans = '' + h % 10 + ans;
      carry=(h>=0&&h<=9)?0:(h>=10&&h<=19)?1:'';
      if(numL-s===_aL){ ans = '.' + ans; };
      if(s===0){if(carry!==0){
      ans = '' + carry + ans;}};
      if(s%5===0){ ans = ' ' + ans;};
  };
  const reg = /\.[0|\s]+$/i;
  const reg1 = /\.[0-9|\s]+[0|\s]+$/i;
  const reg2 = /[0|\s]+$/i;
     if(reg.test(ans)){
         ans = ans.replace(reg,'');
     } else if(reg1.test(ans)){
         ans = ans.replace(reg2,'');
     };
 return ans;
};
 for(let q=1;q<number_s.length;q++){
    answer = add(answer, number_s[q]);
 };
const t2 = new Date();
 return { val : answer, time : (t2-t1)/1000 };
};

