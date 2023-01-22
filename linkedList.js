const LinkedList = () => {
  let head = null;

  const append = (value) => {
    const newNode = Node(value);

    if (head === null) {
      head = newNode;
    } else {
      current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  };

  const prepend = (value) => {
    head = Node(value, head);
  };

  const size = () => {
    let count = 1;
    let current = head;
    while (current.next) {
      count += 1;
      current = current.next;
    }
    return count;
  };

  const getHead = () => {
    return head;
  };

  const tail = () => {
    let current = head;
    while (current.next) {
      current = current.next;
    }
    return current;
  };

  const at = (index) => {
    let count = 0;
    let current = head;
    while (count < index) {
      current = current.next;
      count += 1;
    }
    return current;
  };

  const pop = () => {
    let current = head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
    return current;
  };

  const contains = (value) => {
    let current = head;
    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  };

  const find = (value) => {
    let index = 0;
    let current = head;
    while (current) {
      if (current.value === value) return index;
      current = current.next;
      index += 1;
    }
    return null;
  };

  const toString = () => {
    let current = head;
    let str = '';
    while (current) {
      str += `${current.value} -> `;
      current = current.next;
    }
    return (str += 'null');
  };

  const insertAt = (value, index) => {
    let current = head;
    let count = 0;
    if (index === 0) prepend(value);
    while (current) {
      if (count === index - 1) {
        const newNode = Node(value, current.next);
        current.next = newNode;
      }
      current = current.next;
      count += 1;
    }
  };

  const removeAt = (index) => {
    let current = head;
    let count = 0;
    if (index === 0) head = current.next;
    while (current) {
      if (count === index - 1) {
        current.next = current.next.next;
      }
      current = current.next;
      count += 1;
    }
  };

  return {
    prepend,
    append,
    size,
    getHead,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

const Node = (value, next = null) => {
  return { value, next };
};

const list = LinkedList();
list.append(5);
list.append(6);
list.prepend(3);
list.prepend(1);
list.append(7);
list.pop();
list.insertAt(99, 3);
list.removeAt(2);

// 1-> 3-> 5 -> 6

// console.log(list.size());
// console.log(list.tail());
// console.log(list.at(3));
// console.log(list.contains(6));
// console.log(list.find(6));
console.log(list.toString());
