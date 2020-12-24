import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@buffetjs/core';
import Tooltip from '../../../../admin/src/components/Tooltip';
import { ProviderButtonWrapper, ProviderLink } from './ProviderButtonStyles';

const ProviderButton = ({ provider }) => {
  return (
    <>
      <ProviderLink
        href={`${strapi.backendURL}/admin/connect/${provider.uid}`}
        data-for={provider.uid}
        data-tip={provider.displayName}
      >
        <ProviderButtonWrapper justifyContent="center" alignItems="center">
          {provider.icon ? (
            <img
              src={provider.icon}
              alt={provider.displayName}
              style={{ maxWidth: 80, maxHeight: 40 }}
            />
          ) : (
            <Text fontSize="xs" ellipsis>
              {provider.displayName}
            </Text>
          )}
        </ProviderButtonWrapper>
      </ProviderLink>
      <Tooltip id={provider.uid} />
    </>
  );
};

ProviderButton.propTypes = {
  provider: PropTypes.exact({
    displayName: PropTypes.string,
    icon: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
};

export default ProviderButton;