// https://www.hackerrank.com/challenges/tree-postorder-traversal

#include <iostream>
#include <cstddef>
	
class Node {
    public:

    int   data;
    Node *left;
    Node *right;

    Node(int d) {
        data  = d;
        left  = NULL;
        right = NULL;
    }
};

class Solution {
    public:

    Node* insert(Node* root, int data) {
        if (root == NULL)
            return new Node(data);

        Node* cur;
        if (data <= root->data) {
            cur = insert(root->left, data);
            root->left = cur;
        } else {
            cur = insert(root->right, data);
            root->right = cur;
        }

        return root;
    }

    void postOrder(Node *node) {
        if (node == NULL)
            return;
        postOrder(node->left);
        postOrder(node->right);
        std::cout << node->data << " ";
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
  
    myTree.postOrder(root);
    return 0;
}
