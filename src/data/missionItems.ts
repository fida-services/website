import diagram from 'assets/images/diagram.svg';
import risk from 'assets/images/risk.svg';

export const missionItems = [
  {
    description: 'Investors can build diversified investment portfolios to increase capital efficiency and generate leverage as insurance companies do.',
    imageSrc: risk,
    isReversed: true,
    title: 'Fida is a <rose>Risk Transfer Protocol</rose> built on top of Cardano.'
  },
  {
    description: "Ensuring comprehensive coverage for global emerging risks by redefining how risk is transferred is a financial, social, and moral imperative. Using catastrophe insurance as an example: even though climate catastrophes has surged ninefold, a staggering 66% of these losses remain uncovered by the insurance sector. This glaring protection gap is not unique to climate insurance. However, it highlights the impact of industry's capital constraints on people’s lives. The industry is struggling to adapt. It is losing its access to capital to newer financial services.",
    imageSrc: diagram,
    subtitle: 'The insurance industry is failing to cover customers',
    title: "Fida's mission is clear: to fill the protection gap!"
  }
];
