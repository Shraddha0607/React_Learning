﻿# React_Learning
 # React State, Props, and JSX Demonstration

## Description

This project is a simple React application that demonstrates my understanding of key React concepts such as **State**, **Props**, and **JSX**. It includes various components where I’ve implemented these concepts to create a dynamic and interactive user interface.

## Key Concepts Demonstrated

### 1. **JSX (JavaScript XML)**:
   - **What it is**: JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It makes it easier to define the UI within JavaScript.
   - **In this project**: I used JSX to create the structure and layout of the components. JSX makes it simple to write and manage UI components.

### 2. **State**:
   - **What it is**: State is an object used to store dynamic data within a component. When the state changes, React automatically re-renders the component.
   - **In this project**: I used React’s `useState` hook to manage dynamic data. This allows components to respond to events such as user interactions and update the UI.
   - **Explanation**: In this example, the `count` is stored in state, and when the `increment` function is called, it updates the count.

### 3. **Props**:
   - **What it is**: Props (short for properties) allow you to pass data from a parent component to a child component. Props are read-only and cannot be modified within the child component.
   - **In this project**: I passed dynamic data to child components through props, enabling component reusability and separation of concerns.
   - **Explanation**: The `Greeting` component receives the `name` prop from the `App` component and displays it dynamically.

## How to Run the Project

1. Clone this repository:
   ```bash
   git clone https://github.com/Shraddha0607/React_Learning.git

2. Navigate to the project directory: After cloning the repository, navigate to the project directory:
   ```bash
   cd project-name

3. Install dependencies: Install the necessary dependencies using npm (Node Package Manager):
    ```bash
    npm install

4. Start the development server: Run the development server with the following command:
     ```bash
     npm start

5. View the app in your browser: Once the development server starts, you can view your app in your browser by navigating to:
     ```bash
     https://reactlearning-three.vercel.app/
