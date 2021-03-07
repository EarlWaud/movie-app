import React from 'react';

// // functional component - arrow function
// // WHEN TO USE: 
// // 1. for smaller components
// // 2. reusable components
// // 3. presentional components, partialy right, we can use HOOKS and specify state
// const About = () => {
//     const message = 'Hello World'
//     return (
//         <h1> Hello About Page - {message}</h1>
//     )
// }


// // functional component - arrow function
// const About = () => {
//     const message = 'Hello World'

//     return React.createElement('h1', null, 'I am generating this with createElement')
// }



// // functional component - normal function
// function About () {
//     return (
//         <h1> Hello About Page </h1>
//     )
// }


class About extends React.Component {

    render()  {
        return (
            <h1>Hello.  This is the About Page</h1>
        )
    }
}



export default About