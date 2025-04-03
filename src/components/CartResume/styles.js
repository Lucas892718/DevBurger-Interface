import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.white};

  * {
    font-weight: 500;
    color: ${(props) => props.theme.secondBlack};
  }
  .container-top {
    display: grid;
    grid-gap: 10px 30%;
    grid-template-areas:
      'Title Title'
      'Itens Item-price'
      'Delivery-text Delivery-price';
  }
  .title {
    grid-area: Title;
    text-align: center;
    border-top-right-radius: 20px;
    background-color: ${(props) => props.theme.secondBlack};

    color: ${(props) => props.theme.white};

    font-size: 25px;
    font-weight: 700;
    padding: 15px;
    width: 100%;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
  }
  .itens {
    padding-left: 20px;
    grid-area: Itens;
  }
  .item-price {
    padding-right: 20px;
  }
  .delivery-text {
    grid-area: Delivery-text;
    padding-left: 20px;
  }
  .delivery-price {
    grid-area: Delivery-price;
  }
  .container-bottom {
    display: grid;
    justify-content: space-between;
    grid-template-areas: 'Total TotalPrice';
    padding: 20px;
  }
  .total {
    grid-area: Total;
    font-size: 20px;

    font-weight: 600;
  }
  .total-price {
    grid-area: TotalPrice;
    font-weight: 600;
    font-size: 20px;
  }
`;
