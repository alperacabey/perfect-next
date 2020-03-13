import React from 'react';
import { Text, Image } from 'components';
import CustomerWrapper, { ImageWrapper } from './customer.style';

import { client } from 'data';

const Customer = () => {
  return (
    <CustomerWrapper>
      <Text content="Trusted by companies like:" />
      <ImageWrapper>
        {client.map(item => (
          <Image
            key={`client-key${item.id}`}
            src={item.image}
            alt={item.title}
          />
        ))}
      </ImageWrapper>
    </CustomerWrapper>
  );
};

export default Customer;
