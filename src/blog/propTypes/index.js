import PropTypes from 'prop-types';

export const PostPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
});

export default { PostPropType };
