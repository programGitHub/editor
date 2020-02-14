import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

const delay = {
  COLUMN: 30,
  ROW: 30
};

/**
 * MenuBox
 */
const MenuBox = React.forwardRef(({ children, row }, ref) => {
  const max = React.Children.count(children);

  return (
    <Box alignItems="center" display="flex" justifyContent="flex-end" ref={ref}>
      {React.Children.map(children, (child, c) =>
        React.cloneElement(child, {
          delay: (max - 1 - c) * delay.COLUMN + row * delay.ROW
        })
      )}
    </Box>
  );
});

MenuBox.defaultProps = {
  row: 0
};

MenuBox.propTypes = {
  children: PropTypes.node,
  row: PropTypes.number.isRequired
};

export default MenuBox;
