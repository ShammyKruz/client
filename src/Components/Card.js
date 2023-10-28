import React from "react";
import styled from "styled-components";
import Rating from "@material-ui/lab/Rating";
function Card() {
  return (
    <Container>
      <Image>
        <img
          src="https://media.istockphoto.com/id/1449353449/photo/dumbbell-fitness-and-bodybuilder-black-man-with-workout-training-in-gym-or-garage-studio-for.webp?b=1&s=170667a&w=0&k=20&c=lue0I_Eba1LcsUcfQ-rLr0EUWvixQhP122jLeutT-XU="
          alt=""
        />
      </Image>
      <Description>
        <h3>Dumbbell, fitness and bodybuilder black man with workout</h3>
        <Rating
          name="half-rating-read"
          defaultValue={2.5}
          precision={0.5}
          readOnly
        />
        <p>₦ 3,000</p>
        <button /*onClick={addToBasket}*/>Add to Cart</button>
      </Description>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  background-color: #fff;
  z-index: 10;
`;
const Image = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex: 0.3;
  img {
    width: 180px;
    height: 200px;
  }
`;
const Description = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 0.7;

  h5 {
    font-size: 16px;
    font-weight: 600;
  }

  p {
    font-weight: 600;
  }

  button {
    width: 100%;
    height: 33px;
    background-color: #fa8900;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
`;
export default Card;
