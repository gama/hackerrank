// https://www.hackerrank.com/challenges/binary-search-tree-lowest-common-ancestor

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

    Node* lca(Node *root, const int v1, const int v2) {
        Node *lcaNode = NULL;
        unsigned int numValues = _lca(root, v1, v2, &lcaNode);
        if (numValues != 2)
            return NULL;
        return lcaNode;
    }

    private:

    unsigned int _lca(Node* node, const int v1, const int v2, Node** lcaNode) {
        if ((*lcaNode != NULL) || (node == NULL))
            return 0;

        unsigned int numLeft  = _lca(node->left,  v1, v2, lcaNode);
        unsigned int numRight = _lca(node->right, v1, v2, lcaNode);
        unsigned int numNode  = (node->data == v1 || node->data == v2) ? 1 : 0;
        unsigned int total    = numLeft + numRight + numNode;
        if (total == 2 && *lcaNode == NULL)
            *lcaNode = node;
        return total;
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
  
    int v1, v2;
    std::cin >> v1 >> v2;

    Node* node = myTree.lca(root, v1, v2);

    std::cout << node->data << std::endl;

    return 0;
}
