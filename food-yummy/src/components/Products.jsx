import React from "react";
import styled from "styled-components";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.JPG";
import product6 from "../assets/product6.JPG";
import product7 from "../assets/product7.jpg";
import product8 from "../assets/product8.jpg";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";

export default function Products() {
  const data = [
    {
      image: product1,
      name: "A-4 GỎI CUỐN TÔM",
      price: "TBD",
      link: "https://www.yelp.com/biz/pho-truc-xanh-escondido?q=spring+rolls",
      description: "Looking for an appetizer to come out quick or you simply want a nutrionally balanced snack? Get some spring rolls!"
    },
    {
      image: product2,
      name: "HONEY CHICKEN",
      price: "TBD",
      link: "https://www.yelp.com/biz/pho-truc-xanh-escondido?q=honey+chicken",
      description: "Sweet, savory, and crispy. Those words describe our crowd favorite Honey Chicken plate!"
    },
    {
      image: product3,
      name: "S-46 BÚN BÒ HUẾ TRÚC XANH ",
      price: "TBD",
      link: "https://www.yelp.com/biz/pho-truc-xanh-escondido?q=bun+bo+hue",
      description: "A traditional Vietnamese noodle soup packed with more spice and heartiness than your standard Pho bowl."
    },

    {
      image: product4,
      name: "C-44 CƠM CHIÊN TRÚC XANH",
      price: "TBD",
      link: "https://www.yelp.com/biz/pho-truc-xanh-escondido?q=fried+rice",
      description: "The comforting and filling Fried Rice, how can you go wrong with this classic? An Eggs, Veggies, and Protein fusion! "
    },

    {
      image: product5,
      name: "P-12 PHỞ ĐẶC BIỆT TRÚC XANH",
      price: "TBD",
      link: "https://www.yelp.com/biz/pho-truc-xanh-escondido?q=pho",
      description: "The crown jewel of Vietnamese cuisine. A great dish to get if it's your first time here... actually it's always a fantastic dish to get!"
    },
    
    {
      image: product6,
      name: "LO MEIN NOODLES",
      price: "TBD",
      link: "https://www.yelp.com/biz/pho-truc-xanh-escondido?q=lo+mein",
      description: "Looking for tons of flavor in each bite? Our Lo Mein noodles are a great option if you just want a little bit of everything for your taste buds!"
    },

    {
      image: product7,
      name: "A-14 MỰC RANG MUỐI",
      price: "TBD",
      link: "https://www.yelp.com/biz/pho-truc-xanh-escondido?q=calamari",
      description: "Our Salt and Pepper Calamari is a great dish. With its crispy exterior and satisfyingly chewy interior, find out why so many of our customers love this dish! "
    },

    {
      image: product8,
      name: "D-11 TRÀ THÁI TRÂN CHÂU",
      price: "TBD",
      link: "https://www.yelp.com/biz/pho-truc-xanh-escondido?q=thai+tea",
      description: "Looking for something sweet with your savory? Our homemade Thai Tea is great to have at the beginning, middle, or end of your meal! "
    },

  ];
  
  return (
    <Section id="products">
      <div className="title">
        <h1>
          <span>Favourite</span> All the time!
        </h1>
      </div>
      <div className="products">
        {data.map((product) => {
          return (
            <div className="product">
              <div className="image">
                <img src={product.image} alt="" />
              </div>
              <h2 style={{textAlign:"center"}}>{product.name}</h2>
              <h3>{product.price}</h3>
              <p>{product.description}</p>
              <button onClick={() => window.open(product.link,"_blank")} type="button"> View Yelp Reviews</button>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${TitleStyles};
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-top: 3rem;
    .product {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      justify-content: center;
      align-items: center;
      h3 {
        color: #97A54E;
      }
      p {
        text-align: center;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
      ${imageZoomEffect};
      .image {
        max-height: 20rem;
        overflow: hidden;
        border-radius: 1rem;
        img {
          height: 20rem;
          width: 15rem;
          object-fit: cover;
        }
      }
      button {
        border: none;
        padding: 1rem 4rem;
        font-size: 1.4rem;
        color: white;
        border-radius: 4rem;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        background: linear-gradient(to right, #358D51, #97A54E);
        text-transform: uppercase;
        &:hover {
          background: linear-gradient(to right, #97A54E,#358D51);
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    .products {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
