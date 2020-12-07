import React from 'react';
import { Link } from 'gatsby';
import { SEO } from '../components';
import { Button, Purchase } from '../styles/components';

const Gracias = () => (
    <div>
        <SEO tltle='compra exitosa' />
        <Purchase>
            <h2>
                ¡Compra exitosa!
            </h2>
            <p>Espero este regalo haga muy feliz a tu ser querido</p>
            <p> recuerda... sigue dibujando sonrisas.</p>
            <span rol='img' aria-label='emoji'>💛</span>
            <Link to='/'>
                <Button>Volver al catálogo</Button>
            </Link>
        </Purchase>
    </div>
);

export default Gracias;