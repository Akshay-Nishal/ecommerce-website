import Carousel from 'react-bootstrap/Carousel';

function UICarousel() {
  return (
      <Carousel data-bs-theme="white">
        <Carousel.Item>
          <img style={{height:'200px',opacity:'.75'}}
            className="d-block w-100"
            src="https://imgs.search.brave.com/EU0Gt1ltaYaOZECmWSVDDkHKD229OpmzhTObrOwiPPE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/NDE5ODYzMDA5MTct/NjQ2NzRiZDYwMGQ4/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TTN3/eE1qQTNmREI4TUh4/elpXRnlZMmg4TW54/OGMzUnZjbVY4Wlc1/OE1IeDhNSHg4ZkRB/PSZ3PTEwMDAmcT04/MA"
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'200px',opacity:'.75'}}
            className="d-block w-100"
            src="https://imgs.search.brave.com/ZDWeuI10iZq3G12422XYjNF9MMuGekgyeOButrwX3tY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8x/MS8yMi8yMS81Ny9h/cHBhcmVsLTE4NTA4/MDRfNjQwLmpwZw"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'200px',opacity:'.75'}}
            className="d-block w-100"
            src="https://imgs.search.brave.com/3RHuZzKsruCJSsNWoY6shjxsDYfXkACOw13xVA6Z4UY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/NDM4ODQ1OTAwMjYt/MmU0ZDIxYWVlNzFj/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TTN3/eE1qQTNmREI4TUh4/elpXRnlZMmg4TVRa/OGZITjBiM0psZkdW/dWZEQjhmREI4Zkh3/dyZ3PTEwMDAmcT04/MA"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
}

export default UICarousel;