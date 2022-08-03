import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: orangered;
  }
`;

export const BackLink = ({ to, children }) => {
  console.log('~ to', to);
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};

BackLink.propTypes = {
  to: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string,
  }),
  children: PropTypes.string.isRequired,
};
