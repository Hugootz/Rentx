import React from "react";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Container, Header } from "./styles";

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>
      <ImageSlider
        imagesUrl={[
          "https://i.pinimg.com/originals/0b/7b/31/0b7b31c91bc9fd14fa0e5620bdb80731.png",
        ]}
      />
    </Container>
  );
}
