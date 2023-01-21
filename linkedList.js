const LinkedList = () => {
  let head = null;
  let size = 0;

  const append = (value) => {
    const newNode = Node(value);

    // if list is empty add element and make it head
    if (head === null) {
      head = newNode;
    } else {
      current = head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    size += 1;
  };

  const prepend = (value) => {
    head = Node(value, head);
    size += 1;
    console.log(head);
  };

  const getSize = () => {
    return size;
  };

  const getHead = () => {
    return head;
  };

  const tail = () => {
    if (head === null) {
      return 'Empty list';
    } else {
      current = head;
      while (current.next !== null){
        current = current.next;
      }
      return current;
    }
  }

  return { prepend, append, getSize, getHead, tail };
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

console.log(list.tail());
