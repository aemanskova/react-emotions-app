import React from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import styled, { CSSObject } from "styled-components";
import backgroundImage1 from "../../img/meditation.jpg";
import backgroundImage2 from "../../img/home2.jpg";
import backgroundImage3 from "../../img/home3.jpg";
import backgroundImage4 from "../../img/comments.jpg";
import { COMMENTS_ROUTE, STICKERS_ROUTE } from "../../app/routing/config";

interface ContentContainerProps {
  background: string;
}

const ContentContainer = styled.div<ContentContainerProps>`
  height: 400px;
  color: #fff;
  font-family: "Rubik", sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 400px;
  text-align: center;
  background: ${(props) => `url(${props.background}) center/cover`};

  h3 {
    position: relative;
    display: inline-block;
    padding: 10px;
    width: 100%;
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
    color: inherit; /* Inherit color from the parent ContentContainer */
  }
`;

const StyledCarousel = styled(Carousel)`
  margin: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ButtonLink = styled(Link)`
  font-family: "Noto Serif", serif;
  background-color: var(--blue);
  font-size: 16px;
  border: none;
  border-radius: 10px;
  color: var(--white);
  padding: 10px 40px;
  height: fit-content;
  &:hover,
  &:focus,
  &:active {
    color: var(--light-blue);
  }

  // Style the span inside the button
  span {
    text-decoration: none; // Remove underline
  }
`;

const Home: React.FC = () => (
  <StyledCarousel autoplay>
    <ContentContainer background={backgroundImage1}>
      <h3>Welcome to the MindfulLife app!</h3>
    </ContentContainer>
    <ContentContainer background={backgroundImage2}>
      <h3>Meditation Practices</h3>
    </ContentContainer>
    <ContentContainer background={backgroundImage3}>
      <h3>
        Sticker Table
        <ButtonLink to={STICKERS_ROUTE} type="primary">
          Go over
        </ButtonLink>
      </h3>
    </ContentContainer>
    <ContentContainer background={backgroundImage4}>
      <h3>
        User comments
        <ButtonLink to={COMMENTS_ROUTE} type="primary">
          Go over
        </ButtonLink>
      </h3>
    </ContentContainer>
  </StyledCarousel>


);

export default Home;
