import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import { mediaRecordOutline } from 'react-icons-kit/typicons/mediaRecordOutline';
import { plus } from 'react-icons-kit/typicons/plus';
import { starOutline } from 'react-icons-kit/typicons/starOutline';
import { Text, Heading, Image, Container, FeatureBlock } from 'components';
import { SectionHeader } from '../appClassic.style';
import SectionWrapper, { FeatureWrapper } from './keyFeatures.style';

import { keyFeatures } from 'data';

const KeyFeatures = () => {
  const { slogan, title, features } = keyFeatures;

  return (
    <SectionWrapper id="keyFeatures">
      <Container>
        <SectionHeader>
          <Fade up>
            <Heading as="h5" content={slogan} />
            <Heading content={title} />
          </Fade>
        </SectionHeader>
        <FeatureWrapper>
          {features.map(item => (
            <Fade up delay={100 * item.id} key={`key-feature--key${item.id}`}>
              <FeatureBlock
                style={{ '--color': `${item.color}` }}
                icon={
                  <Fragment>
                    <Icon className="plus" icon={plus} />
                    <Icon className="circle" icon={mediaRecordOutline} />
                    <Image src={item.icon} alt={item.title} />
                    <Icon className="star" icon={starOutline} />
                  </Fragment>
                }
                title={<Heading as="h3" content={item.title} />}
                description={<Text content={item.description} />}
              />
            </Fade>
          ))}
        </FeatureWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default KeyFeatures;
