import React from "react";
import './FilterOptions.css'

interface FilterOptionsProps {
  title: string;
  options: string[];
  selectedOption: string;
  onChange: (event: string | React.ChangeEvent<HTMLButtonElement>) => void;
}

const FilterOptions: React.FC<FilterOptionsProps> = ({
  title,
  options,
  selectedOption,
  onChange,
}) => {
  const handleChange = (eventOrOption: React.ChangeEvent<HTMLButtonElement> | string) => {
    if (typeof eventOrOption === "string") {
      onChange(eventOrOption);
    } else {
      onChange(eventOrOption);
    }
  };

  return (
    <div>
      <p>{title}</p>
      <div className="checkbox-container">
        {options.map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterOptions;
