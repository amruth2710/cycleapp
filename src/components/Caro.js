import { Carousel } from 'react-carousel-minimal';

function Caro() {
 const data = [
    {
      image: "https://cdn.pixabay.com/photo/2021/10/26/16/51/amsterdam-6744567_960_720.jpg",
      caption: `<div>
                  Exciting Offers
                </div>`
    },
    {
      image: "https://cdn.pixabay.com/photo/2015/05/28/22/29/bicycle-788733_960_720.jpg",
      caption: "Summer Sale"
    },
    {
      image: "https://cdn.pixabay.com/photo/2014/09/07/21/59/bicycle-438400_960_720.jpg",
      caption: "Winter Sale"
    },
    {
      image: "https://cdn.pixabay.com/photo/2019/09/10/13/24/bicycle-4466113_960_720.jpg",
      caption: "Flash Sale"
    },
    {
      image: "https://cdn.pixabay.com/photo/2013/07/13/13/46/bicycle-161524_960_720.png",
      caption: "Autumn Sale"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 1px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="100%"
            height="500px"
            captionStyle={captionStyle}
            radius="5px"
            // slideNumber={true}
            // slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            // thumbnails={true}
            // thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Caro;