import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  img: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Responsible AI in the Public Sector',
    img: require('@site/static/img/icon1.png').default,
    description: (
      <>
        Learn about the principles of responsible AI and how they can be applied
        in the public sector to ensure fairness, transparency, and
        accountability.
      </>
    ),
  },
  {
    title: 'Understanding Generative AI',
    img: require('@site/static/img/icon2.png').default,
    description: (
      <>
        Explore the capabilities and vulnerabilities of generative AI, and learn
        how to mitigate the risks associated with this powerful technology.
      </>
    ),
  },
  {
    title: 'Building AI Agents with Gemini',
    img: require('@site/static/img/icon3.png').default,
    description: (
      <>
        Get a hands-on introduction to building responsible AI agents with
        Google Gemini, and see a working example of an AI agent for the public
        sector.
      </>
    ),
  },
];

function Feature({title, img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
