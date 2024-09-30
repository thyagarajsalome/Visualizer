import React, { useState } from "react";
import { ExternalLink, ArrowLeft } from "lucide-react";

// Placeholder component for the main page cards
const PlaceholderComponent = ({ title }) => (
  <div className="bg-gray-100 p-4 rounded-md text-center">
    <p className="text-gray-600">Placeholder for {title}</p>
  </div>
);

// Array Visualizer component
const ArrayVisualizer = () => {
  const [array, setArray] = useState(["apple", "banana", "cherry"]);
  const [newItem, setNewItem] = useState("");
  const [message, setMessage] = useState("");

  const addItem = () => {
    if (newItem.trim() !== "") {
      setArray([...array, newItem.trim()]);
      setNewItem("");
      setMessage(`Added "${newItem.trim()}" to the end of the array.`);
    }
  };

  const removeItem = () => {
    if (array.length > 0) {
      const removedItem = array[array.length - 1];
      setArray(array.slice(0, -1));
      setMessage(`Removed "${removedItem}" from the end of the array.`);
    } else {
      setMessage("Cannot remove from an empty array.");
    }
  };

  const shiftItem = () => {
    if (array.length > 0) {
      const shiftedItem = array[0];
      setArray(array.slice(1));
      setMessage(`Shifted "${shiftedItem}" from the beginning of the array.`);
    } else {
      setMessage("Cannot shift from an empty array.");
    }
  };

  const unshiftItem = () => {
    if (newItem.trim() !== "") {
      setArray([newItem.trim(), ...array]);
      setNewItem("");
      setMessage(
        `Unshifted "${newItem.trim()}" to the beginning of the array.`
      );
    }
  };

  const resetArray = () => {
    setArray([]);
    setNewItem("");
    setMessage("Array has been reset to an empty state.");
  };

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-2 mb-4">
        {array.map((item, index) => (
          <div key={index} className="border p-2 rounded">
            <div className="text-xs text-gray-500">Index: {index}</div>
            <div>{item}</div>
          </div>
        ))}
        {array.length === 0 && (
          <div className="text-gray-500">Array is empty</div>
        )}
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter new item"
          className="flex-grow border rounded px-2 py-1"
        />
        <button
          onClick={addItem}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Push
        </button>
        <button
          onClick={removeItem}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Pop
        </button>
        <button
          onClick={unshiftItem}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          Unshift
        </button>
        <button
          onClick={shiftItem}
          className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
          Shift
        </button>
        <button
          onClick={resetArray}
          className="bg-purple-500 text-white px-3 py-1 rounded"
        >
          Reset
        </button>
      </div>
      {message && (
        <div
          className="bg-gray-100 border-l-4 border-blue-500 text-blue-700 p-4"
          role="alert"
        >
          <p className="font-bold">Action Result</p>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

// Placeholder component for individual pages
const PlaceholderPage = ({ title, onBack }) => (
  <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
      {title}
    </h1>
    <div className="bg-white rounded-lg shadow-md p-6">
      <p className="text-gray-600">
        This is a placeholder page for the {title} component.
      </p>
      <button
        onClick={onBack}
        className="mt-4 inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to Home
      </button>
    </div>
  </div>
);

const VisualizationCard = ({ title, onNavigate }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
    <div className="bg-blue-400 p-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <button
        onClick={onNavigate}
        className="text-white hover:text-blue-100 transition-colors duration-200"
      >
        <ExternalLink size={20} />
      </button>
    </div>
    <div className="p-4 flex-grow">
      <PlaceholderComponent title={title} />
    </div>
  </div>
);

const Home = ({ visualizations, onNavigate }) => (
  <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
      DSA Visualizations
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {visualizations.map((viz, index) => (
        <VisualizationCard
          key={index}
          title={viz.title}
          onNavigate={() => onNavigate(viz.title)}
        />
      ))}
    </div>
  </div>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState(null);

  const visualizations = [
    { title: "Array Visualizer" },
    { title: "Linked List Visualization" },
    { title: "Stack Visualization" },
    { title: "Queue Visualization" },
    { title: "Tree Visualization" },
    { title: "Hash Table Visualization" },
    { title: "Sets Visualization" },
  ];

  const navigateToPage = (title) => {
    setCurrentPage(title);
  };

  const navigateToHome = () => {
    setCurrentPage(null);
  };

  return (
    <div>
      {currentPage ? (
        currentPage === "Array Visualizer" ? (
          <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Array Visualizer
            </h1>
            <ArrayVisualizer />
            <button
              onClick={navigateToHome}
              className="mt-4 inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </button>
          </div>
        ) : (
          <PlaceholderPage title={currentPage} onBack={navigateToHome} />
        )
      ) : (
        <Home visualizations={visualizations} onNavigate={navigateToPage} />
      )}
    </div>
  );
};

export default App;
