import React, { useEffect } from "react";
import { BsFillGeoAltFill } from "react-icons/bs";
import {
  FrontCardContainer,
  Header,
  Title,
  Price,
  Number,
  Icon,
  Geolocation,
  Button,
  KayakImg,
  WaterImg,
  Stone,
} from "./styled";
import anime from "animejs/lib/anime.es.js";

const FrontCard = ({ visible }) => {
  const playAnimation = () => {
    anime({
      targets: ".kayak",
      translateX: [
        { value: -550, duration: 0, delay: 0 },
        { value: 0, duration: 750, delay: 300 },
      ],
      opacity: [
        { value: 0, duration: 0, delay: 0 },
        { value: 1, duration: 750, delay: 300 },
      ],
      loop: false,
      easing: "easeOutElastic(1, .8)",
    });
    /*anime({
      targets: ".water-header",
      translateY: [
        { value: -150, duration: 0, delay: 0 },
        { value: 0, duration: 700, delay: 350 },
      ],
      opacity: [
        { value: 0, duration: 0, delay: 0 },
        { value: 1, duration: 1500, delay: 0 },
      ],
      loop: false,
      easing: "easeOutExpo",
    });*/
    anime({
      targets: ".water",
      translateX: [
        { value: -50, duration: 0, delay: 0 },
        { value: 0, duration: 650, delay: 400 },
      ],
      opacity: [
        { value: 0, duration: 0, delay: 0 },
        { value: 1, duration: 450, delay: 400 },
      ],
      scale: [
        { value: 0, duration: 0, delay: 0 },
        { value: 1, duration: 900, delay: 400 },
      ],
      rotate: [
        { value: -30, duration: 0, delay: 0 },
        { value: 15, duration: 900, delay: 400 },
      ],
      loop: false,
      easing: "easeOutElastic(2, .8)",
    });
  };

  useEffect(() => {
    if (visible) {
      //console.log({ timeline });
      playAnimation();
    }
  }, [visible]);
  return (
    <FrontCardContainer>
      <Header>
        <img className={"water-header"} src={"images/sea.png"} />
      </Header>
      <KayakImg className="kayak">
        <img src={"images/kayak.png"} />
      </KayakImg>
      <WaterImg className="water">
        <img src={"images/water.png"} />
      </WaterImg>
      <Title>Kayaking</Title>
      <Price>
        <span>$</span>
        39 / 4<span>hrs</span>
      </Price>
      <Number>per person</Number>
      <Icon>
        <BsFillGeoAltFill />
      </Icon>
      <Geolocation>Drina, Serbia</Geolocation>
      <Button>Choose Date</Button>
      <Stone
        onClick={() => {
          playAnimation();
        }}
      >
        <img src={"images/stone.png"} />
      </Stone>
    </FrontCardContainer>
  );
};

export default FrontCard;
