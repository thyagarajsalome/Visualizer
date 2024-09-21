import React, { useState } from "react";
import {
  Plus,
  Minus,
  ChevronRight,
  ChevronDown,
  RotateCcw,
} from "lucide-react";

const TreeNode = ({ node, onAddChild, onRemoveNode }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [newChildName, setNewChildName] = useState("");

  const handleAddChild = () => {
    if (newChildName.trim()) {
      onAddChild(node, newChildName.trim());
      setNewChildName("");
    }
  };

  return (
    <div className="ml-4">
      <div className="flex items-center mb-2">
        {node.children.length > 0 ? (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mr-2 text-gray-600 hover:text-gray-800"
          >
            {isExpanded ? (
              <ChevronDown size={20} />
            ) : (
              <ChevronRight size={20} />
            )}
          </button>
        ) : (
          <span className="w-5 h-5 mr-2"></span>
        )}
        <span className="font-semibold">{node.data}</span>
        {node.data !== "root" && (
          <button
            onClick={() => onRemoveNode(node)}
            className="ml-2 text-red-500 hover:text-red-700"
          >
            <Minus size={16} />
          </button>
        )}
      </div>
      {isExpanded && (
        <div className="ml-6">
          {node.children.map((child, index) => (
            <TreeNode
              key={index}
              node={child}
              onAddChild={onAddChild}
              onRemoveNode={onRemoveNode}
            />
          ))}
        </div>
      )}
      <div className="flex items-center mt-2 ml-6">
        <input
          type="text"
          value={newChildName}
          onChange={(e) => setNewChildName(e.target.value)}
          placeholder="New child name"
          className="border border-gray-300 rounded px-2 py-1 mr-2"
        />
        <button
          onClick={handleAddChild}
          className="bg-blue-500 text-white rounded px-2 py-1 flex items-center"
        >
          <Plus size={16} className="mr-1" /> Add Child
        </button>
      </div>
    </div>
  );
};

const Tree = () => {
  const initialRoot = {
    data: "root",
    children: [],
  };

  const [root, setRoot] = useState(initialRoot);

  const addChild = (parent, childName) => {
    const newChild = { data: childName, children: [] };
    const updateTree = (node) => {
      if (node === parent) {
        return { ...node, children: [...node.children, newChild] };
      }
      return { ...node, children: node.children.map(updateTree) };
    };
    setRoot(updateTree(root));
  };

  const removeNode = (nodeToRemove) => {
    const updateTree = (node) => {
      return {
        ...node,
        children: node.children
          .filter((child) => child !== nodeToRemove)
          .map(updateTree),
      };
    };
    setRoot(updateTree(root));
  };

  const resetTree = () => {
    setRoot(initialRoot);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Tree Visualization</h2>
        <button
          onClick={resetTree}
          className="bg-gray-500 text-white rounded px-3 py-1 flex items-center"
        >
          <RotateCcw size={16} className="mr-1" /> Reset Tree
        </button>
      </div>
      <TreeNode node={root} onAddChild={addChild} onRemoveNode={removeNode} />
    </div>
  );
};

export default Tree;
