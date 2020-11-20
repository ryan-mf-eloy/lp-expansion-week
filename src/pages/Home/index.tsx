import React from 'react';

import { FiChevronDown } from 'react-icons/fi';

import ResponsiveDevLogo from '../../assets/logo.svg';
import ExpansionWeekLogo from '../../assets/expansion-week.svg';
import GoStackLogo from '../../assets/go-stack.svg';
import RocketseatLogo from '../../assets/rocketseat.svg';
import DevelopmentImg from '../../assets/dev-bg.svg';
import AccurentMarketImg from '../../assets/market-indicator.svg';
import DevicesImg from '../../assets/devices.svg';
import CellphoneImg from '../../assets/cellphone.svg';
import SoftSkillsImg from '../../assets/softskills.svg';

import { H1, H3 } from '../../components/Title';
import Button from '../../components/Button';
import Quote from '../../components/Quote';

import {
  AccurentMarket,
  Brands,
  Footer,
  Gradient,
  Header,
  Introduction,
  Questions
} from './styles';

const Home: React.FC  = () => {
  const handleScroll = () => {

  }
  
  return (
   <>
    <Header><img src={ResponsiveDevLogo} alt="DevResponsivo"/></Header>

    <main>
      <Introduction className="container">
        <img src={DevelopmentImg} alt="Flexibilidade: saber se adaptar às mudanças"/>

        <div>
          <H1><u>Flexibilidade:</u> saber adaptar-se às mudanças</H1>
          <p>Você fez diversos cursos, treinamentos, mentorias, leu todas as documentações da stack que você atua, ficou fluente em inglês e já desenvolveu um belo portfólio, mas  a pergunta é:</p>
          <strong><u>Como estão suas Soft Skills?</u></strong>

          <a onClick={handleScroll} href="#accurentMarket">
            <Button>Continuar lendo</Button>
          </a>
        </div>
      </Introduction>

      <Quote>
        “Em nossas vidas, a mudança é inevitável. A perda é inevitável. A felicidade reside na nossa adaptabilidade em sobreviver a tudo de ruim.”

        <span>- Buda</span>
      </Quote>

      <AccurentMarket id="accurentMarket">
        <div className="container">
          <div>
              <H3>O mercado <u>Hoje</u></H3>
              <p>
                Há uns tempos atrás o programador/desenvolvedor era aquele nerd acanhado com dificuldades extremas de comunicação e interação social, e que grande parte do seu tempo era dedicada somente a codificação. Os tempos mudaram! e os nerds também... agora o mercado exige muitas outras competências além de dominar linguagens e resolver problemas técnicos.

                <br /> <br />

                Hoje na maioria das vezes o programador precisa comunicar-se com frequência e com muitas pessoas, além de ter que exercer um enorme controle emocional para lidar bem sobre pressão e atender todos os objetivos de cada projeto.
              </p>

              <a onClick={handleScroll} href="#questions">
                <Button secondary={true} icon={true} ><FiChevronDown size={28}/></Button>
              </a>
          </div>

          <img src={AccurentMarketImg} alt="O Mercado Hoje"/>
        </div>
      </AccurentMarket>

      <Questions id="questions">
        <div className="container">
          <img src={DevicesImg} alt="O que é ser um Dev Responsivo ?"/>

          <div className="text-content">
            <H3><u>O que é</u> ser um Dev Responsivo ?</H3>
            <p>
              Como você já deve estar sabendo, "a onda do momento" são as famosas <strong><i>Soft Skills</i></strong>. E as empresas estão valorizando e buscando cada vez mais candidatos que às possuem e que mais do que apenas conhecimentos técnicos também desenvolva-se pessoalmente.
              <br /> <br />

              Uma nova tecnologia é lançada todos os dias, da mesma maneira que um problema é descoberto. Sendo assim sempre há uma nova exigência ou um novo desafio a ser superado ou uma nova linguagem para ser aprendida, e caso você queira se destacar nesse bombardeio de informações que existe em nosso mundo, acredito firmemente que a melhor soft skill que você pode dominar é a <strong><u>Flexibilidade</u></strong>.
              <br /> <br />

              Assim como as suas aplicações você deve possuir uma excelente adaptabilidade e ser responsivo as oscilações do mercado e seus requisitos;
            </p>
          </div>
        </div>

        <div className="container">
          <div className="text-content">
            <H3><u>Por que devo</u> ser um Dev Responsivo ?</H3>
            <p>
              Como eu disse, o nosso mundo(Tecnologia da informação) é um bombardeio de informações e todos os dias surgem soluções melhores, mais bem pensadas do que as anteriores e ainda usando menos recursos.
              <br /> <br />

              Aqui vai uma boa notícia, como desenvolvedor você não precisa aprender todas as tecnologias do mercado, mas... precisa adaptar-se a ele e estar sempre preparado para novos desafios, precisa amar resolver problemas, estar disposto a ir ao limite e usar todas as informações e ferramentas a sua disposição para resolvê-los, é isso que esperam de mim e de você!
            </p>
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
              Você já deve ter ouvido falar em uma série de outras soft skills, e que elas são muito cobradas no mercado hoje. Inteligência emocional, comunicação, liderança, trabalho em equipe, criatividade, proatividade e mais um monte delas.
            </p>
            <p>
              Apesar de todas essas soft skills serem muito boas, considere elas apenas cinergistas à flexibilidade/responsividade. <strong>Que tipo de líder eu posso ser se não domino os assuntos do momento? como posso me comunicar com outros desenvolvedores se mal sei como posicionar-me em um assunto específico? como posso ser proativo sem saber o que esperam de mim e o que eu devo fazer para superar as espectativas ?
              </strong>
              <br /> <br />
              Se quisermos ser verdadeiros agentes da transformação e mudarmos o meio em que vivemos, precisamos ser flexiveis as mudanças que nós mesmos proporcionamos.
            </p>
          </article>
        </div>
      </Gradient>

      <Quote>
        “Saber adaptar-se às mudanças é agir com inteligência”

        <span>- Maria Almeida</span>
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
          <img src={ResponsiveDevLogo} alt="DevResponsivo"/>
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
