# Image Steganography Tool

This project is a web-based tool that allows users to hide and extract secret messages within images using the Least Significant Bit (LSB) method of steganography. The tool works by modifying the last two bits of each pixel in the image to embed the message.

## Features

- **Hide Messages**: Upload an image, enter a secret message, and the tool will hide the message within the image without noticeably altering its appearance.
- **Extract Messages**: Upload an image that contains a hidden message, and the tool will extract and display the embedded message.
- **Download Image**: After hiding the message, the tool allows you to download the modified image.

## How It Works

1. **Message Hiding**:
   - When an image is uploaded, it is drawn onto an HTML `<canvas>`.
   - The message entered by the user is converted to binary.
   - The binary data is then hidden in the last two bits of the pixel data in the image.

2. **Message Extraction**:
   - When an image is uploaded for extraction, the tool reads the last two bits of each pixel.
   - These bits are reconstructed into the binary form of the message and then converted back to text.

## Technologies Used

- **HTML5 Canvas**: Used to draw and manipulate images.
- **JavaScript**: Implements the core logic for message hiding and extraction.
- **CSS**: Provides basic styling for the webpage.

## Installation and Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/aadityaindr/LSB-STEG
