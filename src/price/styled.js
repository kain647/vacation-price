import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  z-index: 1;
`;
export const Kayaking = styled.button`
  margin-right: 10px;
  cursor: pointer;
`;
export const Camping = styled.button`
  cursor: pointer;
`;
export const FrontCardContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  flex-direction: column;
  width: 340px;
  height: 530px;
  background-color: #fff;
  backface-visibility: hidden;
  transition: transform 0.9s ease-in-out;
`;
export const BackCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 340px;
  height: 530px;
  background-color: #fff;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  transition: transform 0.9s ease-in-out;
`;
export const CardBox = styled.div`
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${({ front }) => (front ? "rotateY(0deg)" : "rotateY(180deg)")};
  /*.tent {
    transition: transform ease-in-out 0.75s, opacity ease-in-out 0.15s;
    transform: ${({ front }) =>
    front ? "translateX(-250px)" : "translateX(0)"};
    opacity: ${({ front }) => (front ? 0 : 1)};
  }*/
`;
export const Header = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 200px;
  img {
    width: 340px;
    height: 165px;
  }
`;
export const Title = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  letter-spacing: 3px;
  font-size: 22px;
  line-height: 1.7;
  color: #102770;
  margin-bottom: 40px;
  transform: translate3d(0, 0, 35px) perspective(100px);
  :before {
    display: block;
    position: absolute;
    content: "";
    z-index: -1;
    background: linear-gradient(217deg, #448ad5, #b8eaf9);
    width: 70px;
    height: 70px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 6px 20px 0 rgb(16 39 112 / 30%);
    animation: border-transform 6s linear infinite;
    @keyframes border-transform{
      0%,100% { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; }
      14% { border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%; }
      28% { border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%; }
      42% { border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%; }
      56% { border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%; }
      70% { border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%; }
      84% { border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%; }
    }
    
`;
export const TitleBackCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  letter-spacing: 3px;
  font-size: 22px;
  line-height: 1.7;
  color: #0c1c00;
  margin-bottom: 40px;
  transform: translate3d(0, 0, 35px) perspective(100px);
  :before {
    display: block;
    position: absolute;
    content: "";
    z-index: -1;
    background: linear-gradient(217deg, #648946, #a3c984);
    width: 70px;
    height: 70px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 6px 20px 0 rgb(16 39 112 / 30%);
    animation: border-transform 6s linear infinite;
    @keyframes border-transform{
      0%,100% { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; }
      14% { border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%; }
      28% { border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%; }
      42% { border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%; }
      56% { border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%; }
      70% { border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%; }
      84% { border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%; }
    }

`;
export const Price = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 36px;
  line-height: 1.1;
  color: ${({ back }) => (back ? "#0c1c00" : "#102770")};
  margin-bottom: 10px;
  span {
    display: flex;
    font-size: 20px;
    align-items: center;
  }
`;
export const Number = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 1px;
  color: ${({ back }) => (back ? "#0c1c00" : "#102770")};
  margin-bottom: 30px;
`;
export const Icon = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 1px;
  color: ${({ back }) => (back ? "#0c1c00" : "#102770")};
  margin-bottom: 10px;
`;
export const Geolocation = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 1px;
  color: ${({ back }) => (back ? "#0c1c00" : "#102770")};
  margin-bottom: 30px;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  padding: 10px 20px;
  border-radius: 4px;
  text-align: center;
  color: #ffeba7;
  background-color: ${({ back }) => (back ? "#0c1c00" : "#102770")};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  border: none;
  outline: none;
  cursor: pointer;
`;
export const KayakImg = styled.div`
  display: flex;
  position: relative;
  img {
    position: absolute;
    left: -400px;
    bottom: -100px;
    z-index: 1;
  }
`;
export const WaterImg = styled.div`
  display: flex;
  position: relative;
  img {
    position: absolute;
    left: -110px;
    bottom: -140px;
  }
`;
export const Stone = styled.div`
  display: flex;
  position: relative;
  img {
    position: absolute;
    right: -200px;
    bottom: -65px;
  }
  .Back {
    right: -220px;
    bottom: -110px;
  }
`;
export const CampImg = styled.div`
  display: flex;
  position: relative;
  img {
    position: absolute;
    width: 300px;
    height: auto;
    top: -250px;
    left: -250px;
  }
`;
export const IvyImg = styled.div`
  display: flex;
  position: relative;
  img {
    position: absolute;
    width: 300px;
    height: auto;
    top: -280px;
    left: -40px;
  }
`;
