// https://www.hackerrank.com/challenges/is-binary-search-tree/problem

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct Node {
	int data;
	Node* left;
	Node* right;

	Node() {
		this->data = -1;
		this->left = NULL;
		this->right = NULL;
	}
};

class Tree {
	// List of node data values:
	std::vector<int> values;

	// Total number of nodes in the tree:
	int count;

	public:

	Tree() : count() {}

    void
    add(int value)
    {
        this->values.push_back(value);
    }

	void
    inOrder(Node* root, int levels)
    {
		if (root != NULL) {
			// If there are still unfilled levels, fill left subtree:
			if (levels > 0) {
				// Create a new left child node:
				root->left = new Node();
				inOrder(root->left, levels - 1);
			}

			// Set node data:
			root->data = values.at(count);
			count++;

			// If there are still unfilled levels, fill right subtree:
			if (levels > 0) {
				// Create a new right child node:
				root->right = new Node();
				inOrder(root->right, levels - 1);
			}
		}
	}

    void
    print(const std::string& prefix, const Node* node, bool isLeft)
    {
        if (node == nullptr)
            return;

        std::cerr << prefix << (isLeft ? "├──" : "└──" ) << node->data << std::endl;
        print(prefix + (isLeft ? "│   " : "   "), node->left,  true);
        print(prefix + (isLeft ? "│   " : "   "), node->right, false);
    }

    void
    print(Node* root) {
        print("", root, false);
    }

    struct BSTCheckResult {
        bool isBST;
        int  min;
        int  max;
    };

	bool
    checkBST(Node* node)
    {
        return _checkBST(node).isBST;
    }

    BSTCheckResult
    _checkBST(Node* node)
    {
        if (node == nullptr)
            return { true, 99999, -1 };

        BSTCheckResult leftResult  = _checkBST(node->left);
        BSTCheckResult rightResult = _checkBST(node->right);
        if (!leftResult.isBST || !rightResult.isBST || leftResult.max >= node->data || rightResult.min <= node->data)
            return { false, 0, 0 };

        return { true, min(node->data, leftResult.min), max(node->data, rightResult.max) };
    }
};

int main(int argc, char *argv[]) {
    int height;
	cin >> height;

	// Read data values for tree's nodes:
	Tree* tree = new Tree();
	int value;
	while (cin >> value) {
		tree->add(value);
	}

	// Fill tree:
	Node* root = new Node();
	tree->inOrder(root, height);

    // tree->print(root);

	// Print result:
	cout << ((tree->checkBST(root)) ? "Yes" : "No") << endl;
}
