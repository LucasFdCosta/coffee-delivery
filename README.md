# Coffee Delivery

## Project Description

Coffee Delivery is a small React project about a "coffee shop".

This project was first created in brazilian portuguese.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Concepts](#concepts)

## Prerequisites
- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

## Installation

1. Clone the repo:
    ```bash
    git clone https://github.com/LucasFdCosta/coffee-delivery.git
    ```
2. Navigate into the project directory:
    ```bash
    cd coffee-delivery
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```

## Usage

To use the application, follow the instructions above. Then open your web browser and go to `http://localhost:5173`. In the home page you'll see a brief introduction to the shop and a list of products (coffee), which you'll be able to add to the cart and when finished, procede to the checkout. In the checkout you'll be able to fill in the address details and choose the payment method so you can finish the purchase.

## Features

- Listing coffees to buy
- Add items to the cart
- Increase or decrease the number of items in the cart
- Form to fill address details
- Display the total of items multiplied by the quantity

## Concepts
- React
    - State
    - ContextAPI
    - useReducer
    - Routing (react-router-dom)
- UI
    - styled-components
        - Set a global theme
        - Integrate global theme with typescript
    - Phosphor icons (phosphor-react)
- LocalStorage
- react-hook-form
- zod
