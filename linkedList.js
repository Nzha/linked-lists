const LinkedList = () => {
  let head = null;
  let size = 0;

  const append = (value) => {
    const newNode = Node(value);

    // if list is empty add element and make it head
    if (head === null) {
      head = newNode;
      console.log(head);
    } else {
      current = head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
      console.log(current.next);
    }
    size += 1;
  };

  const prepend = (value) => {
    head = Node(value, head);
    console.log(head);
  };

  const getHead = () => {
    return head;
  };

  return { getHead, prepend, append };
};

const Node = (value = null, next = null) => {
  return { value, next };
};

const list = LinkedList();
list.append(5);
list.append(6);
// list.prepend(3);
// list.prepend(1);
list.append(7);

// console.log(list.getHead());
