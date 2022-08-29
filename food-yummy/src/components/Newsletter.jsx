import React from "react";
import styled from "styled-components";
import { TitleStyles } from "./ReusableStyles";
import phoIcon from "../assets/pho.png";
export default function Newsletter() {
  return (
    <Section id="newsletter">
      <div className="title">
        <h1>

        <span> Menu <img style={{width: "5.5vh"}} src={phoIcon} alt="Icon" /> </span>  
          
        </h1>
    {/*
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quas
          perferendis nesciunt illum, voluptas nulla laborum alias similique
          praesentium quam.
        </p>
      </div>
      <div className="container">
        <input type="text" placeholder="Search for food ..." />
        <button>Search</button>
          */}
      </div>
    </Section>
  );
}

const Section = styled.section`
  border: 0.2rem solid black;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  ${TitleStyles}
  
  .container {
    background: linear-gradient(to right, #97A54E, #358D51, #97A54E);
    padding: 0.4vw;
    input {
      border: none;
      padding: 1.5rem 8rem 1.5rem 1rem;
      font-size: 1.3rem;
      &:focus {
        outline: none;
      }
    }
    
    button {
      padding: 1rem 5rem;
      background-color: transparent;
      border: none;
      font-size: 1.3rem;
      color: white;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        letter-spacing: 0.3rem;
        padding: 1rem 4.7rem;
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      padding: 0.8rem;
      border-radius: 0.5rem;
      input {
        width: 75vw;
        padding: 0.5rem;
        border-radius: 0.5rem;
      }
      button {
        margin-top: 0.5rem;
        width: 100%;
        padding: 0.5rem;
        &:hover {
          padding: 0.5rem 1rem;
        }
      }
    }
  }
`;
