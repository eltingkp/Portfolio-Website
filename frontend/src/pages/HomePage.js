import React from "react";

    function HomePage() {
        return (
           <>
                <h2>
                    About Me and What I've Learned
                </h2>

                <article>
                    <p>My goal is to secure a position as web developer or junior software engineer within 12 months of graduating the post-bacc computer science program.
                        To work towards this goal, I plan on networking, exploring internship opportunities, build my resume, and continue to improve my technical skills.
                    </p>

                    <p>
                        <p>
                            The following concepts are used in my portfolio project:
                        </p>

                        <dl>
                            <dt>HTML</dt>
                                <dd>
                                    HTML stands for HyperText Markup Language. It is a markup language for describing documents that can be retrieved over the web.
                                    A client interprets the HTML in a document it receives in the HTTP response from the server and displays the document.
                                </dd>
                            <dt>CSS</dt>
                                <dd>
                                    CSS is a language used for describing the presentation of documents on the web, while HTML continues to be used for describing the structure 
                                    of the documents.
                                </dd>
                            <dt>JavaScript</dt>
                                <dd>
                                JavaScript is a programming language which can be executed by web browsers. It is a core technology for developing web applications. JavaScript is 
                                used as a general purpose programming language and is also very popular for implementing server side programs. It can be used in both client-side 
                                programs, i.e., programs that run in the web browser, and for server-side programs, i.e., programs that run in the Web Server to process HTTP requests 
                                received from the client and send back HTTP responses to the client.
                                </dd>
                            <dt>Express</dt>
                                <dd>Express is a framework used for building web applications using Node.js. Express handles requests (GET, POST, delete, etc.) and defines the ports and
                                    routes that data will take. </dd>
                                <dd>Handling requests in project</dd>
                            <dt>MongoDB</dt>
                                <dd>MongoDB is a type of Document-oriented DBMS (database management system) software. MongoDB internally stores documents in BSON (a binary form of JSON). 
                                    The MongoDB API displays the documents as JSON, which makes using MongoDB easy to use in Node programs.
                                </dd>
                            <dt>Mongoose</dt>
                                <dd>
                                    Mongoose is a JavaScript library that provides a syntactic layer between the data in a database's collection of documents and the objects in a Node app. 
                                    Mongoose makes it easier for an app to interact with MongoDB. (used in model layer) An object-document mapper (ODM) that maps between classes and objects 
                                    in the JavaScript code and the documents stored in MongoDB. Schemas and models are the main concepts for mapping between documents in MongoDB and objects
                                    in JavaScript code. 
                                </dd>
                            <dt>REST</dt>
                                <dd>
                                    REST means Representational State Transfer. It is an architectural style of implementing web services that follow certain guidelines. A RESTful service is a 
                                    web service that follows REST guidelines. REST APIs are defined by certain constraints. Guidelines for REST include: a server manages collections of resources,
                                    a server should expose collections and resource to the clients using unique URLs, a server should support CRUD operations by providing a set of HTTP methods
                                    (POST, GET, PUT, DELETE), and keeping the server stateless.
                                </dd>
                            <dt>React</dt>
                                <dd>React is a framework for writing frontend applications. Applications in React are based around the concept of components, which are reusable units of UI. React 
                                    applications are written in JavaScript, with additional syntax added by React.</dd>
                        </dl>
                    </p>

                </article>
           </>
        );
    }

    export default HomePage; 