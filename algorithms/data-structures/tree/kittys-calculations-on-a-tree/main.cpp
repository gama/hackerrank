// https://www.hackerrank.com/challenges/kittys-calculations-on-a-tree

#include <cstdint>
#include <cinttypes>
#include <iostream>
#include <vector>
#include <numeric>
#include <set>
#include <unordered_set>
#include <map>
#include <stack>

using namespace std;

const uint64_t MOD         = (1e9 + 7);
const uint8_t  PARENT_IS_A = 1;
const uint8_t  PARENT_IS_B = 2;

struct Query {
    vector<uint64_t> nodeIds;
    uint64_t         nodeIdsSum = 0;
    uint64_t         kittySum   = 0;

    void
    kittyAdd(const uint64_t value, const uint64_t height)
    {
        const uint64_t addend = ((((value % MOD) * height) % MOD) * ((nodeIdsSum - value) % MOD)) % MOD;
        kittySum = (kittySum + addend) % MOD;
    }
};

struct AggQuery {
    uint32_t nodeId;
    uint32_t queryId;
    uint32_t height;
    uint64_t value;

    bool operator==(const AggQuery& other) const {
        return nodeId == other.nodeId && queryId == other.queryId && height == other.height && value == other.value;
    }
};
namespace std {
    template <>
    struct hash<AggQuery> {
        size_t operator()(const AggQuery& qi) const {
            return ((hash<uint32_t>()(qi.nodeId))   ^
                    (hash<uint32_t>()(qi.queryId))  ^
                    (hash<uint32_t>()(qi.height))   ^
                    (hash<uint32_t>()(qi.value)));
        }
    };
};

struct AggNode {
    uint32_t nodeId;
    uint32_t height;
    uint64_t value;
};

struct Node {
    uint32_t      data;
    uint32_t      height;
    vector<Node*> children;
    set<uint32_t> queries;

    Node(uint64_t value) : data(value) {};

    map<uint32_t, AggNode>*
    buildHeightMap(const uint32_t& height) const {
        auto _map = new map<uint32_t, AggNode>();
        for (auto const& query : this->queries)
            (*_map)[query] = { this->data, height, this->data };
        return _map;
    }
};

struct Edge {
    uint64_t from;
    uint64_t to;
};


class Tree {
    public:

    // constructor
    Tree(const uint32_t&      numNodes,
         const vector<Edge>&  edges,
         const vector<Query>& queries)
    {
        vector<Node*> nodes(numNodes + 1);
        root = nodes[1] = new Node(1);
        for (auto edge : edges) {
            nodes[edge.from] = new Node(edge.from);
            nodes[edge.to]->children.push_back(nodes[edge.from]);
        }

        // build inverse "list of queries" on each node (and root)
        for (uint32_t qId = 0; qId < queries.size(); ++qId)
            for (const uint32_t& nodeId : queries[qId].nodeIds) {
                nodes[nodeId]->queries.insert(qId);
                root->queries.insert(qId);
            }
    }

    void
    kitty(vector<Query>& queries)
    {
        _kittyIterative(this->root, queries);
    }

    private:

    Node* root;

    struct Context {
        Node*                              node;
        Context*                           parent;
        const uint32_t                     height;
        vector<map<uint32_t, AggNode>*> sets;

        Context(Node* n, Context *p) :
            node(n), parent(p), height(p && p->node ? p->height + 1 : 0) {};
    };

    void
    _kittyIterative(Node* root, vector<Query>& queries)
    {
        const Node*    head = root;
        Context        nullContext(NULL, NULL);
        stack<Context> stack;
        stack.push(Context(root, &nullContext));

        while (!stack.empty()) {
            Context& context = stack.top();

            bool isLeaf       = context.node->children.empty();
            bool doneChildren = !isLeaf && context.node->children[context.node->children.size() - 1] == head;
            if (isLeaf || doneChildren) {
                _visit(context.node, queries, context);
                head = context.node;
                stack.pop();
            } else {
                for (auto it = context.node->children.rbegin(); it != context.node->children.rend(); ++it)
                    stack.push({ *it, &context });
            }
        }
    }

