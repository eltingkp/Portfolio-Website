<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Kathrina Elting</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src='main.js'></script>
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
    <link rel="manifest" href="site.webmanifest">
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png"> 
    <link rel="icon" type="image/png" sizes="512x512" href="android-chrome-512x512.png">
    <link rel="icon" type="image/png" sizes="192x192" href="android-chrome-192x192.png"> 
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png"> 
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png"> 
    <link rel="manifest" href="site.webmanifest"> 
</head>

<body>
    <header>
        <h1>
            Kathrina Elting          

            <img 
            src="/android-chrome-192x192.png" />          

        </h1>
    </header>

    <nav>
        <a href="/index.html">Home</a>
        <a href="/contact.html">Contact</a>
        <a href="/gallery.html">Gallery</a>
        <a href="/order.html">Order</a>
    </nav>


    <main>

        <section>
            <h2 class="order">Order</h2>

            <article>
                <p class="order">Let's order you some pet products!</p>

                <form action="/review-order" method="POST">
                    <fieldset class="info">
                        <legend>Your Contact Info</legend>

                        <p><label for=""firstLast> First and Last Name*
                            <input type="text"
                                name="firstLast"
                                id="firstLast"
                                size="30"
                                maxlength="100"
                                required
                                placeholder="First and last name"
                                autofocus />
                            </label>
                        </p>

                        <p><label for="email">Email*
                            <input
                            type="email"
                            name="email"
                            id="email"
                            size="30"
                            maxlength="100"
                            required
                            pattern="[^@]+@[^@]+.[a-z]+"
                            placeholder="name@host.com" />
                        </label></p>

                        <p><label for="address">Address*
                            <input
                            type="text"
                            name="address"
                            id="address"
                            size="30"
                            maxlength="150"
                            required
                            placeholder="Street address, city, state, zip" />
                        </label></p>

                        <p><label for="instructions">Delivery Instructions</label>
                            <textarea
                                name="instructions"
                                id="instructions"
                                maxlength="500"
                                placeholder="Max 500 characters."
                            ></textarea>
                        </p>

                    </fieldset>

                    <fieldset class="order">
                        <legend>Your Pet Product Order</legend>

                        <table class="order">

                            <caption>Please select ONE product</caption>

                            <thead>
                              <tr>
                                <th>Company</th>
                                <th>Product</th>
                                <th>Price</th>
                              </tr>
                            </thead>

                            <tbody>

                              <tr>
                                <td>AGYM</td>
                                <td>
                                    <label for="agym">
                                        <input type="radio" required name="product" id="agym" value="Spinning Cat Scratcher Ball">
                                        Spinning Cat Scratcher Ball</label>
                                </td>
                                <td>$52.99 </td>
                              </tr>

                              <tr>
                                <td>Jasonwell</td>
                                <td>
                                    <label for="jasonwell">
                                        <input type="radio" name="product" id="jasonwell" value="Foldable Dog Pool">
                                        Foldable Dog Pool</label>
                                    </td>
                                <td>$27.25</td>
                              </tr>

                              <tr>
                                <td>Expawlorer</td>
                                <td>
                                    <label for="expawlorer">
                                        <input type="radio" name="product" id="expawlorer" value="Dog Fence Window">
                                        Dog Fence Window</label>
                                </td>
                                <td>$30.50</td>
                              </tr>

                              <tr>
                                <td>Lollimeow</td>
                                <td>
                                    <label for="lollimeow">
                                        <input type="radio" name="product" id="lollimeow" value="Capsule Pet Travel Backpack">
                                        Capsule Pet Travel Backpack</label>
                                    </td>
                                <td>$59.00</td>
                              </tr>

                              <tr>
                                <td>Drool'd</td>
                                <td>
                                    <label for="drool'd">
                                        <input type="radio" name="product" id="drool'd" value="Cat Hamster Wheel">
                                        Cat Hamster Wheel</label>
                                    </td>
                                <td>$349.75</td>
                              </tr>

                            </tbody>

                        </table>

                        <p><label class="quantity" for="amount">Enter quantity of product (between 1 and 50)*
                            <input
                            type="number"
                            name="amount"
                            id="amount"
                            size="30"
                            maxlength="3"
                            min="1"
                            max="50"
                            required
                            placeholder="1-50" />
                        </label></p>

                        <button type="submit">Submit</button>
                        
                    </fieldset>
                </form>

            </article>

        </section>

    </main>
</body>
</html>