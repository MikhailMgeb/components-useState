import React, { FC } from 'react';

import { cnCountButton } from './CountButton.classname';

import './CountButton.css';

type CountButtonProps = {
    text: string;
    value: number;
    onClick: () => void;
}

const CountButton: FC<CountButtonProps> = ({ text, value, onClick }) => {

    return (
        <div className={cnCountButton()}>
            <button className={cnCountButton('PlusOne', cnCountButton('Button'))} onClick={onClick}>
                {text} {value}
            </button>
        </div>
    );
}

export { CountButton };