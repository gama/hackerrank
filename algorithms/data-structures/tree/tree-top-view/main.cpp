// https://www.hackerrank.com/challenges/tree-top-view/problem

#include <iostream>
#include <map>
#include <queue>
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

    typedef struct { Node* node; int hPos; } ViewInfo;

    void topView(Node *root) {
        std::map<int, int> view;
        std::queue<ViewInfo> nodes;

        nodes.push({ node: root, hPos: 0 });
        while (!nodes.empty()) {
            ViewInfo vinfo = nodes.front();
            nodes.pop();
            
            if (view.find(vinfo.hPos) == view.end())
                view[vinfo.hPos] = vinfo.node->data;

            if (vinfo.node->left)
                nodes.push({ node: vinfo.node->left, hPos: vinfo.hPos - 1 });
            if (vinfo.node->right)
                nodes.push({ node: vinfo.node->right, hPos: vinfo.hPos + 1 });
        }

        for (auto& kv : view)
            std::cout << kv.second << " ";
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
  
    myTree.topView(root);
    return 0;
}
