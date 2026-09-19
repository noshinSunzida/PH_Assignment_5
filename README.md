Project Name: Dev Stack Builder



Description: 

Dev Stack Builder is a React based application. Users can explore different technologies, add them to their stack.
The project is built using React, TypeScript, Tailwind CSS and daisyUI with responsive user interface.



Used Technologies:

React
TypeScript
Tailwind CSS
React Toastify



3 Features:

* Different technologies can be explored
* Customized stack can be built
* New technology cards can be added or removed



Question Answer :



1. What is JSX, and why is it used in React?

=> JSX is a syntax that lets HTML like code to be written inside JavaScript. It makes React UI code easier to read and write.



2.What is the difference between props and state?

=> Data is passed from parent component to child component through props. State is data inside a component that can be changed over time.



3.What does the useState hook do, and where did you use it in this project?

=> It is used to store and update component data. In this project it was used to store the selected Technology Cards.



4.What does the useEffect hook do, and why did you need it to load the JSON data?

=>It is used to fetch or load data when the component starts. It was used to load the technology data from the JSON file.

in this project.



5.Why does every item in a .map() list need a unique key prop?

=>A unique key helps React to identify each item and update the list when something changes.



6.What is conditional rendering? Show one place you used it.

=>Conditional rendering means showing different UI on different condition. In this project, "No Selection" was shown when 
selectedCards.length === 0.



7.How do you pass data from a parent to a child, and how does a child send something back?

=>We pass data from parent to child using props. child send the data back by calling a function that the parent passes to it through props.





































