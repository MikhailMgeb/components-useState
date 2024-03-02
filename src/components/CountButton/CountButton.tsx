import React, { MouseEvent, useState } from 'react';

import { cnCountButton } from './CountButton.classname';

import './CountButton.css';

const CountButton = () => {
    const [count, setCount] = useState(0)

    const handleClick = (event: MouseEvent) => {
        setCount(count + 1)
    }

    return (
        <div>
            <button className={cnCountButton()} onClick={handleClick}>
                Количество кликов:{count}
            </button>
        </div>
    );
}

export { CountButton };