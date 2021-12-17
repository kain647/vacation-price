import React, { useState } from "react";
import FrontCard from "./front";
import BackCard from "./back";
import { Container, CardBox, ButtonBox, Kayaking, Camping } from "./styled";

const Price = () => {
  const [front, isFront] = useState(true);
  return (
    <Container>
      <ButtonBox>
        <Kayaking onClick={()=> isFront(true)}>Kayaking</Kayaking>
        <Camping onClick={()=>isFront(false)}>Camping</Camping>
      </ButtonBox>
      <CardBox front={front}>
        <FrontCard visible={front}/>
        <BackCard visible={!front}/>
      </CardBox>
    </Container>
  );
};

export default Price;
