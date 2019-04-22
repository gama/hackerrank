#include <iostream>
#include <cstddef>
	
class Node {
    public:

    int data;
    Node *left;
    Node *right;

    Node(int d) {
        data = d;
        left = NULL;
        right = NULL;
    }
};

class Solution {
    public:
  
    void preOrder(Node *root) {
        if (root == NULL)
            return;

        std::cout << root->data << " ";
        preOrder(root->left);
        preOrder(root->right);
    }

    Node* insert(Node* node, int data) {
        if (node == NULL)
            return new Node(data);

        if (data <= node->data) {
            Node* newNode = insert(node->left, data);
            if (node->left == NULL)
                node->left = newNode;
        } else {
            Node* newNode = insert(node->right, data);
            if (node->right == NULL)
                node->right = newNode;
        }

        return node;
    }

};

int main() {
    Solution myTree;
    Node* root = NULL;
    
    int t;
    int data;

    std::cin >> t;

    while (t-- > 0) {
        std::cin >> data;
        root = myTree.insert(root, data);
    }
	myTree.preOrder(root);
    return 0;
}
