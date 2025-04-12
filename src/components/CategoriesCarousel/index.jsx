import React from 'react';
import { useEffect, useState } from 'react';
import { api } from '../../services/api.js';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CategoryButton, CategoryItem, Container, Title } from './styles.js';
import { useNavigate } from 'react-router-dom';

export function CategoriesCarousel() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      setCategories(data);
    }
    loadCategories();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1280, min: 850 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 800, min: 600 },
      items: 2
    },
    smallMobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1
    }
  };

  return (
    <Container>
      <Title>Categorias</Title>

      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisbile={false}
        itemClass="Carousel-item"
      >
        {categories.map((category) => (
          <CategoryItem key={category.id} imageurl={category.url}>
            <CategoryButton
              onClick={() => {
                navigate({
                  pathname: '/cardapio',
                  search: `?categoria=${category.id}`
                });
              }}
              key={category.id}
            >
              <div className="categoryName"> {category.name}</div>
            </CategoryButton>
          </CategoryItem>
        ))}
      </Carousel>
    </Container>
  );
}
