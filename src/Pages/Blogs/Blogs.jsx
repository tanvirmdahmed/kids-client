import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import useTitle from '../../Hooks/useTitle';



const Blogs = () => {
    const componentRef = useRef();
    useTitle('Blogs');

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const handleClick = () => {
        handlePrint();
    }

    return (
        <div className='w-full mb-5 px-3 md:px-0 lg:px-0'>
            <div ref={componentRef}>
                <div className='my-6'>
                    <h1 className='text-xl md:text-4xl lg:text-4xl text-center font-bold my-10'>Interview Questions Answers</h1>
                </div>
                <div>
                    <div className='bg-image rounded-lg px-16 py-3 my-4'>
                        <p className='text-md md:text-2xl lg:text-2xl text-justify font-bold mb-4'>Q1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                        <p className='text-sm md:text-lg lg:text-lg font-light text-justify mb-2'><strong className='font-bold'>Ans:</strong> Controlled components are the ones that are managed and executed by the system, while uncontrolled components are managed and executed by an external entity or user. Controlled components are internal to the system and their behavior can be predicted and controlled by the system, while uncontrolled components are external to the system and their behavior cannot be predicted or controlled by the system.</p>
                    </div>
                    <div className='bg-image rounded-lg px-16 py-3 my-4'>
                        <p className='text-md md:text-2xl lg:text-2xl text-justify font-bold mb-4'>Q2. Compare SQL and NoSQL databases?</p>
                        <p className='text-sm md:text-lg lg:text-lg font-light text-justify'><strong className='font-bold'>Ans:</strong> To validate React props using PropTypes, you need to define the propTypes object for your component. The propTypes object contains key-value pairs where the key is the name of the prop and the value is the expected data type of the prop.</p>
                    </div>
                    <div className='bg-image rounded-lg px-16 py-3 my-4'>
                        <p className='text-md md:text-2xl lg:text-2xl text-justify font-bold mb-4'>Q3. Tell us the difference between nodejs and express js?</p>
                        <p className='text-sm md:text-lg lg:text-lg font-light text-justify'><strong className='font-bold'>Ans:</strong> Node.js is a JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser. It provides an event-driven architecture and a non-blocking I/O API that makes it a great choice for building scalable network applications. Node.js allows developers to write server-side applications using JavaScript, which is the same language used on the client-side. Express.js is a web application framework for Node.js that provides a set of features and tools for building web applications and APIs. It is built on top of Node.js and provides a simple and flexible API for building HTTP servers, handling requests and responses, and routing URLs. Express.js allows developers to easily create web applications that handle requests from clients and send responses back. In summary, Node.js is a runtime environment for executing JavaScript code outside of a web browser, while Express.js is a web application framework built on top of Node.js that provides a set of features and tools for building web applications and APIs. Node.js provides the underlying platform and runtime environment, while Express.js provides a higher-level abstraction for building web applications on top of Node.js.</p>
                    </div>
                    <div className='bg-image rounded-lg px-16 py-3 my-4'>
                        <p className='text-md md:text-2xl lg:text-2xl text-justify font-bold mb-4'>Q4. What is a custom hook, and why will you create a custom hook?</p>
                        <p className='text-sm md:text-lg lg:text-lg font-light text-justify'><strong className='font-bold'>Ans:</strong> In React, a custom hook is a reusable piece of code that encapsulates some common logic, and can be used across different components. Custom hooks allow developers to extract and share stateful logic between components without having to repeat the same code in each component. Custom hooks follow the naming convention of using the prefix "use" to make it clear that they are hooks. Developers create custom hooks when they find themselves repeating the same code in multiple components. By extracting the shared logic into a custom hook, developers can reduce duplication, simplify code, and make it easier to maintain and update.</p>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <button onClick={handleClick} className='btn btn-outline'>Download PDF</button>
            </div>
        </div>
    );
};

export default Blogs;