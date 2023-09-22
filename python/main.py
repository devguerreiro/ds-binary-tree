from typing import TypeVar


TNode = TypeVar("TNode", bound="Node")


class Node:
    right: TNode | None = None
    left: TNode | None = None
    value: int

    def __init__(self, value: int):
        self.value = value


class BinaryTree:
    root: Node | None = None

    def in_order_traversal(self, node: Node | None = None):
        _node = self.root if node is None else node
        if _node.left is not None:
            # go to the left
            self.symmetrical_traversal(_node.left)
        # print root leaf
        print(_node.value, end="->")
        if _node.right is not None:
            # go to the right
            self.symmetrical_traversal(_node.right)


binary_tree = BinaryTree()

root = Node(1)

binary_tree.root = root

two = Node(2)
three = Node(3)

four = Node(4)
five = Node(5)

six = Node(6)
seven = Node(7)

root.left = two
root.right = three

two.left = four
two.right = five

three.left = six
three.right = seven

binary_tree.in_order_traversal()
