export const faqs = [
    {
        id: 1,
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces. It allows you to create reusable components and efficiently update the UI when your application state changes.",
    },
    {
        id: 2,
        question: "What is a React component?",
        answer: "A component is a reusable piece of UI in a React application. Components can contain their own logic, markup, and state, and they can be combined to build larger interfaces.",
    },
    {
        id: 3,
        question: "What is JSX?",
        answer: "JSX is a syntax extension for JavaScript that allows you to write HTML-like markup directly inside JavaScript. React uses JSX to describe what the UI should look like.",
    },
    {
        id: 4,
        question: "What is state in React?",
        answer: "State is data that belongs to a component and can change over time. When state changes, React re-renders the component so the UI can reflect the new state.",
    },
    {
        id: 5,
        question: "What are props?",
        answer: "Props are values passed from a parent component to a child component. They allow components to receive data and behavior from the components that render them.",
    },
    {
        id: 6,
        question: "What is the difference between state and props?",
        answer: "Props are passed into a component by its parent and should be treated as read-only. State is managed by the component itself and can change over time.",
    },
    {
        id: 7,
        question: "Why do we use keys when rendering lists?",
        answer: "Keys help React identify which items in a list have changed, been added, or been removed. Each item should have a stable and unique key.",
    },
    {
        id: 8,
        question: "What does useState do?",
        answer: "useState is a React Hook that allows a functional component to store and manage state. It returns the current state value and a function that can update it.",
    },
    {
        id: 9,
        question: "What happens when state changes?",
        answer: "When a component's state changes, React schedules a re-render. React then updates the parts of the DOM that need to change so the interface reflects the new state.",
    },
    {
        id: 10,
        question: "Can a component have multiple pieces of state?",
        answer: "Yes. A component can use useState multiple times to manage different pieces of state. Each state variable can represent a separate piece of information.",
    },
];
