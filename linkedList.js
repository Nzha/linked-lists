const LinkedList = () => {
  let head = null;

  const append = (value) => {
    const newNode = Node(value);

    if (head === null) {
      head = newNode;
    } else {
      current = head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  };

  const prepend = (value) => {
    head = Node(value, head);
    console.log(head);
  };


  const size = () => {
    if (head !== null) {
      let count = 0;
      current = head;
      while (current.next !== null) {
        current = current.next;
        count += 1;
      }
      return count;
    }
  }

  const getHead = () => {
    return head;
  };

  const tail = () => {
    if (head === null) {
      return 'Empty list';
    } else {
      current = head;
      while (current.next !== null) {
        current = current.next;
      }
      return current;
    }
  };

  const at = (index) => {
    let count = 0;
    if (head !== null) {
      current = head;
      while (current.next !== null) {
        if (index === count) {
          return current;
        }
        current = current.next;
        count += 1;
      }
    }
  };

  return { prepend, append, size, getHead, tail, at };
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

// 1-> 3-> 5 -> 6 -> 7

// console.log(list.size());
// console.log(list.at(3));
