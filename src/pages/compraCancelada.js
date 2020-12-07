import React from 'react';
import { Link } from 'gatsby';
import { SEO }  from '../components';
import { Button, Purchase } from '../styles/components';

const CompraCancelada = () => (
    <>
        <SEO title='compra cancelada :(' />
        <Purchase>
            <h1>upps! algo paso, la compra se cancelo pero puedes seguir viendo los productos</h1>
            <span rol='img' aria-label='emoji'>🙎‍♀️💔</span>  
            <Link to='/'>
                <Button>Vuelve a la página principal</Button>
            </Link>
        </Purchase>
    </>
);

export default CompraCancelada;