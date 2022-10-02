import React from 'react';
import Container from 'react-bootstrap/Container';
import Emoji from '../components/emoji';



function Home() {
  return (
    <div>
        <Container>
            <h1 className='mt-5'>Bienvenido a <strong>Happy Cake</strong></h1>
            <p>El lugar de los pasteles felices</p>
            <span><Emoji symbol="🎂"/></span>
        </Container>
    </div>
  );
}

export default Home;