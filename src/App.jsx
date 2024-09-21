import React from "react";
import ArrayVisualizer from "./components/ArrayVisualizer";
import LinkedListVisualization from "./components/LinkedListVisualization";
import StackVisualization from "./components/StackVisualization";
import QueueVisualization from "./components/QueueVisualization";
import Tree from "./components/Tree";
import HashTable from "./components/nteractiveHashTable";

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        DSA Visualizations
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <h2 className="text-xl font-semibold bg-blue-400 text-white p-4">
            Array Visualizer
          </h2>
          <div className="p-4">
            <ArrayVisualizer />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <h2 className="text-xl font-semibold bg-blue-400 text-white p-4">
            Linked List Visualization
          </h2>
          <div className="p-4">
            <LinkedListVisualization />
          </div>
        </div>
        {/* card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <h2 className="text-xl font-semibold bg-blue-400 text-white p-4">
            Stack Visualization
          </h2>
          <div className="p-4">
            <StackVisualization />
          </div>
        </div>
        {/* card */}
        {/* card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <h2 className="text-xl font-semibold bg-blue-400 text-white p-4">
            Queue Visualization
          </h2>
          <div className="p-4">
            <QueueVisualization />
          </div>
        </div>
        {/* card */}
        {/* card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <h2 className="text-xl font-semibold bg-blue-400 text-white p-4">
            Tree Visualization
          </h2>
          <div className="p-4">
            <Tree />
          </div>
        </div>
        {/* card */}
        {/* card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <h2 className="text-xl font-semibold bg-blue-400 text-white p-4">
            Hash Table Visualization
          </h2>
          <div className="p-4">
            <HashTable />
          </div>
        </div>
        {/* card */}
      </div>
    </div>
  );
};

export default App;
