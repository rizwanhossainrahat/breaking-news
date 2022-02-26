import React from 'react';
import { Card ,Button} from 'react-bootstrap';
const News = (props) => {
   console.log(props.article)
  //  const {title}=props.article;
  
    return (
       
           <Card>
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title></Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

    );
};

export default News;