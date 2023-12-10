import React, { useState } from 'react';
import ProductRow from '../components/ProductRow';

function OrderPage() {
    return (
        <>
            <h2 class="order">Order</h2>

            <article>
                <p class="order">Let's order you some pet products!</p>

                <form action="/review-order" method="POST">
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
                                        <input type="radio" required name="product" id="agym" value="Spinning Cat Scratcher Ball"/>
                                        Spinning Cat Scratcher Ball</label>
                                </td>
                                <td>$52.99 </td>
                            </tr>

                            <tr>
                                <td>Jasonwell</td>
                                <td>
                                    <label for="jasonwell">
                                        <input type="radio" name="product" id="jasonwell" value="Foldable Dog Pool"/>
                                        Foldable Dog Pool</label>
                                    </td>
                                <td>$27.25</td>
                            </tr>

                            <tr>
                                <td>Expawlorer</td>
                                <td>
                                    <label for="expawlorer">
                                        <input type="radio" name="product" id="expawlorer" value="Dog Fence Window"/>
                                        Dog Fence Window</label>
                                </td>
                                <td>$30.50</td>
                            </tr>

                            <tr>
                                <td>Lollimeow</td>
                                <td>
                                    <label for="lollimeow">
                                        <input type="radio" name="product" id="lollimeow" value="Capsule Pet Travel Backpack"/>
                                        Capsule Pet Travel Backpack</label>
                                    </td>
                                <td>$59.00</td>
                            </tr>

                            <tr>
                                <td>Drool'd</td>
                                <td>
                                    <label for="drool'd">
                                        <input type="radio" name="product" id="drool'd" value="Cat Hamster Wheel"/>
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


        </>
    )
}
            