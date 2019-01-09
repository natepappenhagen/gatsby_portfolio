/* global tw */
import React from "react";
import styled from "react-emotion";
import "typeface-cantata-one";
import "typeface-open-sans";

import SEO from "../components/SEO";
import SVG from "../components/SVG";
import ProjectCard from "../components/ProjectCard";
import {
  rotate,
  UpDown,
  UpDownWide,
  waveAnimation
} from "../styles/animations";
import { hidden } from "../styles/utils";
import { colors } from "../../tailwind";
import triangle from "../images/triangle.svg";
import avatar from "../images/avatar.jpg";
import "../styles/global";

let Parallax;
let ParallaxLayer;

if (typeof window !== "undefined") {
  ({ Parallax, ParallaxLayer } = require("react-spring/dist/addons"));
} else {
  Parallax = () => <React.Fragment />;
  ParallaxLayer = () => <React.Fragment />;
}

const Divider = styled(ParallaxLayer)`
  ${tw("absolute w-full h-full")};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

const DividerMiddle = styled(Divider)`
  clip-path: polygon(50% 0, 100% 30%, 100% 100%, 50% 70%, 0 100%, 0 30%);
`;

const Content = styled(ParallaxLayer)`
  ${tw("p-6 md:p-12 lg:p-24 justify-center items-center flex z-50")};
`;

const Hero = styled.div`
  ${tw("w-full xl:w-2/3")};
`;

const Inner = styled.div`
  ${tw("w-full xxl:w-2/3 text-center lg:text-left")};
`;

const BigTitle = styled.h1`
  ${tw("text-5xl md:text-5xl font-serif text-white mb-5 tracking-wide")};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

const Title = styled.h1`
  ${tw(
    "text-4xl lg:text-4xl font-serif text-white mb-8 tracking-wide relative inline-block"
  )};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: "";
    width: 50px;
    height: 50px;
    background: url(${triangle});
    position: absolute;
    background-size: 50px;
    animation: ${rotate} 4s linear infinite;
    left: -60px;
    top: 5px;
  }
`;

const Subtitle = styled.p`
  ${tw("text-2xl lg:text-3xl font-sans text-white mt-8 xl:w-3/4")};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

const ProjectsWrapper = styled.div`
  ${tw("flex flex-wrap justify-between mt-8")};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const WaveWrapper = styled.div`
  ${tw("absolute pin-b w-full")};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw("relative h-full")};
  svg {
    width: 100%;
    height: 40vh;
  }
`;

const AboutHero = styled.div`
  ${tw("flex flex-col lg:flex-row items-center mt-8")};
`;

const Avatar = styled.img`
  ${tw("rounded-full w-32 xl:w-48 shadow-lg h-auto")};
`;

const AboutSub = styled.span`
  ${tw("text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl")};
`;

const AboutDesc = styled.p`
  ${tw(
    "text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify"
  )};
`;

