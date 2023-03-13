import propTypes from 'prop-types';
import { Title } from './SectionTitle.styled';

export const SectionTitle = ({ title, children }) => {
  return (
    <div>
      <Title>{title}</Title>
      {children}
    </div>
  );
};

SectionTitle.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};
