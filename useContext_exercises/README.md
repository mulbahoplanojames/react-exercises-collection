# React Context Example

This project demonstrates the use of React Context API to pass down counter and string data through a component tree. The project consists of a Parent component, Child component, and GrandParent component.

## Project Overview

The primary goal of this project is to showcase how to use React Context to manage state and share data between components without prop drilling. The Parent component initializes a counter and a string, and these values are passed down the component tree using React Context.

## Components

### 1. Parent Component
- Initializes a counter and a string using the `useState` hook.
- Provides a function to update the counter state.
- Creates a context using `createContext` to share the counter and string values with child components.
- Renders Child and GrandParent components wrapped in the context provider.

### 2. Child Component
- Consumes the context using `useContext` hook to access and display the counter and string values.
- Utilizes the counter update function provided by the context.

### 3. GrandParent Component
- Similar to the Child component, consumes the context and displays the counter and string values.

## How to Use

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Run the application using `npm start`.

## Project Structure

- `Parent.js`: Contains the main Parent component.
- `Child.js`: Child component consuming the context.
- `GrandParent.js`: GrandParent component consuming the context.

## Technologies Used

- React
- React Context API
