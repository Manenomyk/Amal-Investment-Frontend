import React from 'react';
import * as home from 'react-bootstrap';
import investment from '../../images/Assets/Investment 2.jpg';
import './Homepage.css';
import farm from '../../images/Assets/Farm.png'
import investment4 from '../../images/Assets/Investment 4.jpg';
import shares from '../../images/Assets/icons/shares.png';
import multicolor from '../../images/Assets/icons/Multicolor.png';
import img23 from '../../images/Assets/img23.png';
import vk from '../../images/Assets/icons/vk.png';
import mastercard from '../../images/Assets/icons/mastercard.png';
import westunion from '../../images/Assets/icons/western union.png';
import teamviewer from '../../images/Assets/icons/teamviewer.png';

function Homepage() {
  return (
    <div>
    
      <home.Navbar bg="dark" variant="dark" sticky="top">
        <home.Container>
          <home.Navbar.Brand href="#home" style={{fontSize:"2rem"}}>Amal<span>Capital</span> </home.Navbar.Brand>
          <home.Nav className="justify-content-end">
            <home.Nav.Link href="#home" style={{fontSize:"20px"}}>Home</home.Nav.Link>
            <home.Nav.Link href="/Register" style={{fontSize:"20px"}}>Register</home.Nav.Link>
            <home.Nav.Link href="/login" style={{fontSize:"20px"}}>Login</home.Nav.Link>
            <home.Nav.Link href="#contact" style={{fontSize:"20px"}}>Contact</home.Nav.Link>
          </home.Nav>
        </home.Container>
      </home.Navbar>
     

      <div id='home' className="couresel">
        <home.Carousel>
                <home.Carousel.Item>
                      <home.Image
                      className="d-block w-100"
                      src={investment}
                      // style={{h height:"30vh",width:"20px", borderRadius:"50%"}}
                      alt="First slide"
                      fluid
                      />
                  </home.Carousel.Item>
                  <home.Carousel.Item>
                      <home.Image
                      className="d-block w-100"
                      src={investment}
                      // style={{h height:"30vh",width:"20px", borderRadius:"50%"}}
                      alt="First slide"
                      fluid
                      />
                  </home.Carousel.Item>
                  <home.Carousel.Item>
                      <home.Image
                      className="d-block w-100"
                      src={investment}
                      // style={{h height:"30vh",width:"20px", borderRadius:"50%"}}
                      alt="First slide"
                      fluid
                      />
                  </home.Carousel.Item>

        </home.Carousel>
      </div>


      <home.Container>
        <div className='text-center mt-4'><h3><u>CURRENT OPPOTUNITIES</u></h3></div>
        <home.Row className='mt-4 d-flex justify-content-center'>
          <home.Col lg={3} >
            <home.Card className='homecard'>
              <home.Card.Title>
              <home.Image
                      className="d-block w-100"
                      src={farm}
                      style={{height:"30vh"}}
                      alt="First slide"
                      fluid
                      />
              </home.Card.Title>
              <home.Card.Body className='text-center'>
                <div>
                  <h3>Bora Estate</h3>
                  <p>Sunset views and evening group times 
                    create great bonds and memories. The 
                    facility provides for night bornfires,
                    stories and family union.</p>
                </div>

                <div className='d-flex justify-content-end'>
                  <button className='homecardbtn'>Invest</button>
                </div>
              </home.Card.Body>
            </home.Card>
          </home.Col>
          <home.Col lg={3} >
            <home.Card className='homecard'>
              <home.Card.Title>
              <home.Image
                      className="d-block w-100"
                      src={farm}
                      style={{height:"30vh"}}
                      alt="First slide"
                      fluid
                      />
              </home.Card.Title>
              <home.Card.Body className='text-center'>
                <div>
                  <h3>Tunda Farm</h3>
                  <p>Sunset views and evening group times 
                    create great bonds and memories. The 
                    facility provides for night bornfires,
                    stories and family union.</p>
                </div>

                <div className='d-flex justify-content-end'>
                  <button className='homecardbtn'>Invest</button>
                </div>
              </home.Card.Body>
            </home.Card>
          </home.Col>
          <home.Col lg={3} >
            <home.Card className='homecard'>
              <home.Card.Title>
              <home.Image
                      className="d-block w-100"
                      src={farm}
                      style={{height:"30vh"}}
                      alt="First slide"
                      fluid
                      />
              </home.Card.Title>
              <home.Card.Body className='text-center'>
                <div>
                  <h3>Majani Tea</h3>
                  <p>Sunset views and evening group times 
                    create great bonds and memories. The 
                    facility provides for night bornfires,
                    stories and family union.</p>
                </div>

                <div className='d-flex justify-content-end'>
                  <button className='homecardbtn'>Invest</button>
                </div>
              </home.Card.Body>
            </home.Card>
          </home.Col>
        </home.Row>
      </home.Container>


      <hr className='homehr' />

      <home.Container className='mb-5'>
      <div className='text-center mt-4'><h3><u>OUR SERVICES</u></h3></div>

      <home.Row id='homeservices'>
        <home.Col lg={4}>
          <home.Card className='servicescards'>
            <home.Card.Title>
                <home.Image
                      className="d-block w-100"
                      src={investment4}
                      // style={{height:"30vh"}}
                      alt="First slide"
                      fluid
                      />
            </home.Card.Title>
            <home.Card.Body  className='text-center'>
              <h3>Invest</h3>
            </home.Card.Body>
          </home.Card>
        </home.Col>

        <home.Col lg={4}>
          <home.Card className='servicescards'>
            <home.Card.Title>
                <home.Image
                      className="d-block mx-auto mt-2"
                      src={shares}
                      style={{height:"39vh", width:"22vw"}}
                      alt="First slide"
                      fluid
                      />
            </home.Card.Title>
            <home.Card.Body  className='text-center'>
              <h3>Shares</h3>
            </home.Card.Body>
          </home.Card>
        </home.Col>

        <home.Col lg={4}>
          <home.Card className='servicescards'>
            <home.Card.Title>
                <home.Image
                      className="d-block mx-auto mt-2 "
                      src={multicolor}
                      style={{height:"39vh",width:"20vw"}}
                      alt="First slide"
                      fluid
                      />
            </home.Card.Title>
            <home.Card.Body  className='text-center'>
              <h3>Raise Capital</h3>
            </home.Card.Body>
          </home.Card>
        </home.Col>
      </home.Row>
      </home.Container>


      <home.Row className='mb-5'>
        <home.Col lg={6}>
              <home.Image
                      className="d-block w-100 mt-5"
                      src={img23}
                      style={{height:"39vh",width:"20vw"}}
                      alt="First slide"
                      fluid
                      />
        </home.Col>
        <home.Col lg={5} className='text-center'>
          <h3><b><i>Our philosophy</i></b></h3>
          <hr />
          <p>Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and
             scrambled it to make a type specimen book. It has 
             survived not only five centuries, but also the leap 
             into electronic typesetting, remaining essentially 
             unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum
               passages, and more recently with desktop publishing 
               software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </home.Col>
      </home.Row>


      <home.Container className='MB-5'>
        <h3 className='mb-4 text-center'>Companies we have worked with</h3>
        <home.Row>
          <home.Col lg={3}>
            <home.Card>
              
                  <home.Image
                      className="d-block mx-auto mt-2"
                      src={vk}
                      style={{height:"21vh",width:"11vw"}}
                      alt="First slide"
                      fluid
                      />
            <div className='text-center mt-2'>
              <h3><i>Mastercard</i></h3>
             </div>
            </home.Card>
          </home.Col>
          
          <home.Col lg={3}>
            <home.Card>
              
                  <home.Image
                      className="d-block mx-auto mt-2 "
                      src={mastercard}
                      style={{height:"21vh",width:"17vw"}}
                      alt="First slide"
                      fluid
                      />
             <div className='text-center mt-2'>
              <h3><i>Mastercard</i></h3>
             </div>
            </home.Card>
          </home.Col>

          <home.Col lg={3}>
            <home.Card>
              
                  <home.Image
                      className="d-block mx-auto mt-2"
                      src={westunion}
                      style={{height:"20vh",width:"18vw"}}
                      alt="First slide"
                      fluid
                      />
             <div className='text-center mt-2'>
              <h3><i>Western Union</i></h3>
             </div>
            </home.Card>
          </home.Col>

          <home.Col lg={3}>
            <home.Card>
              
                  <home.Image
                      className="d-block mx-auto mt-2"
                      src={teamviewer}
                      style={{height:"20vh",width:"10vw"}}
                      alt="First slide"
                      fluid
                      />
             <div className='text-center mt-2'>
              <h3><i>TeamViewer</i></h3>
             </div>
            </home.Card>
          </home.Col>
        </home.Row>
      </home.Container>


      <home.Row id='contactpage'>
        <home.Col lg={3} className='mx-auto'>
          <h4 id="contact" className='contheads'>About us</h4>

          <p>
          Amal Capital provides a one stop shop 
          for proposalwriting, Capital Raising, 
          Project analysis and project Management,
           Investor engagement and Services to
            organizations and corprate
          </p>
        </home.Col>
        <home.Col lg={2} className='mx-auto'>
          <h4 className='contheads'>What we do</h4>

          <p>Credit</p>
          <p>Investment</p>
          <p>Public Equity</p>
          <p>Real Estate</p>
          <p>Finance</p>
        </home.Col>
        <home.Col lg={2} className='mx-auto'>
          <h4 className='contheads'>Quick Links</h4>

          <p>Home</p>
          <p>The Company</p>
          <p>Our Values</p>
          <p>Our Policy</p>
          <p>Direct Investments</p>
        </home.Col>
        <home.Col lg={3} className='mx-auto'>
          <h4 className='contheads'>Contact details</h4>

          <p>Amal Capital FCB Lenana</p>
          <p>Rd, Nairobi Kenya</p>
          <p>Telephone</p>
          <p>+254 71234567</p>
          <p>+254 71239786567</p>
          <p>+254 798765432</p>
        </home.Col>
      </home.Row>

    </div>
  )
}

export default Homepage