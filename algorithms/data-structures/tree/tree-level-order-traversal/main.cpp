// https://www.hackerrank.com/challenges/tree-postorder-traversal

#include <iostream>
#include <cstddef>
#include <queue>
	
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

    void levelOrder(Node *root) {
        std::queue<Node*> nodes;
        nodes.push(root);
        while (!nodes.empty()) {
            Node* node = nodes.front();
            nodes.pop();
            if (node->left != NULL)
                nodes.push(node->left);
            if (node->right != NULL)
                nodes.push(node->right);

            std::cout << node->data << " ";
        }
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
  
    myTree.levelOrder(root);
    return 0;
}
