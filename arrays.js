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

  get(index){
    if(index<0 || index>= this.length){
      throw new Error('Index error');
    }
    return memory.get(this.ptr +index); //traverse the memory boxes from 0 to the index.
  }

  pop() {
    if (this.length===0){
      throw new Error('Index error');
    }
    const value = memory.get(this.ptr + this.length -1);
    this.length--;
    return value;
  }

  insert(index, value) {
    if(index<0 || index>= this.length){
      throw new Error('Index error');
    }
    if(this.length>=this._capacity){
      this._resize((this.length+1)*Array.SIZE_RATIO); //if we're out of space, make the capacity larger
    }
    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }

  remove(index) {
    if(index<0 || index>= this.length){
      throw new Error('Index error');
    }
    memory.copy(this.ptr +index, this.ptr + index+1, this.length - index - 1);
    this.length--;
  } 
}
Array.SIZE_RATIO = 3;