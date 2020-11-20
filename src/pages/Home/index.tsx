import React from 'react';

import { FiChevronDown } from 'react-icons/fi';

import LogoImg from '../../assets/logo.svg';
import ExpansionWeekLogo from '../../assets/expansion-week.svg';
import GoStackLogo from '../../assets/go-stack.svg';
import RocketseatLogo from '../../assets/rocketseat.svg';
import DevelopmentImg from '../../assets/dev-bg.svg';
import AccurentMarketImg from '../../assets/market-indicator.svg';
import DevicesImg from '../../assets/devices.svg';
import CellphoneImg from '../../assets/cellphone.svg';
import SoftSkillsImg from '../../assets/softskills.svg';

import { AccurentMarket, Brands, Footer, Gradient, Header, Introduction, Questions } from './styles';

import Button from '../../components/Button';
import { H1, H3 } from '../../components/Title';
import Quote from '../../components/Quote';

const Home: React.FC  = () => {
  return (
   <>
    <Header><img src={LogoImg} alt="DevResponsivo"/></Header>

    <main>
      <Introduction className="container">
        <img src={DevelopmentImg} alt="Flexibilidade: saber se adaptar às mudanças"/>

        <div>
          <H1><u>Flexibilidade:</u> saber se adaptar às mudanças</H1>
          <p>Você fez diversos cursos, treinamentos, mentorias, leu todas as documentações da stack que você atua, ficou fluente em inglês e já desenvolveu um belo portfólio, mas  a pergunta é:</p>
          <strong><u>Como estão suas Soft Skills?</u></strong>

          <Button>Continuar lendo</Button>
        </div>
      </Introduction>

      <Quote>
        “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy”

        <span>- Ryan Eloy</span>
      </Quote>

      <AccurentMarket>
        <div className="container">
          <div>
              <H3>O mercado <u>Hoje</u></H3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>

              <Button secondary={true} icon={true} ><FiChevronDown size={28}/></Button>
          </div>

          <img src={AccurentMarketImg} alt="O Mercado Hoje"/>
        </div>
      </AccurentMarket>

      <Questions>
        <div className="container">
          <img src={DevicesImg} alt="O que é ser um Dev Responsivo ?"/>

          <div className="text-content">
            <H3><u>O que é</u> ser um Dev Responsivo ?</H3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.</p>
          </div>
        </div>

        <div className="container">
          <div className="text-content">
            <H3><u>Por que devo</u> ser um Dev Responsivo ?</H3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.1500s, when an unknown printer took a galley of type and.</p>
          </div>

          <img src={CellphoneImg} alt="Por que devo ser um Dev Responsivo ?"/>
        </div>
      </Questions>

      <Gradient>
        <H3>A influência da <u>flexibilidade</u> nas outras <u>soft skills</u></H3>

        <div className="content">
          <img src={SoftSkillsImg} alt="A influência da flexibilidade nas outras soft skills"/>

          <article>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.1500s, when an unknown printer took a galley of type and.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.1500s, when an unknown printer took a galley of type and.
            </p>
          </article>
        </div>
      </Gradient>

      <Quote>
        “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy”

        <span>- Ryan Eloy</span>
      </Quote>

      <Brands>
        <div className="container">
            <img src={ExpansionWeekLogo} alt="Expansion Week"/>
            <img src={GoStackLogo} alt="Go Stack - Bootcamp"/>
            <img src={RocketseatLogo} alt="Rocketseat"/>
        </div>
      </Brands>
    </main>

    <Footer>
      <div className="container">
        <ul>
          <li>
            <a href="https://" rel="noreferrer" target="_blank">
              Licença MIT
            </a>
          </li>
          <li>
            <a href="mailto:math.eloy@hotmail.com" rel="noreferrer" target="_blank">
              Envie-me um e-mail
            </a>
          </li>
        </ul>

        <div className="brand">
          <img src={LogoImg} alt="DevResponsivo"/>
          <span>&copy; Alguns Direitos Reservados</span>
        </div>

        <div className="profile">
          <img
            src="https://xesque.rocketseat.dev/users/avatar/profile-8af9bcea-4630-4384-b39b-40d92a44b758-1603195940106.jpg"
            alt="Ryan Matheus Freitas Eloy"
          />
          <span>Projetado e Desenvolvido por
            <a href="https://www.linkedin.com/in/ryan-eloy-5906b91a5/" rel="noreferrer" target="_blank">
              <strong>Ryan Eloy</strong>
            </a>
          </span>
        </div>
      </div>
    </Footer>
   </>
  )
}

export default Home;
