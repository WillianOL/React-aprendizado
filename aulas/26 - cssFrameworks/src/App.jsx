import React from 'react';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <>
      <Card bg="dark" text="white" className="m-5">
        <Card.Header>Notebook</Card.Header>
        <Card.Body>
          <Card.Title>R$ 2500,00</Card.Title>
          <Card.Text>Lorem ipsum dolor sit amet.</Card.Text>
        </Card.Body>
      </Card>
      <div className='card bg-dark text-white m-5'>
       <div className='card-header'>Notebook</div>
       <div className='card-body'>
         <h5 className='card-title'>R$ 2500,00</h5>
         <p className='card-text'>Lorem ipsum dolor sit amet.</p>
       </div>
     </div>
    </>
  );
}

export default App;
