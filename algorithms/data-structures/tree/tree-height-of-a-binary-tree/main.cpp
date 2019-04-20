// https://www.hackerrank.com/challenges/tree-height-of-a-binary-tree

#include <iostream>
#include <algorithm>
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

    int height(Node *node) {
        return _height(node, -1);
    }

    private:

    int _height(Node* node, int currHeight) {
        if (node == NULL)
            return currHeight;
        return std::max(
            _height(node->left, currHeight + 1),
            _height(node->right, currHeight + 1)
        );
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
  
    int height = myTree.height(root);
    std::cout << height;
    return 0;
}
