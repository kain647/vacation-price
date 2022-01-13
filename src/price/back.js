import React, { useState, useEffect } from "react";
import {
  BackCardContainer,
  Button,
  Geolocation,
  Header,
  Icon,
  Number,
  Price,
  Stone,
  TitleBackCard,
  CampImg,
  IvyImg,
} from "./styled";
import { BsFillGeoAltFill } from "react-icons/bs";
import anime from "animejs";

const BackCard = ({ visible }) => {
  const playAnimation = () => {
    anime({
      targets: ".camp",
      translateX: [
        { value: -100, duration: 0, delay: 0 },
        { value: 0, duration: 750, delay: 300 },
      ],
      opacity: [
        { value: 0, duration: 0, delay: 0 },
        { value: 1, duration: 750, delay: 300 },
      ],
      loop: false,
      easing: "easeOutElastic(1, .8)",
    });
      anime({
          targets: ".Ivy",
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
    <BackCardContainer>
      <Header>
        <img src={"images/grass.png"} />
      </Header>
      <CampImg className="tent" className={"camp"}>
        <img src={"images/camp.png"} />
      </CampImg>
      <IvyImg className={"Ivy"}>
        <img src={"images/Ivy.png"} />
      </IvyImg>
      <TitleBackCard>Camping</TitleBackCard>
      <Price back>
        <span>$</span>
        29 / 8<span>hrs</span>
      </Price>
      <Number back>per person</Number>
      <Icon back>
        <BsFillGeoAltFill />
      </Icon>
      <Geolocation back>Tara, Serbia</Geolocation>
      <Button back>Choose Date</Button>
      <Stone onClick={() => playAnimation()}>
        <img className={"Back"} src={"images/IvyRock.png"} />
      </Stone>
    </BackCardContainer>
  );
};

export default BackCard;
