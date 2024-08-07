const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
});

document.getElementById('convertButton').addEventListener('click', async () => {
    const fileInput = document.getElementById('fileInput');
    const formatSelect = document.getElementById('formatSelect');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    const outputElement = document.getElementById('output');

    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
    outputElement.textContent = '';

    if (fileInput.files.length === 0) {
        errorMessage.textContent = 'Please select an image file.';
        errorMessage.style.display = 'block';
        return;
    }

    const file = fileInput.files[0];
    const filePath = file.path;
    const format = formatSelect.value;

    if (file.type === 'image/svg+xml') {
        errorMessage.textContent = 'SVG files are not supported.';
        errorMessage.style.display = 'block';
        return;
    }

    try {
        const outputFile = await ipcRenderer.invoke('convert-image', { filePath, format });
        if (outputFile) {
            successMessage.textContent = `Image converted successfully: ${outputFile}`;
            successMessage.style.display = 'block';
        } else {
            errorMessage.textContent = 'Failed to convert image.';
            errorMessage.style.display = 'block';
        }
    } catch (error) {
        errorMessage.textContent = `Error: ${error.message}`;
        errorMessage.style.display = 'block';
    }
});
