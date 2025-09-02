function convertToRoman(num) {
  	const obj = {
      0:['M',1000],
	  1:['CM',900],
      2:['D', 500],
	  3:['CD',400],
      4:['C', 100], 
      5:['L', 50],
	  6:['XL',40],
      7:['X', 10],
	  8:['IX',9],
      9:['V', 5],
	  10:['IV',4],
      11:['I', 1]
    };

  //your code here
	let res='';
	for(let values of Object.values(obj)){
		let [sym,val] = values;
		while(num>=val){
			res+=sym;
			num-=val;
		}
	}
    return res;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
