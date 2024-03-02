import React, { MouseEvent, useState } from 'react';

import { cnPainter } from './Painter.classname';

import './Painter.css';

const Painter = () => {
    const [positions, setPos] = useState<number[][]>([]);

    const handlerMouseMove = (event: MouseEvent) => {
        setPos(prev => [...prev, [event.clientX, event.clientY]]);
    };

    return (
        <div
            className={cnPainter()}
            onMouseMove={handlerMouseMove}
        >
            {positions.map(position =>
                <div className={cnPainter('point')} style={{ top: position[1], left: position[0] }}></div>
            )}
        </div>
    );
}

export { Painter };