const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(arr){
    this.arr = arr
    this.hat = [];
    this.pos = [0,0]
    this.error = false
    this.findHat = false
  }
  hatF(){
    const dimensions = [ this.arr.length, this.arr[0].length ];
    for(let i=0;i<dimensions[0];i++){
      for(let j=0;j<dimensions[1];j++){
         if(this.arr[i][j] === '^'){
           this.hat.push(i)
           this.hat.push(j)
         }
      }
    }
  }
  print(){
    let str ='';
    const dimensions = [ this.arr.length, this.arr[0].length ];
    for(let i=0;i<dimensions[0];i++){
      for(let j=0;j<dimensions[1];j++){
         str += this.arr[i][j]
         if(j==dimensions[1]-1){
           str += '\n'
         }
      }
    }
    return str
  }
  game(){
    this.findHat = true;
    if(this.findHat === true){
      this.hatF()
    }
    while(this.pos != this.hat && this.error===false){
      const a = prompt('W up S down A left D right ')
      console.log(this.hat);
      if(a === 'W'){
        this.pos[0] = this.pos[0]-1
        console.log(this.pos);
        if(this.pos[0]<0){
          console.log('Game Over, Out of Bounds');
          this.error = true
        }
        console.log(this.print());
      }
      else if(a === 'S'){
        this.pos[0] = this.pos[0]+1
        console.log(this.pos);
        if(this.pos[0]<0){
          console.log('Game Over, Out of Bounds');
          this.error = true
        }
        console.log(this.print());
      }
      else if(a === 'A'){
        this.pos[1] = this.pos[0]-1
        console.log(this.pos)
        if(this.pos[0]<0){
          console.log('Game Over, Out of Bounds');s
          this.error = true
        }
        console.log(this.print());
      }
      else if(a === 'D'){
        this.pos[1] = this.pos[0]+1
        console.log(this.pos);
        if(this.pos[0]<0){
          console.log('Game Over, Out of Bounds');
          this.error = true
        }
        console.log(this.print());
      }
      else{
        const b = prompt('Wrond key, enter again ')
        console.log(b);
      }
    }
    
  }
}
const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);
console.log(myField.game())
