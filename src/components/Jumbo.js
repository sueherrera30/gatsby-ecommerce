import React from 'react';
import { StyledJumbo } from '../styles/components';
import Image from './image';

const Jumbo = ({ description, subtitle }) => {
    return (
        <StyledJumbo>
            <div>
                <h2>{description}</h2>
                <small>{subtitle}</small>
            </div>
            <Image name='icon' />
        </StyledJumbo>
    );
};
export default Jumbo;