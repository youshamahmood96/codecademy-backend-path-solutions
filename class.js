class ShiftCipher{
    constructor(num){
      this.num = num;
    }
    encrypt(str){
      let arr = str.split("")
      console.log(arr.join(""));
      let i;
      for (i = 0; i < arr.length; i++){
          if((arr[i].charCodeAt()>=65 && arr[i].charCodeAt()<=90) || (arr[i].charCodeAt()>=97 && arr[i].charCodeAt()<=122)){
            let res = String.fromCharCode(arr[i].charCodeAt()+2);
            arr[i] = res.toUpperCase()
          }
      }
      console.log(arr.join(""));
    }
    decrypt(str){
        let arr = str.split("")
      console.log(arr.join(""));
      let i;
      for (i = 0; i < arr.length; i++){
          if((arr[i].charCodeAt()>=65 && arr[i].charCodeAt()<=90) || (arr[i].charCodeAt()>=97 && arr[i].charCodeAt()<=122)){
            let res = String.fromCharCode(arr[i].charCodeAt()-2);
            arr[i] = res.toLowerCase()
          }
      }
      console.log(arr.join(""));
    }
  }
const s = new ShiftCipher(2)
console.log(s.encrypt('I love to code!'));
console.log(s.decrypt('K <3 OA RWRRA'));