import React from 'react';
import { StyledJumbo } from '../styles/components';

const Jumbo = ({ description, subtitle }) => {
    return (
        <StyledJumbo>
            <div>
                <h2>{description}</h2>
                <small>{subtitle}</small>
            </div>
        </StyledJumbo>
    );
};
export default Jumbo;