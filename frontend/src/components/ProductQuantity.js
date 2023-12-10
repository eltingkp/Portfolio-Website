import React, {useState} from 'react';
import { FaArrowUp, FaArrowDown  } from "react-icons/fa";

function ProductQuantity() {
    const [quantity, setQuantity] = useState(0);
    const increase = () => setQuantity(quantity + 1);
    const decrease  = () => setQuantity(quantity - 1);

        return (
            <div>
                <span>{quantity}</span>
                <FaArrowUp onClick={increase} />
                <FaArrowDown onClick={decrease} />
            </div>
        );
}

export default ProductQuantity;