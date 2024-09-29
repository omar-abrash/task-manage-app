# Task Management System

This project is a **Task Management System** built with React, designed for efficient task management based on multiple parameters. It prioritizes scalability, maintainability, and performance optimization.

## Features

- **Reusable Components**: Includes reusable UI components such as:

  - `Input`, `TextArea`, `Button`, `Dialog`, `Chip`, `Radio`, `Tooltip`, `Select`
  - Components are built from scratch using HTML, CSS, and JavaScript, with **CSS Modules** to ensure that styles are encapsulated within each component.

- **Animations**: Smooth animations are applied in various places to enhance the user experience and add a polished touch to the UI.

- **Optimized Data Handling**:

  - Destructuring is used for easy and efficient data extraction.
  - All icons are rendered as `ReactComponent` for better control over their behavior and appearance.

- **Dynamic Options List**: The options list used in task filtering is dynamically created in the `utils` folder. Each option is assigned a unique ID generated from a combination of random numbers and the current timestamp.

- **Performance Optimization**:

  - **React.memo** is employed to prevent unnecessary re-renders, enhancing the performance of the app.

- **TaskForm Component**: The `TaskForm` component is reused across different parts of the app, such as task addition and editing, promoting code reusability.

- **Prop Drilling**: The project leverages **props drilling** to pass data between components, as it is built as a single-page application.

- **Responsive Design**: The app is fully responsive, ensuring smooth and consistent behavior across different devices. The design closely follows the provided Figma layout.

- **CreatePortal**: **React's CreatePortal** is used to prevent "div soup" by rendering certain components outside the main DOM hierarchy, maintaining clean and organized markup.

## Folder Structure

The folder structure is organized for scalability and maintainability:

- **routes/**: Contains the route definitions and configuration for the application.
- **layouts/**: Houses layout components that define the structure of the app (e.g., header, footer).
- **pages/**: Holds the different page components for the app.
- **components/**: Contains reusable UI components used across different parts of the app.
- **utils/**: Stores utility functions and dynamic option lists for filtering tasks.
- **assets/**: Includes static assets like images, icons, and styles.

## Installation

To run the project locally:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

## Technologies Used

- **React** for building the user interface.
- **CSS Modules** for scoped and encapsulated component styling.
- **React.memo** for optimizing component rendering.
- **React CreatePortal** to manage DOM structure effectively.
- **HTML/CSS/JavaScript** for custom components and UI.

## Conclusion

This task management system demonstrates best practices in React development, including component reusability, performance optimization, and scalability. The app is designed with a clean architecture and optimized for both functionality and responsiveness.
