import { CircularProgress, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { FavoriteBorder, FavoriteRounded } from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 99%;
  overflow-y: scroll;
`;
const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  width: 100%;
  padding: 12px;
  gap: 32px;
  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  height: 600px;
  border-radius: 12px;
  @media (max-width: 750px) {
    height: 400px;
  }
`;
const Details = styled.div`
  display: flex;
  gap: 18px;
  flex-direction: column;
  padding: 4px 10px;
  flex: 1;
`;
const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
`;
const Desc = styled.div`
  font-size: 16px;
  font-weight: 400;
`;
const Name = styled.div`
  font-size: 18px;
  font-weight: 400;
`;
const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 22px;
  font-weight: 500;
`;
const Span = styled.div`
  font-size: 16px;
  font-weight: 500;
  text-decoration: line-through;
`;
const Percent = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: green;
`;
const Sizes = styled.div`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Items = styled.div`
  display: flex;
  gap: 12px;
`;
const Item = styled.div`
  border: 1px solid blue;
  font-size: 14px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ selected }) =>
    selected &&
    `
    background: blue;
    color: white;
  `}
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  padding: 32px 0px;
`;

const ProductDetails = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState();
  const [selected, setSelected] = useState();
  const [favorite, setFavorite] = useState(false);
  const [favoriteLoading, setFavoriteLoading] = useState(false);
  const [cartLoading, setCartLoading] = useState(false);

  // Mock getProductDetails
  const getProduct = async () => {
    setLoading(true);
    setTimeout(() => {
      setProduct({
        _id: "1",
        title: "Sample Product",
        name: "Product Name",
        img: "https://via.placeholder.com/300",
        price: { org: 120, mrp: 150, off: 20 },
        desc: "This is a sample product description.",
        sizes: ["S", "M", "L", "XL"],
      });
      setLoading(false);
    }, 500);
  };

  // Mock functions for add/remove favorite & add to cart
  const addFavorite = async () => setFavorite(true);
  const removeFavorite = async () => setFavorite(false);
  const addCart = async () => alert("Added to cart!");

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Container>
      {loading ? (
        <CircularProgress />
      ) : (
        <Wrapper>
          <ImageWrapper>
            <Image src={product?.img} />
          </ImageWrapper>
          <Details>
            <div>
              <Title>{product?.title}</Title>
              <Name>{product?.name}</Name>
            </div>
            <Rating value={3.5} />
            <Price>
              ${product?.price?.org} <Span>${product?.price?.mrp}</Span>{" "}
              <Percent> ({product?.price?.off}% Off) </Percent>
            </Price>
            <Desc>{product?.desc}</Desc>
            <Sizes>
              <Items>
                {product?.sizes.map((size) => (
                  <Item
                    key={size}
                    selected={selected === size}
                    onClick={() => setSelected(size)}
                  >
                    {size}
                  </Item>
                ))}
              </Items>
            </Sizes>
            <ButtonWrapper>
              <Button
                text="Add to Cart"
                full
                outlined
                isLoading={cartLoading}
                onClick={() => addCart()}
              />
              <Button text="Buy Now" full />
              <Button
                leftIcon={
                  favorite ? (
                    <FavoriteRounded sx={{ fontSize: "22px", color: "red" }} />
                  ) : (
                    <FavoriteBorder sx={{ fontSize: "22px" }} />
                  )
                }
                full
                outlined
                isLoading={favoriteLoading}
                onClick={() =>
                  favorite ? removeFavorite() : addFavorite()
                }
              />
            </ButtonWrapper>
          </Details>
        </Wrapper>
      )}
    </Container>
  );
};

export default ProductDetails;
