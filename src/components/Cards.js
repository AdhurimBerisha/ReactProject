import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/style.scss'

function Cards() {
  const bikes=[
    {
      id: 1,
      model: 'BMW S1000RR ',
      details: 'BMW S1000RR is a race oriented sport bike initially made by BMW Motorrad to compete in the 2009 Superbike World Championship, that is now in commercial production',
      link: 'https://www.bmwmotorcycles.com/en/models/sport/s1000rr.html',
      img: 'https://mcn-images.bauersecure.com/wp-images/4705/1440x960/2023_bmw_s1000rr_01.jpg?mode=max&quality=90&scale=down'   
    },
    {
      id: 2,
      model: 'Kawasaki Ninja H2R',
      details: 'The Kawasaki Ninja H2 is a "supercharged supersport"-class motorcycle in the Ninja sports bike series manufactured by Kawasaki, featuring a variable-speed centrifugal supercharger.',
      link: 'https://www.kawasaki.com/en-us/motorcycle/ninja/hypersport/ninja-h2r',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Kawasaki_Ninja_H2.jpg/1200px-Kawasaki_Ninja_H2.jpg'
    },
    {
      id: 3,
      model: 'Suzuki GSX-R1000',
      details: 'The Suzuki GSX-R1000 is a supersport motorcycle made by Suzuki. It was introduced in 2001 to replace the GSX-R1100 and is powered by a liquid-cooled 999 cc inline four-cylinder.',
      link: 'https://suzukicycles.com/sportbike/2022/gsx-r1000',
      img: 'https://cdn.visordown.com/styles/amp_1200/s3/2020-Suzuki-GSX-R1000R-100th-Anniversary-Limited-Edition-First-Look-5.jpg?itok=OTUU6jBZ'
    }
  ]
  return (
    <Container className='mt-5 mb-5'>
      <Row>
        {
          bikes.map((b)=>{
            return <Col key={b.id}>
              <Card bg='dark' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={b.img} />
      <Card.Body>
        <Card.Title style={{color:'white'}}>{b.model}</Card.Title>
        <Card.Text style={{color:'white'}} >
          {b.details}
        </Card.Text>
        <Button className='btn' variant="primary" href={b.link} target='self'>Visit Website</Button>
      </Card.Body>
    </Card>
    </Col>
          })
        }
    </Row>
    </Container>
  );
}



export default Cards;