import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import Fade from '@material-ui/core/Fade';
import GamepadIcon from '@material-ui/icons/Gamepad';
import Menu from './Menu';
import MenuBox from './MenuBox';
import MenuItem from './MenuItem';
import MenuBorder from './MenuBorder';
import useHold from 'lib/hooks/useHold';

/**
 * CellMenu
 */
const CellMenu = React.forwardRef(
  ({ active, onCancel, onRemove, over, refActions }, ref) => {
    const [removing, onRemoveDown, onRemoveLeave, onRemoveUp] = useHold();
    const [ticTac, setTicTac] = React.useState(0);

    if (removing) {
      if (ticTac < 100) {
        setTimeout(() => {
          setTicTac(ticTac + 10);
        }, 100);
      } else {
        onRemove();
      }
    } else if (!removing && ticTac !== 0) {
      setTicTac(0);
    }

    return (
      <Fade in={active || over}>
        <Box bottom={0} display="flex" position="absolute" right={0} top={0}>
          <Box height="100%" position="relative">
            <Menu active={!active && over}>
              <MenuBox>
                <MenuItem ref={ref}>
                  <GamepadIcon />
                </MenuItem>
                <MenuItem
                  onMouseDown={onRemoveDown}
                  onMouseLeave={onRemoveLeave}
                  onMouseUp={onRemoveUp}
                >
                  {removing ? <DoneIcon color="error" /> : <DeleteIcon />}
                </MenuItem>
              </MenuBox>
            </Menu>
            <MenuBorder active={active} height={`${ticTac}%`} />
          </Box>
        </Box>
      </Fade>
    );
  }
);

CellMenu.propTypes = {
  active: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  over: PropTypes.bool.isRequired,
  refActions: PropTypes.object
};

export default CellMenu;
