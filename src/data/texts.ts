import diagram from 'assets/images/diagram.svg';
import risk from 'assets/images/risk.svg';

// welcome section
const welcomeTexts = {
  description: 'Discover a way to invest in assets uncorrelated to the financial markets.',
  title: 'Opportunity meet Risk.',
};

const welcomeHeroCard = {
  description: 'Build an insurance asset portfolio based on your risk appetite.',
  title: 'Fida Marketplace',
  button: {
    label: 'Discover',
    link: '#marketplace',
  }
};

const welcomeCards = {
  card1: {
    buttonLabel: 'Learn more',
    buttonLink: '#conquerRisk',
    description: 'Include Fida Cards into your portfolio to recieve gains from insurance premiums.',
    title: 'Expand your investors portfolio'
  },
  card2: {
    description: 'Insurance gap',
    title: '67%'
  },
  card3: {
    description: 'Market value',
    title: '$120 bln'
  }
};

// our mission section
const ourMissionTexts = {
  title: 'Our Mission',
  description: 'Ensuring comprehensive coverage for global emerging risks by redefining how risk is transferred is a financial, social, and moral imperative.',
  values: [
    { value: '$ 10 tn/FT', label: 'Estimated gap' },
    { value: '66%', label: 'Losses remain uncovered' },
    { value: '40%', label: 'Median operational friction' },
    { value: '$12 - $29 bln', label: 'Parametric insurance 2022 - 2030' }
  ]
};

const missionCards = [
  {
    description: 'Investors can build diversified investment portfolios to increase capital efficiency and generate leverage as insurance companies do.',
    imageSrc: risk,
    isReversed: true,
    isRoseText: true,
    title: 'Fida is a <rose>Risk Transfer Protocol</rose> built on top of Cardano.'
  },
  {
    description: "Ensuring comprehensive coverage for global emerging risks by redefining how risk is transferred is a financial, social, and moral imperative. Using catastrophe insurance as an example: even though climate catastrophes has surged ninefold, a staggering 66% of these losses remain uncovered by the insurance sector. This glaring protection gap is not unique to climate insurance. However, it highlights the impact of industry's capital constraints on people’s lives. The industry is struggling to adapt. It is losing its access to capital to newer financial services.",
    imageSrc: diagram,
    subtitle: 'The insurance industry is failing to cover customers',
    title: "Fida's mission is clear: to fill the protection gap!"
  }
];

export {
  welcomeTexts,
  welcomeHeroCard,
  welcomeCards,
  ourMissionTexts,
  missionCards
};
