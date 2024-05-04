/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export const Item = ( { product } ) =>  (
          <Card className="c-flex">
            <Card.Img width="50px" height="200px" variant="top" src={ product.img } />
            <Card.Body>
              <Card.Title>{ product.name }</Card.Title>
              <Card.Text>{ product.detail }</Card.Text>
              <Card.Text>{ product.category }</Card.Text>
              <Link to={"/item/${product.id}" }>
                <Button variant="primary">Comprar</Button>
              </Link>
            </Card.Body>
          </Card>
        );

