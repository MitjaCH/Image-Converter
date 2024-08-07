# Image Converter

Welcome to the Image Converter application! This tool allows you to convert images from one format to another easily.

## Version
**1.0.0** 

## Features

- **User-friendly Interface**: A simple and intuitive interface for uploading and converting images.
- **Multiple Format Support**: Convert images to and from various formats.

## Supported Image Formats

### Input Formats:
- JPEG
- PNG
- BMP
- TIFF
- GIF
- WebP

### Output Formats:
- BMP
- JPEG
- PNG
- TIFF
- GIF
- WebP

**Note**: SVG files are currently not supported.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/MitjaCH/image-converter.git
    ```
2. **Install dependencies**:
    ```bash
    cd image-converter
    npm install
    ```

3. **Run the application**:
    ```bash
    npm start
    ```

## Usage

1. **Upload an Image**: Click the "Upload Image" button and select an image file from your computer.
2. **Choose Output Format**: Select the desired output format from the dropdown menu.
3. **Convert**: Click the "Convert" button to start the conversion process.
4. **Download**: After successful conversion, a success message will display the path of the converted image.

## Code Overview

### Main Process (main.js)
- Creates the application window.
- Handles the image conversion logic using the Jimp library.

### Renderer Process (renderer.js)
- Manages the DOM elements and user interactions.
- Sends conversion requests to the main process and handles responses.

### HTML (index.html)
- Contains the structure of the application's user interface.

### CSS
- Uses Materialize CSS for styling the application.

## Error Handling

- Displays error messages if no file is selected, or if the conversion fails.
- Specific error for unsupported SVG files.

## Contributing

Feel free to fork this project and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## Author

[MitjaCH](https://github.com/MitjaCH)

---

Thank you for using Image Converter! If you have any questions or encounter any issues, please open an issue on GitHub.