const ContactText = styled.p`
  ${tw("text-grey-light font-sans text-xl md:text-2xl lg:text-3xl")};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Footer = styled.footer`
  ${tw(
    "text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg"
  )};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Index = () => (
  <React.Fragment>
    <SEO />
    <Parallax pages={5}>
      <Divider speed={0.2} offset={0}>
        <UpDown>
          <SVG
            icon="triangle"
            width={8}
            stroke={colors["grey-darker"]}
            left="80%"
            top="70%"
          />
          <SVG
            icon="teardrop"
            width={6}
            fill={colors["grey-darkest"]}
            left="10%"
            top="10%"
          />
          <SVG
            icon="triangle"
            className={hidden}
            width={48}
            stroke={colors["orange"]}
            left="8%"
            top="30%"
          />
          <SVG
            icon="map"
            className={hidden}
            width={48}
            fill={colors["grey-darkest"]}
            left="60%"
            top="70%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="hexa"
            width={24}
            stroke={colors["pink-dark"]}
            left="10%"
            top="70%"
          />
          <SVG
            icon="stack"
            width={32}
            fill={colors["teal"]}
            left="70%"
            top="5%"
          />
          <SVG
            icon="teardrop"
            className={hidden}
            width={8}
            fill={colors["grey-darkest"]}
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <SVG
          icon="map"
          width={8}
          fill={colors["grey-darkest"]}
          left="90%"
          top="90%"
        />
        <SVG
          icon="stack"
          width={10}
          fill={colors["grey-darkest"]}
          left="25%"
          top="5%"
        />
        <SVG
          icon="terminal"
          width={12}
          fill={colors["grey-darkest"]}
          left="40%"
          top="30%"
        />
      </Divider>
      <Content speed={0.4} offset={0}>
        <Hero>
          <BigTitle>
            Hello, <br /> I'm Nate Pappenhagen.
          </BigTitle>
          <Subtitle>& I love building modern web applications</Subtitle>
        </Hero>
      </Content>
      <DividerMiddle
        bg="linear-gradient(to right, #355c7d, #6c5b7b, #c06c84)"
        speed={-0.2}
        offset={1.1}
        factor={2}
      />
      <Content speed={0.4} offset={1.2} factor={2}>
        <Inner>
          <Title>Projects</Title>
          <ProjectsWrapper>
            <ProjectCard
              title="Etherscan's REST API wrapped in graphQL (Please append /staging to endpoint to reach server)"
              link="https://github.com/natepappenhagen/etherscan-graphQL-API"
              bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
            >
              Transforming Etherscan.io's REST api into a fancy GraphQL api
            </ProjectCard>
            <ProjectCard
              title="Writers Blog"
              link="https://github.com/natepappenhagen/Project4_Blog"
              bg="linear-gradient(to right, #108dc7 0%, #ef8e38 100%)"
            >
              Simple blog app built with Python Django '&' Postgres on the
              backend and React on the frontend.
            </ProjectCard>
            <ProjectCard
              title="Piggy Bank"
              link="https://github.com/natepappenhagen/piggy-bank"
              bg="linear-gradient(to right, #3CA55C 0%, #B5AC49 100%)"
            >
              Basic CryptoCurrency portfolio tracker. My first foray into
              full-stack web-apps built entirely with NodeJS. Standard MVC
              philosophy (no front end framework was used) views were managed
              with EJS templating.
            </ProjectCard>
            <ProjectCard
              title="World DOM-ination"
              link="https://github.com/natepappenhagen/world_DOM_ination"
              bg="linear-gradient(to right, #acb6e5 0%, #86fde8 100%)"
            >
              Simple risk-like 2 player game where the goal is to try to win all
              of the tiles in the map w/o getting too unlucky battling the other
              player!
            </ProjectCard>
          </ProjectsWrapper>
        </Inner>
      </Content>
      <Divider speed={0.1} offset={1} factor={2}>
        <UpDown>
          <SVG
            icon="terminal"
            width={6}
            stroke={colors["red-lightest"]}
            left="85%"
            top="75%"
          />
          <SVG
            icon="hexa"
            width={16}
            stroke={colors["teal"]}
            left="70%"
            top="20%"
          />
          <SVG
            icon="teardrop"
            width={6}
            fill={colors["grey-dark"]}
            left="4%"
            top="20%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="terminal"
            className={hidden}
            width={16}
            stroke={colors["orange-dark"]}
            left="20%"
            top="90%"
          />
          <SVG
            icon="triangle"
            className={hidden}
            width={16}
            stroke={colors.teal}
            left="18%"
            top="75%"
          />
          <SVG
            icon="terminal"
            className={hidden}
            width={8}
            stroke={colors.teal}
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <SVG
          icon="teardrop"
          width={12}
          fill={colors.pink}
          left="80%"
          top="60%"
        />
        <SVG icon="map" width={12} fill={colors.yellow} left="10%" top="26%" />
        <SVG
          icon="hexa"
          width={8}
          stroke={colors.yellow}
          left="80%"
          top="70%"
        />
      </Divider>
      <Divider
        bg="#23262b"
        clipPath="polygon(50% 31%, 100% 0, 100% 75%, 50% 100%, 0% 75%, 0 0)"
        speed={0.2}
        offset={3}
      />
      <Divider speed={0.1} offset={3}>
        <UpDown>
          <SVG
            icon="teardrop"
            width={12}
            stroke={colors["green-darker"]}
            left="7%"
            top="20%"
          />
          <SVG
            icon="triangle"
            className={hidden}
            width={6}
            stroke={colors["indigo-dark"]}
            left="50%"
            top="75%"
          />
          <SVG
            icon="hexa"
            className={hidden}
            width={16}
            stroke={colors["grey-darkest"]}
            left="70%"
            top="20%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="map"
            className={hidden}
            width={16}
            stroke={colors["green-darker"]}
            left="5%"
            top="80%"
          />
          <SVG
            icon="triangle"
            width={12}
            stroke={colors.white}
            left="95%"
            top="50%"
          />
          <SVG
            icon="teardrop"
            width={6}
            stroke={colors.white}
            left="80%"
            top="15%"
          />
        </UpDownWide>

        <SVG
          icon="terminal"
          width={6}
          fill={colors.orange}
          left="10%"
          top="10%"
        />
        <SVG
          icon="terminal"
          width={12}
          fill={colors["grey-darkest"]}
          left="20%"
          top="30%"
        />
        <SVG
          icon="hexa"
          width={8}
          stroke={colors["grey-darkest"]}
          left="80%"
          top="70%"
        />
      </Divider>
      <Content speed={0.4} offset={3}>
        <Inner>
          <Title>About</Title>
          <AboutHero>
            <Avatar src={avatar} alt="Nate Pappenhagen" />
            <AboutSub>building software out of Denver, Colorado</AboutSub>
          </AboutHero>
          <AboutDesc>
            Front end leaning & believer in strong user experience full stack
            developer. ​Beyond tech, I enjoy climbing and being a dad.
            <br />
            Previously, I've{" "}
            <a href="https://generalassemb.ly/" target="_blank">
              learned to code
            </a>
            , served thousands of people{" "}
            <a href="https://www.houndstoothcoffee.com/" target="_blank">
              specialty coffee
            </a>
            , and climbed in a 24 hour climbing{" "}
            <a href="https://www.twofourhell.com/" target="_blank">
              festival{" "}
            </a>
            in Arkansas for 6 years. I also hold a degree in{" "}
            <a href="https://xkcd.com/977/" target="_blank">
              geography
            </a>
            , from the University of North Texas.
          </AboutDesc>
        </Inner>
      </Content>
      <Divider fill={colors["indigo-darkest"]} speed={0.2} offset={4}>
        <WaveWrapper>
          <InnerWave>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 338.05"
              preserveAspectRatio="none"
            >
              <path className={waveAnimation}>
                <animate
                  attributeName="d"
                  values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                  repeatCount="indefinite"
                  dur="30s"
                />
              </path>
            </svg>
          </InnerWave>
        </WaveWrapper>
      </Divider>
      <Content speed={0.4} offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:natepappenhagen@gmail.com">Hi</a> or find me on
            other platforms:{" "}
            <a href="https://www.linkedin.com/in/nate-pappenhagen">LinkedIn</a>{" "}
            & <a href="https://github.com/natepappenhagen">Github</a>
          </ContactText>
        </Inner>
        <Footer>&copy; 2019 Nate Pappenhagen. </Footer>
      </Content>
      <Divider speed={0.1} offset={4}>
        <UpDown>
          <SVG
            icon="hexa"
            className={hidden}
            width={8}
            fill={colors["grey-darkest"]}
            left="70%"
            top="20%"
          />
          <SVG
            icon="triangle"
            width={8}
            stroke={colors["grey-darkest"]}
            left="25%"
            top="5%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="triangle"
            width={12}
            stroke={colors.white}
            left="95%"
            top="50%"
          />
          <SVG
            icon="teardrop"
            className={hidden}
            width={64}
            fill={colors["teal"]}
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <SVG
          icon="teardrop"
          width={12}
          fill={colors["grey-darkest"]}
          left="70%"
          top="60%"
        />
        <SVG
          icon="terminal"
          width={12}
          fill={colors["grey-darkest"]}
          left="20%"
          top="30%"
        />
        <SVG
          icon="hexa"
          width={8}
          stroke={colors["grey-darkest"]}
          left="80%"
          top="70%"
        />
      </Divider>
    </Parallax>
  </React.Fragment>
);

export default Index;
