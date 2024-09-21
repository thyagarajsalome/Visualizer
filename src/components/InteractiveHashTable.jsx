import React, { useState, useCallback, useMemo } from "react";
import { Plus, Search, Trash2, RefreshCw } from "lucide-react";

const HASH_TABLE_SIZE = 10;

const InteractiveHashTable = () => {
  const [hashTable, setHashTable] = useState(
    Array(HASH_TABLE_SIZE)
      .fill(null)
      .map(() => [])
  );
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [selectedBucket, setSelectedBucket] = useState(null);

  const hash = useCallback((key) => {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % HASH_TABLE_SIZE;
  }, []);

  const handleAdd = () => {
    if (key && value) {
      const index = hash(key);
      setHashTable((prevTable) => {
        const newTable = [...prevTable];
        const existingItemIndex = newTable[index].findIndex(
          (item) => item.key === key
        );
        if (existingItemIndex !== -1) {
          newTable[index][existingItemIndex] = { key, value };
        } else {
          newTable[index].push({ key, value });
        }
        return newTable;
      });
      setKey("");
      setValue("");
    }
  };

  const handleSearch = () => {
    if (searchKey) {
      const index = hash(searchKey);
      const item = hashTable[index].find((item) => item.key === searchKey);
      setSearchResult(item ? item.value : "Not found");
      setSelectedBucket(index);
    }
  };

  const handleRemove = (bucketIndex, itemKey) => {
    setHashTable((prevTable) => {
      const newTable = [...prevTable];
      newTable[bucketIndex] = newTable[bucketIndex].filter(
        (item) => item.key !== itemKey
      );
      return newTable;
    });
    setSearchResult(null);
  };

  const handleReset = () => {
    setHashTable(
      Array(HASH_TABLE_SIZE)
        .fill(null)
        .map(() => [])
    );
    setKey("");
    setValue("");
    setSearchKey("");
    setSearchResult(null);
    setSelectedBucket(null);
  };

  const loadFactor = useMemo(() => {
    const totalItems = hashTable.reduce(
      (sum, bucket) => sum + bucket.length,
      0
    );
    return totalItems / HASH_TABLE_SIZE;
  }, [hashTable]);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        Interactive Hash Table Visualization
      </h2>

      <div className="mb-4 flex space-x-2">
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Key"
          className="border rounded px-2 py-1 flex-1"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Value"
          className="border rounded px-2 py-1 flex-1"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white rounded px-3 py-1 flex items-center"
        >
          <Plus size={16} className="mr-1" /> Add
        </button>
      </div>

      <div className="mb-4 flex space-x-2">
        <input
          type="text"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          placeholder="Search key"
          className="border rounded px-2 py-1 flex-1"
        />
        <button
          onClick={handleSearch}
          className="bg-green-500 text-white rounded px-3 py-1 flex items-center"
        >
          <Search size={16} className="mr-1" /> Search
        </button>
      </div>

      {searchResult !== null && (
        <div className="mb-4 p-2 bg-yellow-100 rounded">
          <strong>Search Result:</strong> {searchResult}
        </div>
      )}

      <div className="mb-4">
        <strong>Load Factor:</strong> {loadFactor.toFixed(2)}
      </div>

      <div className="border rounded p-4 mb-4">
        <h3 className="text-xl font-semibold mb-2">Hash Table Structure</h3>
        <div className="grid grid-cols-5 gap-2">
          {hashTable.map((bucket, index) => (
            <div
              key={index}
              className={`border p-2 rounded ${
                selectedBucket === index ? "bg-blue-100" : ""
              }`}
              onClick={() => setSelectedBucket(index)}
            >
              <div className="font-bold mb-1">Bucket {index}</div>
              {bucket.length === 0 ? (
                <span className="text-gray-500">Empty</span>
              ) : (
                <ul className="list-disc list-inside">
                  {bucket.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center justify-between"
                    >
                      <span>
                        {item.key}: {item.value}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemove(index, item.key);
                        }}
                        className="text-red-500 hover:text-red-700"
                        title="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleReset}
        className="bg-gray-500 text-white rounded px-3 py-1 flex items-center"
      >
        <RefreshCw size={16} className="mr-1" /> Reset
      </button>
    </div>
  );
};

export default InteractiveHashTable;
