import styled from 'styled-components';

export const Container = styled.div`
  .Carousel-item {
    padding-right: 40px;
  }
  .react-multiple-carousel__arrow--left {
    left: 15px;
    top: 10px;
  }
  .react-multiple-carousel__arrow--right {
    top: 10px;
  }
  padding-left: 40px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: ${(props) => props.theme.purple};

  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 20px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 300px;
    background-color: ${(props) => props.theme.purple};
  }
`;

export const CategoryItem = styled.div`
  background: url('${(props) => props.imageurl}');
  background-position: center;
  background-size: cover;
  border-radius: 20px;

  display: flex;
  align-items: center;
  padding: 20px 10px;
  width: 100%;
  height: 200px;
`;

export const CategoryButton = styled.button`
  margin-top: 50px;
  margin-right: 60%;
  border: 0;
  color: ${(props) => props.theme.white};

  background-color: ${(props) => props.theme.mainBlack};

  padding: 10px 30px;
  border-radius: 30px;
  font-size: 22.5px;
  font-weight: bold;
  cursor: pointer;
`;
