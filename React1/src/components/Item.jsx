/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export const Item = ( { product } ) =>  (
          <Card className='' style={{width: "19rem", height:"34rem" }}>
            <Card.Img height="300" variant="top" src={ product.imageId } />
            <Card.Body>
              <Card.Title>{ product.title }</Card.Title>
              <Card.Text>{ product.description }</Card.Text>
              <Card.Text>${ product.price }</Card.Text>
              <Link to={`/item/${product.id}` }>
                <Button className='botondetalle' variant="primary">Detalles</Button>
              </Link>
            </Card.Body>
          </Card>
        );

