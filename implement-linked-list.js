// Implement a linked list
var LinkedList = function (x) {
  this.head = null;
  this.tail = null;
  if (x) { this.addToTail(x) }
};

LinkedList.prototype.Node = function (value, next) {
  this.value = value;
  this.next = next;
};

LinkedList.prototype.addToTail = function (x) {
  var n = new this.Node(x);
  if (this.tail === null) {
    this.head = n;
    this.tail = this.head;
  } else {
    this.tail.next = n;
    this.tail = n;
  }
};

LinkedList.prototype.removeHead = function () {
  if(this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    var beheaded = this.head;
    this.head = this.head.next;
    return beheaded;
  }
};

LinkedList.prototype.contains = function (searchTerm) {
  var pointerAt = this.head;
  while (pointerAt) {
    if (pointerAt.value === searchTerm){ return true; }
    pointerAt = pointerAt.next;
  }
  return false;
};