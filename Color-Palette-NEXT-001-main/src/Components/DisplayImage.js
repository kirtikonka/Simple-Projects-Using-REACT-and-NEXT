// **Imports:**

// - `React`: The core React library for building components.
// - `styles`: Styles specific to this component (likely defined in `Home.module.css`).
// - `ListItem`: Another component used to display individual colors from the palette.

// **DisplayImage Component:**

// - Takes two props:
//     - `uploadedImage`: URL of the uploaded image (if any).
//     - `colorPalette`: An array of arrays representing RGB values for each color.

// **`toHex` function:**

// - Converts a single RGB value (between 0 and 255) to a two-digit hexadecimal string.
// - Prepends a leading zero if the hex value has only one digit.

// **Render Logic:**

// - Displays the uploaded image if available, or a placeholder message otherwise.
// - Conditionally renders a list of colors (`styles.colors`) if `colorPalette` exists.
// - Iterates through each color in `colorPalette`:
//     - Converts the RGB array to a string representation (`rgb`).
//     - Uses the `toHex` function to convert each RGB value in the array to a hex string.
//     - Logs both the RGB and hex values to the console (for debugging purposes).
//     - Renders a `ListItem` component for each color, passing `rgb` and `hex` as props.

import React from "react";
import styles from "../styles/Home.module.css";
import ListItem from "./ListItem";

function DisplayImage({ uploadedImage, colorPalette }) {
  const toHex = (rgb) => {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }

    return hex;
  };

  return (
    <div className={styles.content}>
      <div className="image">
        {uploadedImage ? (
          <img src={uploadedImage} alt="uploaded" />
        ) : (
          <h2>Put An Image Here...</h2>
        )}
      </div>

      {colorPalette && (
        <ul className={styles.colors}>
          {colorPalette.map((color, index) => {
            const rgb = `rgb(${color.join(",")})`;
            const hex = `#${toHex(color[0])}${toHex(color[1])}${toHex(
              color[2]
            )}`;
            console.log(rgb, hex);
            return <ListItem key={index} rgb={rgb} hex={hex} />;
          })}
        </ul>
      )}
    </div>
  );
}
export default DisplayImage;
