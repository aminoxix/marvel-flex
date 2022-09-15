import React from "react";

import { useState } from "react";

import Container from "../components/Home/Container";
import SearchBar from "../components/Home/SearchBar";
import FlexComponent from "../components/Home/Flex";
import Card from "../components/Home/FlipCard";
import Logo from "../components/Navbar/Logo";

import { fetchHeros } from "../libs/utils";

const IMG_FANTASTIC = "portrait_fantastic";

export default function Home() {
  const [heroes, setHeroes] = useState([]);
  const [error, setError] = useState();

  let cards;

  const handleClick = async (e, args) => {
    e.preventDefault();
    if (args === "") return;

    try {
      return await fetchHeros(args);
    } catch (err) {
      return err;
    }
  };

  if (heroes) {
    cards = heroes.map((hero) => (
      <Card
        name={hero.name}
        key={hero.id}
        id={hero.id}
        thumbnail={`${hero.thumbnail.path}/${IMG_FANTASTIC}.${hero.thumbnail.extension}`}
      />
    ));
  }
  
  return (
    <Container>
      <div className="title">
        <Logo
          width={"30%"}
          src={
            "https://www.freepnglogos.com/uploads/marvel-logo-png/new-marvel-studios-logo-debuted-marvelstudios-3.png"
          }
          text={"Marbabel"}
        />
      </div>
      <SearchBar
        handleClick={handleClick}
        setHeroes={setHeroes}
        setError={setError}
      />
      <h2 className="text-center">what's your favourite character?</h2>
      {error ? <p>{error}</p> : null}
      <FlexComponent>
        {cards.length
          ? cards
          : [
              {
                id: "1017105",
                name: "captain-america",
                thumbnail:
                  "http://i.annihil.us/u/prod/marvel/i/mg/3/10/52321928eaa72.jpg",
              },
              {
                id: 1009351,
                name: "hulk",
                thumbnail:
                  "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0.jpg",
              },
              {
                id: 1009368,
                name: "iron man",
                thumbnail:
                  "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg",
              },
              {
                id: 1009664,
                name: "thor",
                thumbnail:
                  "http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350.jpg",
              },
              {
                id: 1009407,
                name: "loki",
                thumbnail:
                  "http://i.annihil.us/u/prod/marvel/i/mg/d/90/526547f509313.jpg",
              },
              {
                id: 1014858,
                name: "spider-man",
                thumbnail:
                  "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/5317717bed6fe.jpg",
              },
              {
                id: 1011358,
                name: "doctor-strange",
                thumbnail:
                  "http://i.annihil.us/u/prod/marvel/i/mg/8/f0/53176bbb6dc50.jpg",
              },
              {
                id: 1010743,
                name: "groot",
                thumbnail:
                  "http://i.annihil.us/u/prod/marvel/i/mg/3/10/526033c8b474a.jpg",
              },
              {
                id: 1009652,
                name: "thanos",
                thumbnail:
                  "http://i.annihil.us/u/prod/marvel/i/mg/6/40/5274137e3e2cd.jpg",
              },
            ].map((hero) => (
              <Card
                name={hero.name}
                key={hero.id}
                id={hero.id}
                thumbnail={`${hero.thumbnail}`}
              />
            ))}
      </FlexComponent>
    </Container>
  );
}
