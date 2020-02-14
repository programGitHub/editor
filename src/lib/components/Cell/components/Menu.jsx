import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

export const MenuContext = React.createContext({ in: false });

/**
 * Menu
 */
const Menu = ({ active, children }) => (
  <MenuContext.Provider value={{ in: active }}>
    <Box
      alignItems="flex-end"
      display="flex"
      flexDirection="column"
      onClick={e => {
        e.stopPropagation();
      }}
      position="absolute"
      right={18}
      top={0}
      zIndex={1000}
    >
      {React.Children.map(children, (child, r) =>
        React.cloneElement(child, { row: r })
      )}
    </Box>
  </MenuContext.Provider>
);

Menu.defaultProps = {
  active: false
};

Menu.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node
};

export default Menu;
