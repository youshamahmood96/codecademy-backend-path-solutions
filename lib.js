class Media{
  constructor(title) {
    this._ratings = [];
    this._isCheckedOut = false;
    this._title = title;
  }
  get title(){
      return this._title
  }
  get isCheckedOut(){
      return this._isCheckedOut
  }
  get ratings(){
      return this._ratings
  }
  set ratings(newRating){
      this._ratings = newRating
  }
  set isCheckedOut(bool){
      this._isCheckedOut = bool
  }
  toggleCheckOutStatus(){
    this._isCheckedOut = !this._isCheckedOut
  }
  getAverageRating(){
    let ratingsSum = this._ratings.reduce((currentSum,rating) => currentSum + rating, 0);
    return ratingsSum/this._ratings.length
  }
  addRating(newRating){
    return this._ratings.push(newRating)
  }
}
class Book extends Media{
    constructor(title,author,pages){
       super(title)
       this._author = author
       this._pages = pages
    }
    get author(){
        return this._author
    }
    get pages(){
        return this._pages
    }
}
class Movie extends Media{
    constructor(title,director,runtime){
       super(title)
       this._director = director
       this._runtime = runtime
    }
    get director(){
        return this._director
    }
    get runtime(){
        return this._runtime
    }
}