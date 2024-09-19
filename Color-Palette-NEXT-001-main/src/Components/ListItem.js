// Imports:

// React: The core React library.
// useState: Hook for managing component state.
// styles: Styles specific to this component (likely defined in Home.module.css).
// ListItem Component:

// Takes two props:
// rgb: A string representing the color in RGB format (e.g., "rgb(255, 0, 0)").
// hex: A string representing the color in hexadecimal format (e.g., "#FF0000").
// State and Helper Function:

// Uses useState hook to manage a boolean state variable copied, initially set to false.
// Defines a function copyToClipboard that:
// Gets the clicked element's text content (the color value).
// Uses the navigator.clipboard.writeText method to copy the color value to the clipboard.
// Render Logic:

// Renders a list item (<li>) with a background color set to the provided rgb value.
// Within the list item, it displays a span element (<span>) that:
// Listens for a click event.
// When clicked, calls copyToClipboard to copy the color value.
// Sets the copied state to true to indicate successful copy.
// Uses a setTimeout function to reset copied back to false after 1 second (for visual feedback).
// Conditionally renders the content based on copied state:
// If copied is true, displays "Copied!" for a brief moment.
// Otherwise, displays the color value in hex format (hex) along with a copy icon (copy).

import React, { useState } from "react";
import styles from "../styles/Home.module.css";

const copy = <i className="far fa-copy"></i>;

function ListItem({ rgb, hex }) {
  const [copied, setCopied] = useState(false);

  // Copy to clipboard element
  const copyToClipboard = (e) => {
    const color = e.target.innerText;
    navigator.clipboard.writeText(color);
  };
  return (
    <li className={styles.colorName} style={{ background: rgb }}>
      <span
        onClick={(e) => {
          copyToClipboard(e);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1000);
        }}
      >
        {copied ? "Copied!" : hex} {copy}
      </span>
    </li>
  );
}
export default ListItem;
