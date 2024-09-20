import React from "react";
import ArrayVisualizer from "./components/ArrayVisualizer";
import LinkedListVisualization from "./components/LinkedListVisualization";

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Data Structure Visualizations
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <h2 className="text-xl font-semibold bg-blue-500 text-white p-4">
            Array Visualizer
          </h2>
          <div className="p-4">
            <ArrayVisualizer />
          </div>
        </div>
        {/* card strat */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <h2 className="text-xl font-semibold bg-green-500 text-white p-4">
            Linked List Visualization
          </h2>
          <div className="p-4">
            <LinkedListVisualization />
          </div>
        </div>
        {/* card -End */}
      </div>
    </div>
  );
};

export default App;
