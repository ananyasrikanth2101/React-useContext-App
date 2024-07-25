# React useContext Task

A simple React application that displays a list of products and allows users to add products to a cart, adjust quantities, and view the cart with the total quantity, sub-total, and total amount.

## Features

- Display a list of products with details including title, description, price, and image.
- Add products to the cart.
- Adjust the quantity of each product in the cart.
- Remove products from the cart.
- View the total quantity, sub-total, and total amount in the cart.
- Shipping is free for all products.

## Deployment:

    Demo Link: https://anan-react-usecontext-app.netlify.app/

## Technologies Used

- React
- Context API
- Bootstrap
- Font Awesome

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/ananyasrikanth2101/React-useContext-App
    cd React-useContext
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the application:
    ```bash
    npm start
    ```

## Project Structure

```plaintext
React-useContext
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Cart.js
│   │   └── ProductList.js
│   ├── context/
│   │   └── CartContext.js
│   ├── data/
│   │   └── products.json
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── package.json
└── README.md
