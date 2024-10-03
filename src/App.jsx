import React, { useState } from "react";
import {
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  ArrowUp,
  Plus,
  Minus,
  ChevronRight,
  ChevronDown,
  RotateCcw,
  PlusCircle,
  MinusCircle,
  Check,
  X,
} from "lucide-react";

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

// LinkedListVisualizer
const Node = ({ data, isLast }) => (
  <div className="flex items-center">
    <div className="border-2 border-blue-500 rounded-lg p-2 w-16 h-16 flex items-center justify-center bg-blue-100">
      <span className="text-sm font-bold">{data}</span>
    </div>
    {!isLast && <ArrowRight className="mx-2" />}
  </div>
);

const LinkedListVisualization = () => {
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState("");

  const appendItem = () => {
    if (newItem.trim() !== "") {
      setList([...list, newItem.trim()]);
      setNewItem("");
    }
  };

  const resetList = () => {
    setList([]);
    setNewItem("");
  };

  return (
    <div>
      <div className="flex mb-4">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter item to append"
          className="flex-grow mr-2 px-2 py-1 border rounded"
        />
        <button
          onClick={appendItem}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
        >
          Append
        </button>
        <button
          onClick={resetList}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Reset
        </button>
      </div>
      <div className="flex flex-wrap items-center mt-4">
        {list.map((item, index) => (
          <Node key={index} data={item} isLast={index === list.length - 1} />
        ))}
        {list.length === 0 && (
          <span className="text-gray-500">List is empty</span>
        )}
      </div>
    </div>
  );
};

// StackVisualization
const StackItem = ({ value }) => (
  <div className="border-2 border-purple-500 rounded-lg p-2 w-full h-12 flex items-center justify-center bg-purple-100 mb-1">
    <span className="text-lg font-bold">{value}</span>
  </div>
);

