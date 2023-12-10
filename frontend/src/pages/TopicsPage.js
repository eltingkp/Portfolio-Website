import React from "react"

    function TopicsPage() {
         return (
            <>

            <h2>Web Dev Concepts</h2>

            <nav class="local">
                <a href="#webservers" >Web Servers</a>
                <a href="#frontenddesign" >Frontend Design</a>
                <a href="#optimizingimages" >Optimizing Images</a>
                <a href="#favicons" >Favicons</a>
                <a href="#css" >Cascading Stylesheets</a>
                <a href="#forms" >Forms</a>
                <a href="#express" >Express</a>
                <a href="#javascript" >JavaScript</a>
            </nav>

            <article id="webservers">
                <h3>Web Servers</h3>

                <p>
                    The term <strong>"index"</strong> is used to identify the designated home page of the web server 
                    or the web application. The URL exploration states the file index.html in the root
                    directory is called the homepage of the web application. When a GET request is made 
                    for / is made, it is mapped to the file at the path /index.html. OSU's Apache server uses index.html, 
                    while some, i.e. Microsoft's .NET platform, use default.html as their homepage, and others look for 
                    index.js or index.php as the homepage. 
                </p>

                <p>
                    When reviewing the browser's Web Dev/ Inspector Network tab output 
                    screen from the web browser and the local computer, there appear to be more 
                    differences than similarities. Both show their request method and their 
                    status code, which are the same, and although both show the request URL, 
                    the schemes are different. The web server uses the HTTPS scheme, whereas the local 
                    computer uses the file scheme. Other differences include the key value pairs in the 
                    Response and Request Headers. When the file is viewed from the local computer, 
                    only the content type and the last-modified key value pairs are identified. The 
                    file viewed from the web server includes more information for the user. Items 
                    included in the response header include, accept-range, connection, content-encoding, 
                    length, type, etc. Items included in the request header include encoding, language, 
                    host, etc.
                </p>

                <p>
                    The favicon.ico file has a status 200 because the request succeeded, and the 
                    response body has the needed information. The main.css and main.js files have 
                    the status 404 because the requested resources were not found on the server.
                </p>

                <p>
                    The general structure of a URL is as follows: scheme, subdomain, domain.extension, 
                    path to resource, item in that resource. The different components of the given 
                    URL (https://web.engr.oregonstate.edu/~eltingk/a1-eltingk/) are as follows : the scheme 
                    is HTTPS, the subdomain is web.engr, the domain.extension is oregonstate.edu, the path 
                    to resource is ~eltingk/a1-eltingk, and the item in that resource is index.html. Since the URL 
                    ends with a /, the server maps to the file index.html.
                </p>

            </article>  

            <article id="frontenddesign">
                <h3>Frontend Design</h3>

                <p>
                    <strong>Frontend design</strong> focuses on the visual design of the page, the <strong>graphical user interface </strong>(GUI),
                    and the user's interactive experience. Requirements of the visual design include a consistent 
                    color scheme, font and typography scheme, a photography, icon, illustration scheme, and a 
                    navigation system that makes sense.
                </p>
                
                <dl>
                    <dt><strong>Effective</strong></dt>
                    <dd>Helps the user meet their goal, and produces accurate results.</dd>

                    <dt><strong>Efficient</strong></dt>
                    <dd>The user is able to perform their task with a minimal amount of steps, allowing for quicker results.</dd>

                    <dt><strong>Easy to navigate</strong></dt>
                    <dd>Veteran and first time users understand how to locate and operate their goal and are able to retain
                        the process for the next time they use it.</dd>

                    <dt><strong>Error-free</strong></dt>
                        <dd>Accessibility and availability issues are not present, and potential roadblocks for the user are
                            anticipated by learning what creates common errors.</dd>

                    <dt><strong>Enjoyable</strong></dt>
                        <dd>The user is engaged, and their needs are met through content and design.</dd>

                </dl>

                <p>
                    The <strong>header element</strong> indicates the banner for an app/site. The header element usually includes
                    the name, publisher. To ensure that the user is aware they are on the same app/site as they navigate through 
                    different pages, the header is usually the same from page to page. The <strong>nav element</strong> takes the user 
                    from their current page to a different page. The <strong>main element</strong> identifies the primary block that
                    holds content. The <strong>section element</strong> groups related content together. The <strong>article element</strong> 
                    is usually inside a section and identifies a single specific topic with a second-level headline. The <strong>aside 
                    element</strong> is floating content that is related to an article. This content usually floats to the left or 
                    right of its related article and has different style. It can also be used to create sidebars for navigation or 
                    unrelated content. The <strong>figure and figcaption elements</strong> are similar to the aside element, 
                    but will typically include media like images or a movie. The figure tag wraps around the image and figcaption tags. 
                    The <strong>blockquote element</strong> is used for extended quotations and are visually different from paragraphs to 
                    differentiate the two. The <strong>footer element</strong> can be found below the tag, and it holds legal and contact information,
                    links to critical pages, and the website owner's copyright statement that includes the copyright symbol, the year of 
                    publication, and the owner's name. The <strong>div element</strong> is a placeholder for dynamic content and is also used to 
                    divide content when no other existing element makes sense. 
                </p>

                <ol>
                    <li>Anchors can link to external content by using the href attribute to specify the URL of the external resource. 
                        For example, <a href="https://developer.mozilla.org/en-US/">MDN's Developer Website</a>. </li>

                    <li>Anchors can link to internal content by using IDs. When a tag has an ID attribute, it can be used with a hashtag to define the 
                        reference for the anchor. For example, <a href="#topic" >Topic</a>.</li>
                    
                    <li>Anchors can be used in navigational blocks that appear to be button-like, these allow the user to move from 
                        page-to-page.</li>
                </ol>

            </article>

            <article id="optimizingimages">
                <h3>Optimizing Images</h3>
                <p>
                    The 6 major specifications of images for the web are: descriptive file name, small file size, exact dimensions, correct file format, reduced
                    resolution, and color mode. <strong>Descriptive file name</strong> means file names should include who, what, when and where. File names should be
                    descriptive but concise. <strong>Small file size</strong> means file sizes should be reduced to the smallest size as possible to reduce load time.
                    <strong>Exact dimensions</strong> mean images should be cropped and reduced in size to fit the dimensions of the designated space in the web page.
                    <strong>Correct file format</strong> is to ensure the files are correct format (i.e., .JPG for online photos, .GIF and sometimes 8-bit .PNG for line art,
                    and 24-bit .PNG for graphics with true transparency). <strong>Reduced resolution</strong> notes the range in which monitors render between 72 and 300+ 
                    pixels per inch (ppi) and that including multiple image sizes for each is becoming a standard. <strong>Color mode</strong> notes that RBG is used for .PNG, 
                    .JPG, .SVG, and WebP, and Indexed for .GIF. These 6 specifications are important to optimizing images because they help reduce the time it takes for a browser 
                    to display an image file in its correct size. By ensuring these specifications are met, users will be able to read text and view images instantly, and see an entire
                    image without having to scroll within an area to view. It would also avoid images overlapping with other important information on the page and prevent web servers 
                    around the world from filling up too quickly from large graphic files. 
                </p>

                <p>
                    The most appropriate file formats for photos are .JPG and WebP. According to the exploration, both .JPG and .WebP compress down to small file sizes and remain rectangular. 
                    The most appropriate file formats for line art are .PNG, .SVG, and .GIF. According to the exploration, .PNG files have true transparency (alpha channel) and are best for 
                    biomorphic shapes and line art, and solid colors. The exploration also states that .PNG files can be placed over a variety of colors without getting distorted. In regard to
                    .SVG files, the exploration states they are mathematically-derived and marked with XML for two-dimensional, interactive, or animated images. Lastly, according to the exploration, 
                    .GIF files can have 8-bit transparency and/or animation and are typically used for line-art graphics. Their edges anti-alias to one background matte color. 
                </p>

            </article>

            <article id="favicons">
                <h3>Favicons</h3>
                <p>
                    Browsers and devices use favicons to identify and/or launch websites and apps. 
                </p>


            </article>

            <article id="css">
                <h3>Cascading Stylesheets</h3>
                <p>
                    The main reasons to incorporate stylesheets in websites and apps are because it redefines how the structure, content, and components of the website or app should look and behave. 
                    Cascading stylesheets improve usability, readability, legibility, and adhere to brand requirements.
                </p>

                <p>
                    The 5 ways to incorporate styles are: an externally linked .css file, embedded within a style tag area, inline within an element using an attribute value, JavaScript temperate 
                    literals within a JavaScript function, and regular JavaScript by manipulating the Document Object Model. The first way noted, an externally linked .css file, is used because it is 
                    typically the most efficient and preferred method to use for an app or website. The remaining four listed above are used for one-off style changes.
                </p>

            </article>
                
            <article id="forms">
                <h3>Forms</h3>
                <p>
                    The 6 major goals of accessible forms are: provide clear instructions, let user's know why you're gathering the data and which fields are required, set the first field to autofocus so that
                    users can start typing without a mouse, ensure each form control can be filled in using the keyboard, add tab indexing to complex forms, and ensure validation messages are screen readable.
                    These goals are essential to ensure that new and old users with physical or mental disabilities can use these forms without frustration. For example, setting the first field to autofocus and 
                    ensuring each form control can be filled in using a keyboard gives those who aren't able to use a mouse or trackpad a way to complete the forms, and adding tab indexing to complex forms makes
                    it clear for the user to understand which fields in the form should be filled. 
                </p>

                <p>
                    The major tags are the form tag, fieldset and legend tags, label tag, input tag, select with options tags, text area tag, and button tag. The form tag has two attributes, action and method. 
                    Action specifies where the request should be sent, and method specifies the HTTP method to be used  in the HTTP request sent when the form is submitted. The fieldset and legend tags are used to 
                    separate form controls into logical groups, and the legend tag should include prompts that explain the fieldset's purpose. The label tag helps the user understand the purpose  of the controls and their
                    data entry, it has a for attribute that matches up with form controls ID. The input tag has a type attribute that determines how it is displayed, used, and what other attributes can be included. 
                    Examples of the different "types" include email, checkbox, and radio. The input tag also has the name attribute, which is critical, as it is how the server knows which part of the form each data 
                    item is associated with. Another important input tag attribute is required, which identifies which fields must be completed. The select element provides a drop-down list of choices to the user, 
                    and uses the name attribute. Within the select tag, option tags are used to identify the choices of the drop-down list. The option tag uses the value attribute, and the value of the option 
                    selected by the user will be sent in the request with the name identified in the select tag. The text area element gives users an area to input multiple lines of text. It has its own label tag
                    and attributes. The button element performs the action specified in the form tag.                     
                </p>

                <p>The major form style recommendations to improve the usability include implementing autofocus, color changes (i.e. border color changes), the required attribute, the pattern attribute, the
                    placeholder attribute, and the disabled and enabled attributes. When we consider the size and placement of labels and form controls, it improves the user's ability to use the app on their phones 
                    or larger devices. Considering color and contrast and spacing, can help users understand what is required, and when implementing standard design expectations with unique text and values this helps 
                    the user interact with the website. 
                </p>

            </article>

            <article id="express">
                <h3>Express</h3>
                <p>
                    According to our exploration, TutorialsPoint's definition of Node is, "Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js 
                    applications are written in JavaScript, and can be run within the Node.js runtime on MacOS, Microsoft Windows, and Linux. Node.js also provides a rich library of various JavaScript modules, which 
                    simplifies the development of web applications using Node.js to a great extent."
                </p>

                <p>
                    In regard to npm, to install and manage packages for Node applications, npm is used. According to our exploration on Canvas, npm is an online repository for publishing Node.js packages, and it is 
                    a command-line utility that can install packages from the inline repository and manage the dependencies defined in projects. 
                </p>

                <p>
                    Express is a popular framework used to build web applications using Node.js. It provides APIs of various common tasks that web applications need to do. Using Express allows the developer to utilize
                    get, post, and delete data, as well as define the ports and routes that the data will take. It also allows developers to serve static files and create templates that dynamically build responses that 
                    incorporate that data, and lastly, middleware is used to handle requests made within the route the data takes. 
                </p>

            </article>

            <article id="javascript">
                <h3>JavaScript</h3>
                
                <p>
                    The main data types in JavaScript include: a number, a boolean value (true or false), a string, a symbol, specials values undefined and null, and an object. Primitive types are values other than object types.
                </p>

                <p>
                    In JavaScript, an object is a set of name-value pairs. When using objects, users can create or add, read, update, and delete properties of the object. In JavaScript, arrays are objects that have the strings
                    '0', '1', '2', etc. as their property names. This is because JavaScript requires properties of objects to be of string data type. When using arrays, elements of an array can be accessed using a 0-based integer
                    index in square brackets (string based property names can be used as well), values can be of any JavaScript type, the value undefined is returned if there is an attempt to access an element at an index where 
                    there is no element to return, the method Array.isArray() can be used to determine if the value of a variable is an array, to determine the number elements in an array the length property of an array can be used,
                    the push method adds one or more elements to the end of the array, the pop method removes and returns the last element in the array, and the includes method is used to determine if a specific value exists in the array.
                    Lastly, JSON exchanges data between applications. When using JSON, users can map an object in a program to a string in the JSON format (using JSON.stringify), and create an object in a program from a string in
                    the JSON format (JSON.parse).
                </p>

                <p>
                    Conditionals are used in JavaScript via if and switch statements. In JavaScript, conditions are allowed to contain values of any type. Non-Boolean values are automatically converted to a Boolean value as needed. Two 
                    sets of equality operators are used in JavaScript, "strict equality" and "loose equality" operators, standard comparison operators are used in JavaScript, as are boolean operators. Loops in JavaScript can be implemented
                    using the while statement, do while statement, for loop, for of and for in. 
                </p>

                <p>
                    Object oriented programming is a method of programming in which classes are declared first, and then an object is created that is an instance of those classes. However, in JavaScript, objects can be created without
                    declaring classes.
                </p>

                <p>
                    In regard to functional programming, functions in JavaScript are first class values. This means we can try to assign functions to variables, functions can be arguments to other functions, and define functions that return functions. 
                </p>

            </article>
            </>
                );
            }
            export default TopicsPage;
                