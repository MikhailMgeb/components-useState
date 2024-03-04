import React, { useState } from 'react';

import { cnCounter } from './Counter.classname';

// import './Counter.css';
import { CountButton } from '../CountButton/CountButton';
import { ValueInput } from '../ValueInput/ValueInput';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount((prev) => prev + 1);
    }

    const handlePlusTenClick = () => {
        setCount((prev) => prev + 10);
    }

    const handlePlusValueClick = (value: number) => {
        setCount((prev) => prev + value);
    }

    return (
        <div className={cnCounter()}>
            <CountButton text={'Количество кликов: '} value={count} onClick={handleClick} />
            <button className={cnCounter('PlusTen', cnCounter('Button'))} onClick={handlePlusTenClick}>
                +10
            </button>
            <ValueInput onSubmit={handlePlusValueClick} />
        </div>
    );
}

export { Counter };