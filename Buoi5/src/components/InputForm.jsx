import "./InputForm.css";
import React, { useState, useRef, useEffect } from "react";

const InputForm = ({onAdd}) => {
  const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
  const [isVisible, setColorVisibility] = useState(false);
  const [textValue, setTextValue] = useState("");
  const colorPickerRef = useRef(null);


  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };
  const chooseColor = (event)=> {
    const bgColor = window.getComputedStyle(event.target).backgroundColor;
    const newCategory = {
      name: textValue.trim(),
      color: bgColor,
      tasks: []
    }
    onAdd(newCategory)
    setTextValue("")
    setColorVisibility(false)
  }

  const handleAddCategory = () =>{
    if (textValue.trim() !== "") {
      setColorVisibility(true)

    }
  }

  const handleBlurColorPicker = (event) => {
    // Check if the related target is within the ColorPicker
    if (!colorPickerRef.current.contains(event.relatedTarget)) {
      setColorVisibility(false);
      setTextValue('')
    }
  };

  useEffect(() => {
    if (isVisible && colorPickerRef.current) {
      colorPickerRef.current.focus();
    }
  }, [isVisible]);
  
  return (
    <div id="InputForm">
      <input
        id="TextBox"
        type="text"
        value={textValue}
        onChange={handleTextChange}
        
        readOnly={isVisible}
      />

      <button id="SubmitButton" onClick={handleAddCategory}>
        Add Category
      </button>

      {isVisible && (
        <div id="ColorPicker" ref={colorPickerRef} tabIndex={0}  onBlur={handleBlurColorPicker} >
          <ul id="ColorList">
            {colors.map((color) => (
              <button
                className="ColorButton"
                id={color}
                onClick={chooseColor}
                button
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InputForm;
