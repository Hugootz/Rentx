import React from "react";
import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";
import { StatusBar } from "react-native";
import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { Car } from "../../components/car";
export function Home() {
  const carData = {
    brand: "Audi",
    name: "RS 5 Coupe",
    rent: {
      period: "AO DIA",
      price: 120,
    },
    thumbnail:
      "https://i.pinimg.com/originals/0b/7b/31/0b7b31c91bc9fd14fa0e5620bdb80731.png",
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      <CarList
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Car data={carData} />}
      />
    </Container>
  );
}