    void
    _visit(const Node*    node,
           vector<Query>& queries,
           Context&       context)
    {
        map<uint32_t, AggNode>* nodeQueries = node->buildHeightMap(context.height);
        if (!context.sets.empty())
            nodeQueries = _merge(nodeQueries, context.sets, context.height, queries);
        context.parent->sets.push_back(nodeQueries);
    }

    map<uint32_t, AggNode>*
    _merge(map<uint32_t, AggNode>*         parentQueries,
           vector<map<uint32_t, AggNode>*> childrenQueries,
           const uint32_t&                 height,
           vector<Query>&                  queries)
    {
        unordered_set<AggQuery> mergedQueries;
        auto mergedChildren = childrenQueries[0];
        for (uint32_t i = 1; i < childrenQueries.size(); ++i)
            mergedChildren = _merge(mergedChildren, childrenQueries[i], height, &mergedQueries);
        parentQueries = _merge(mergedChildren, parentQueries, height, &mergedQueries, PARENT_IS_B);

        for (auto const& queryInfo : mergedQueries)
            queries[queryInfo.queryId].kittyAdd(queryInfo.value, queryInfo.height);

        return parentQueries;
    }

    map<uint32_t, AggNode>*
    _merge(map<uint32_t, AggNode>* queriesA,
           map<uint32_t, AggNode>* queriesB,
           const uint32_t&            height,
           unordered_set<AggQuery>*  mergedQueries,
           const uint8_t              parentQueries = 0)
    {
        if (queriesA->size() > queriesB->size())
            return _merge(queriesB, queriesA, height, mergedQueries, parentQueries == PARENT_IS_B ? PARENT_IS_A : parentQueries);

        for (auto const& queryA : *queriesA) {
            const uint32_t&   queryAId   = queryA.first;
            const AggNode& queryANode = queryA.second;

            auto const& queryBIt = queriesB->find(queryAId);
            if (queryBIt == queriesB->end())
                queriesB->emplace(queryAId, queryANode);
            else {
                AggNode& queryBNode = queryBIt->second;

                if (parentQueries != PARENT_IS_A)
                    mergedQueries->emplace(AggQuery({ queryANode.nodeId, queryAId, (queryANode.height - height), queryANode.value }));
                if (parentQueries != PARENT_IS_B)
                    mergedQueries->emplace(AggQuery({ queryBNode.nodeId, queryBIt->first, (queryBNode.height - height), queryBNode.value }));

                const uint32_t parentId = (parentQueries == PARENT_IS_A) ? queryANode.nodeId : queryBNode.nodeId;
                queryBNode = { parentId, height, queryBNode.value + queryANode.value };
            }
        }
        delete queriesA;
        return queriesB;
    }
};

int main()
{
  	uint32_t numNodes, numQueries;
    std::cin >> numNodes;
    std::cin >> numQueries;
  
    // read edges
    vector<Edge> edges;
    for (uint32_t i = 0; i < (numNodes - 1); ++i) {
        uint32_t from, to;
        std::cin >> from;
        std::cin >> to;
        if (from < to)
            swap(from, to);
        edges.push_back({ from, to });
    }

    // read sets
    vector<Query> queries(numQueries);
    for (unsigned int i = 0; i < numQueries; ++i) {
        uint32_t querySize;
        std::cin >> querySize; 

        Query& query = queries[i];
        for (uint32_t j = 0; j < querySize; ++j) {
            uint32_t value;
            std::cin >> value; 
            query.nodeIds.push_back(value);
            query.nodeIdsSum += value;
        }
    }

    Tree tree(numNodes, edges, queries);
    tree.kitty(queries);

    for (const Query& query : queries)
        cout << query.kittySum << endl;

    return 0;
}
