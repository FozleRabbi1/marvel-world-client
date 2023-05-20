
const Blogs = () => {
    return (
        <div>
           
            <h2 className="text-center font-mono text-2xl font-bold py-5 text-red-500"> this is blog page</h2>

            <div className="blogs-div grid grid-cols-2 gap-14 w-10/12 mx-auto my-10">
                <div>
                    <h2 className="font-bold mb-2 text-purple-800" >What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p>Refresh tokens, being long-lived and more sensitive, should be stored securely on the client-side. A common approach is to store the refresh token in an HTTP-only secure cookie, which can help mitigate the risk of XSS attacks.
                        Storing tokens in HTTP-only secure cookies ensures that they are not accessible to JavaScript code, reducing the risk of token theft through XSS attacks.</p>
                </div>
                <div>
                    <h2 className="font-bold mb-2 text-purple-800" >Compare SQL and NoSQL databases?</h2>
                    <li>SQL: SQL databases are often ACID-compliant (Atomicity, Consistency, Isolation, Durability), ensuring transactional integrity and data consistency. This is beneficial for applications that require strong data consistency guarantees.</li>
                    <li>NoSQL: NoSQL databases, especially those designed for high scalability and performance, may relax ACID properties in favor of improved scalability and availability. They often prioritize eventual consistency over immediate consistency.</li>
                </div>
                <div>
                    <h2 className="font-bold mb-2 text-purple-800" >What is express js? What is Nest JS</h2>
                    <li>Express.js is a popular web application framework for Node.js. It provides a simple and minimalist approach to building web servers and APIs. Express.js offers a range of features and middleware that facilitate routing, request handling, and response management</li>
                    <li>NestJS, on the other hand, is a progressive, TypeScript-based web application framework. It is built on top of Express.js and heavily inspired by Angular, borrowing many of its concepts and features</li>

                </div>
                <div>
                    <h2 className="font-bold mb-2 text-purple-800" >What is MongoDB aggregate and how does it work</h2>
                    <li>Data Flow: The aggregation pipeline processes documents sequentially, passing the results from one stage to the next. Each stage takes the input documents, performs its operation, and passes the modified documents to the next stage. This allows for flexible data manipulation and transformation.</li>
                    <li>Operators: MongoDB provides a rich set of aggregation operators that can be used within the stages to perform various operations. These operators include comparison operators, arithmetic operators, array operators, date operators, conditional operators, and more. Operators can be used to perform calculations, filter data, group documents, project specific fields, and more.</li>
                </div>
            </div>

        </div>
    );
};

export default Blogs;