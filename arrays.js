const memory = require('./memory');

class Array {
  constructor(){
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length); //reserve the amount of space the array needs
  }
  _resize(size){
    const oldPtr = this.ptr;
    this.ptr=memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }
  //   push(value){ //naive method
  //     this._resize(this.length +1); //expand the length by one
  //     memory.set(this.ptr + this.length, value); //find the pointer at the new length and put the value there
  //     this.length++; //increase the length
  //   }
  push(value){ //better version
    if(this.length >= this._capacity){
      this._resize((this.length+1)*Array.SIZE_RATIO); //gives us more space than me weed so we resize less often.
    }
    memory.set(this.ptr + this.length, value);
    this.length++;
  }
}
Array.SIZE_RATIO = 3;