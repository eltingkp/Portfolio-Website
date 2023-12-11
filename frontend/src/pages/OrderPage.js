import React, { useState } from 'react';
import ProductRow from '../components/ProductRow';
import products from '../data/products';

function OrderPage() {
    return (
        <>
            <h2 class="order">Order</h2>

            <article>
                <p class="order">Let's order you some pet products!</p>

                        <table class="order">

                            <caption>Please select ONE product</caption>

                            <thead>
                            <tr>
                                <th>Company</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                            </thead>

                            <tbody>
                                {products.map((product,index) => <ProductRow product={product} key={index} />)}
                            </tbody>

                        </table>

            </article>


        </>
    );
}
export default OrderPage;    