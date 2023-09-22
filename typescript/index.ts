class Node {
    left: Node | null = null;
    right: Node | null = null;
    value: number;

    constructor(value: number) {
        this.value = value;
    }
}

class BinaryTree {
    root: Node | null = null;

    inOrderTraversal(node: Node | null = null) {
        const _node = node === null ? this.root : node;
        if (_node !== null) {
            if (_node.left !== null) {
                // go to the left
                this.inOrderTraversal(_node.left);
            }
            // print root leaf
            process.stdout.write(_node.value + "->");
            if (_node.right !== null) {
                // go to the right
                this.inOrderTraversal(_node.right);
            }
        }
    }
    preOrderTraversal(node: Node | null = null) {
        const _node = node === null ? this.root : node;
        if (_node !== null) {
            // print root leaf
            process.stdout.write(_node.value + "->");
            if (_node.left !== null) {
                // go to the left
                this.preOrderTraversal(_node.left);
            }
            if (_node.right !== null) {
                // go to the right
                this.preOrderTraversal(_node.right);
            }
        }
    }
    postOrderTraversal(node: Node | null = null) {
        const _node = node === null ? this.root : node;
        if (_node !== null) {
            if (_node.left !== null) {
                // go to the left
                this.postOrderTraversal(_node.left);
            }
            if (_node.right !== null) {
                // go to the right
                this.postOrderTraversal(_node.right);
            }
            // print root leaf
            process.stdout.write(_node.value + "->");
        }
    }
}

export default {};

const binaryTree = new BinaryTree();

const root = new Node(1);

binaryTree.root = root;

const two = new Node(2);
const three = new Node(3);

const four = new Node(4);
const five = new Node(5);

const six = new Node(6);
const seven = new Node(7);

root.left = two;
root.right = three;

two.left = four;
two.right = five;

three.left = six;
three.right = seven;

console.log("in-order traversal");
binaryTree.inOrderTraversal();
console.log("\npre-order traversal");
binaryTree.preOrderTraversal();
console.log("\npost-order traversal");
binaryTree.postOrderTraversal();
