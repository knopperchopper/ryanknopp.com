import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  url: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'My Resume',
    Svg: require('@site/static/img/resume.svg').default,
    description: (
      <>
        Find out more about my professional background, formal education, and various proficiencies.
      </>
    ),
    url: '/resume',
  },
  {
    title: 'Homelab Docs',
    Svg: require('@site/static/img/homelab.svg').default,
    description: (
      <>
        My Homelab is where I learn and experiment with tech. I've tried to document it where I can.
      </>
    ),
    url: '/homelab',
  },
  {
    title: 'Blog',
    Svg: require('@site/static/img/blog.svg').default,
    description: (
      <>
        Check out what I'm working on or thinking about from time to time. 
      </>
    ),
    url: '/blog',
  },
];

function Feature({title, Svg, description, url}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={url}><Svg className={styles.featureSvg} role="img" /></a>
      </div>
      <div className="text--center padding-horiz--md">
        <a href={url}><Heading as="h3">{title}</Heading></a>
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
