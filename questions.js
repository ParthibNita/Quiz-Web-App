const questions = [
  {
    question: "What does HTML stand for?",
    choices: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Hyper Text Machine Language", correct: false },
      { text: "Hyper Transfer Markup Language", correct: false },
      { text: "Hyper Transfer Machine Language", correct: false },
    ],
  },
  {
    question: "Which tag is used to define a hyperlink in HTML?",
    choices: [
      { text: "<a>", correct: true },
      { text: "<link>", correct: false },
      { text: "<href>", correct: false },
      { text: "<anchor>", correct: false },
    ],
  },
  {
    question: "What does CSS stand for?",
    choices: [
      { text: "Cascading Style Sheets", correct: true },
      { text: "Computer Style Sheets", correct: false },
      { text: "Creative Style Sheets", correct: false },
      { text: "Colorful Style Sheets", correct: false },
    ],
  },
  {
    question: "Which of the following is used to apply styles in HTML?",
    choices: [
      { text: "<style>", correct: true },
      { text: "<script>", correct: false },
      { text: "<link>", correct: false },
      { text: "<stylesheet>", correct: false },
    ],
  },
  {
    question:
      "What is the correct syntax to refer to an external script file in HTML?",
    choices: [
      { text: "<script href='script.js'>", correct: false },
      { text: "<script src='script.js'>", correct: true },
      { text: "<script link='script.js'>", correct: false },
      { text: "<script file='script.js'>", correct: false },
    ],
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    choices: [
      { text: "style", correct: true },
      { text: "class", correct: false },
      { text: "id", correct: false },
      { text: "css", correct: false },
    ],
  },
  {
    question: "What is the purpose of the 'alt' attribute in an <img> tag?",
    choices: [
      {
        text: "Specifies the alternate text for an image if the image cannot be displayed",
        correct: true,
      },
      { text: "Links the image to another webpage", correct: false },
      { text: "Defines the image format", correct: false },
      { text: "Adds a caption below the image", correct: false },
    ],
  },
  {
    question:
      "Which of the following is the correct way to add a background color in CSS?",
    choices: [
      { text: "background-color: #FFFFFF;", correct: true },
      { text: "color-background: #FFFFFF;", correct: false },
      { text: "bg-color: #FFFFFF;", correct: false },
      { text: "background: #FFFFFF;", correct: false },
    ],
  },
  {
    question: "In JavaScript, what keyword is used to declare a variable?",
    choices: [
      { text: "var", correct: false },
      { text: "const", correct: false },
      { text: "let", correct: false },
      { text: "All of them are correct", correct: true },
    ],
  },
  {
    question: "Which company developed JavaScript?",
    choices: [
      { text: "Microsoft", correct: false },
      { text: "Netscape", correct: true },
      { text: "Google", correct: false },
      { text: "Apple", correct: false },
    ],
  },
  {
    question: "What is the DOM in web development?",
    choices: [
      { text: "Document Object Model", correct: true },
      { text: "Data Object Model", correct: false },
      { text: "Dynamic Object Model", correct: false },
      { text: "Document Oriented Model", correct: false },
    ],
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    choices: [
      { text: "color", correct: true },
      { text: "font-color", correct: false },
      { text: "text-color", correct: false },
      { text: "bg-color", correct: false },
    ],
  },
  {
    question: "In JavaScript, what does '===' signify?",
    choices: [
      { text: "Equality of value", correct: false },
      { text: "Equality of value and type", correct: true },
      { text: "Assignment", correct: false },
      { text: "None of them are correct", correct: false },
    ],
  },
  {
    question:
      "Which of the following is the correct syntax for a JavaScript arrow function?",
    choices: [
      { text: "let myFunc = () => { }", correct: true },
      { text: "let myFunc => () { }", correct: false },
      { text: "let myFunc = > { }", correct: false },
      { text: "let myFunc -> { }", correct: false },
    ],
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    choices: [
      { text: "Number", correct: false },
      { text: "Boolean", correct: false },
      { text: "Float", correct: true },
      { text: "String", correct: false },
    ],
  },
  {
    question: "What is the primary purpose of a CSS Flexbox?",
    choices: [
      { text: "To create grid layouts", correct: false },
      {
        text: "To create flexible layouts that adjust to different screen sizes",
        correct: true,
      },
      { text: "To format text", correct: false },
      { text: "To create animations", correct: false },
    ],
  },
  {
    question: "Which HTML element is used to embed JavaScript code?",
    choices: [
      { text: "<script>", correct: true },
      { text: "<javascript>", correct: false },
      { text: "<js>", correct: false },
      { text: "<code>", correct: false },
    ],
  },
  {
    question: "What is the purpose of the 'async' attribute in a script tag?",
    choices: [
      {
        text: "To execute the script only when the user clicks a button",
        correct: false,
      },
      {
        text: "To load the script asynchronously without blocking HTML parsing",
        correct: true,
      },
      {
        text: "To run the script after all images have loaded",
        correct: false,
      },
      { text: "To enable debugging mode", correct: false },
    ],
  },
  {
    question: "What does the 'box-sizing: border-box;' CSS property do?",
    choices: [
      {
        text: "Includes padding and border in the element's total width and height",
        correct: true,
      },
      {
        text: "Excludes padding and border from the element's total width and height",
        correct: false,
      },
      { text: "Sets the box-shadow property of an element", correct: false },
      { text: "Fixes the element's width and height", correct: false },
    ],
  },
  {
    question:
      "What is the correct syntax to make an API call in JavaScript using the Fetch API?",
    choices: [
      { text: "fetch('url').then(response => response.json())", correct: true },
      { text: "callAPI('url')", correct: false },
      { text: "request('url').getJSON()", correct: false },
      { text: "apiFetch('url').then(data => data)", correct: false },
    ],
  },
];

export default questions;