const StackVisualization = () => {
  const [stack, setStack] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [message, setMessage] = useState("");

  const push = () => {
    if (newItem.trim() !== "") {
      setStack([...stack, newItem.trim()]);
      setNewItem("");
      setMessage(`Pushed "${newItem.trim()}" onto the stack.`);
    }
  };

  const pop = () => {
    if (stack.length > 0) {
      const poppedItem = stack[stack.length - 1];
      setStack(stack.slice(0, -1));
      setMessage(`Popped "${poppedItem}" from the stack.`);
    } else {
      setMessage("Cannot pop from an empty stack.");
    }
  };

  const peek = () => {
    if (stack.length > 0) {
      setMessage(`Top element is "${stack[stack.length - 1]}".`);
    } else {
      setMessage("Stack is empty. Cannot peek.");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Stack Visualization</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter item to push"
          className="mr-2 p-2 border rounded"
        />
        <button
          onClick={push}
          className="mr-2 p-2 bg-blue-500 text-white rounded"
        >
          <ArrowDown className="mr-2 h-4 w-4 inline" /> Push
        </button>
        <button
          onClick={pop}
          className="mr-2 p-2 bg-red-500 text-white rounded"
        >
          <ArrowUp className="mr-2 h-4 w-4 inline" /> Pop
        </button>
        <button onClick={peek} className="p-2 bg-green-500 text-white rounded">
          Peek
        </button>
      </div>
      {message && (
        <div className="mb-4 p-2 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
          {message}
        </div>
      )}
      <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg">
        {stack.length === 0 ? (
          <div className="text-center text-gray-500">Stack is empty</div>
        ) : (
          stack
            .slice()
            .reverse()
            .map((item, index) => <StackItem key={index} value={item} />)
        )}
      </div>
    </div>
  );
};

// stack visuilization ends here

// Queue visualization
const QueueItem = ({ value }) => (
  <div className="border-2 border-green-500 rounded-lg p-2 w-24 h-24 flex items-center justify-center bg-green-100 mx-1">
    <span className="text-lg font-bold">{value}</span>
  </div>
);

const QueueVisualization = () => {
  const [queue, setQueue] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [message, setMessage] = useState("");

  const enqueue = () => {
    if (newItem.trim() !== "") {
      setQueue([...queue, newItem.trim()]);
      setNewItem("");
      setMessage(`Enqueued "${newItem.trim()}" to the queue.`);
    }
  };

  const dequeue = () => {
    if (queue.length > 0) {
      const dequeuedItem = queue[0];
      setQueue(queue.slice(1));
      setMessage(`Dequeued "${dequeuedItem}" from the queue.`);
    } else {
      setMessage("Cannot dequeue from an empty queue.");
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Queue Visualization (FIFO)</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter item to enqueue"
          className="mr-2 p-2 border rounded"
        />
        <button
          onClick={enqueue}
          className="mr-2 p-2 bg-blue-500 text-white rounded flex items-center"
        >
          <ArrowRight className="mr-2 h-4 w-4" /> Enqueue
        </button>
        <button
          onClick={dequeue}
          className="p-2 border border-gray-300 rounded flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Dequeue
        </button>
      </div>
      {message && (
        <div className="mb-4 p-2 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
          {message}
        </div>
      )}
      <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg">
        <div className="flex items-center justify-start overflow-x-auto">
          {queue.length === 0 ? (
            <div className="text-center text-gray-500 w-full">
              Queue is empty
            </div>
          ) : (
            <>
              {queue.map((item, index) => (
                <QueueItem key={index} value={item} />
              ))}
            </>
          )}
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <div>Front (Dequeue)</div>
        <div>Back (Enqueue)</div>
      </div>
    </div>
  );
};

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
        {node.children.length > 0 && (
          <button onClick={() => setIsExpanded(!isExpanded)} className="mr-2">
            {isExpanded ? (
              <ChevronDown size={20} />
            ) : (
              <ChevronRight size={20} />
            )}
          </button>
        )}
        <span className="font-semibold">{node.data}</span>
        {node.data !== "root" && (
          <button
            onClick={() => onRemoveNode(node)}
            className="ml-2 text-red-500"
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
          className="border rounded px-2 py-1 mr-2"
        />
        <button
          onClick={handleAddChild}
          className="bg-blue-500 text-white rounded px-2 py-1"
        >
          <Plus size={16} className="mr-1" /> Add Child
        </button>
      </div>
    </div>
  );
};

const Tree = () => {
  const [root, setRoot] = useState({ data: "root", children: [] });

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
    const updateTree = (node) => ({
      ...node,
      children: node.children
        .filter((child) => child !== nodeToRemove)
        .map(updateTree),
    });
    setRoot(updateTree(root));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Tree Visualization</h2>
      <TreeNode node={root} onAddChild={addChild} onRemoveNode={removeNode} />
    </div>
  );
};

// Sets visualization
const SetVisualization = () => {
  const [set, setSet] = useState(new Set());
  const [inputValue, setInputValue] = useState("");
  const [checkValue, setCheckValue] = useState("");
  const [message, setMessage] = useState("");

  const addElement = () => {
    if (inputValue.trim() !== "") {
      setSet((prevSet) => new Set(prevSet).add(inputValue.trim()));
      setInputValue("");
      setMessage(`Added ${inputValue.trim()} to the set.`);
    }
  };

  const removeElement = () => {
    if (inputValue.trim() !== "") {
      const newSet = new Set(set);
      const deleted = newSet.delete(inputValue.trim());
      setSet(newSet);
      setInputValue("");
      setMessage(
        deleted
          ? `Removed ${inputValue.trim()} from the set.`
          : `${inputValue.trim()} not found in the set.`
      );
    }
  };

  const checkElement = () => {
    if (checkValue.trim() !== "") {
      const exists = set.has(checkValue.trim());
      setMessage(
        exists
          ? `${checkValue.trim()} exists in the set.`
          : `${checkValue.trim()} does not exist in the set.`
      );
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Set Visualization
      </h2>

      <div className="flex space-x-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow px-3 py-2 border rounded-md"
          placeholder="Enter an element"
        />
        <button
          onClick={addElement}
          className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          <PlusCircle size={24} />
        </button>
        <button
          onClick={removeElement}
          className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          <MinusCircle size={24} />
        </button>
      </div>

      <div className="flex space-x-2">
        <input
          type="text"
          value={checkValue}
          onChange={(e) => setCheckValue(e.target.value)}
          className="flex-grow px-3 py-2 border rounded-md"
          placeholder="Check for an element"
        />
        <button
          onClick={checkElement}
          className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          <Check size={24} />
        </button>
      </div>

      <div className="bg-gray-100 p-4 rounded-md">
        <h3 className="font-semibold mb-2">Current Set:</h3>
        <div className="flex flex-wrap gap-2">
          {Array.from(set).map((item, index) => (
            <span
              key={index}
              className="bg-blue-200 px-2 py-1 rounded-md text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {message && (
        <div
          className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4"
          role="alert"
        >
          <p>{message}</p>
        </div>
      )}

      <div className="text-sm text-gray-600">
        <p>Set size: {set.size}</p>
      </div>
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
        ) : //
        // ____________________________________________
        currentPage === "Linked List Visualization" ? (
          <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Linked List Visualization
            </h1>
            <LinkedListVisualization />
            <button
              onClick={navigateToHome}
              className="mt-4 inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </button>
          </div>
        ) : // _________________________________________
        currentPage === "Stack Visualization" ? (
          <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Stack Visualization
            </h1>
            <StackVisualization />
            <button
              onClick={navigateToHome}
              className="mt-4 inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </button>
          </div>
        ) : // _____________________Queue Visualization start____________________________

        currentPage === "Queue Visualization" ? (
          <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Queue Visualization
            </h1>

            <QueueVisualization />
            <button
              onClick={navigateToHome}
              className="mt-4 inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </button>
          </div>
        ) : // Tree Visualization

        currentPage === "Tree Visualization" ? (
          <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Tree Visualization
            </h1>

            <Tree />
            <button
              onClick={navigateToHome}
              className="mt-4 inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </button>
          </div>
        ) : // SetVisualization
        currentPage === "Sets Visualization" ? (
          <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Sets Visualization
            </h1>

            <SetVisualization />
            <button
              onClick={navigateToHome}
              className="mt-4 inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </button>
          </div>
        ) : (
          // Place holder for Back
          <PlaceholderPage title={currentPage} onBack={navigateToHome} />
        )
      ) : (
        <Home visualizations={visualizations} onNavigate={navigateToPage} />
      )}
    </div>
  );
};

export default App;
