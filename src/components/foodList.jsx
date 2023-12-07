import { useState, useEffect } from "react";

const FoodList = ({ filteredFoods, searchTerm }) => {
  const [highlightedList, setHighlightedList] = useState([]);

  const highlightSearchTerm = (text) => {
    if (!searchTerm) {
      return text;
    }

    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.replace(regex, (match) => `<span style="background-color: yellow;">${match}</span>`);
  };

  useEffect(() => {
    // Update the highlighted list whenever filteredFoods or searchTerm changes
    const updatedList = filteredFoods.map((item) => ({
      ...item,
      name: highlightSearchTerm(item.name),
      description: highlightSearchTerm(item.description),
    }));
    setHighlightedList(updatedList);

    console.log('Filtered Foods Changed list:', filteredFoods, "search term:", searchTerm);
  }, [filteredFoods, searchTerm]);

  return (
    <div style={{ textAlign: "left", margin: "3rem" }}>
      {highlightedList.map((item) => (
        <p
          key={item.id}
          dangerouslySetInnerHTML={{
            __html: `<strong>${item.name}:</strong> ${item.description}`,
          }}
        />
      ))}
    </div>
  );
};

export default FoodList;
