import propTypes from 'prop-types';
import { Notific } from './Notification.styled';

export const Notification = ({ message }) => <Notific>{message}</Notific>;

Notification.propTypes = {
  message: propTypes.string.isRequired,
};
