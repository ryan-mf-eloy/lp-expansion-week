import React from 'react';
import { Link } from 'react-router-dom';

import NotFoundImg from '../../assets/not-found.svg';

import { FiChevronLeft } from 'react-icons/fi';

import { H1, H4 } from '../../components/Title';
import Button from '../../components/Button';

import { Img, Title } from './styles';

const NotFound: React.FC = () => (
  <div className="container">
    <Title>
      <H1>Ooops! :/</H1>
      <H4 color="#A8A8B3">Parece que a página que você está procurando não foi encontrada...</H4>
      
      <Link to="/">
        <Button icon={true}><FiChevronLeft size={28}/></Button>
      </Link>
    </Title>

    <Img src={NotFoundImg} alt="Erro 404"/>
  </div>
);

export default NotFound;
