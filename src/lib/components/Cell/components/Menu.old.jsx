import React from 'react';
import PropTypes from 'prop-types';
import Actions from './Actions';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import Fade from '@material-ui/core/Fade';
import GamepadIcon from '@material-ui/icons/Gamepad';
import IconButton from '@material-ui/core/IconButton';
import MenuBorder from './MenuBorder';
import useHold from 'hooks/useHold';

/**
 * Menu
 */
const Menu = React.forwardRef(
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
        <Box
          bottom={0}
          display="flex"
          flexDirection="row"
          position="absolute"
          right={0}
          top={0}
        >
          <Box position="relative">
            <Actions in={over && !active}>
              <IconButton size="small" ref={ref}>
                <GamepadIcon />
              </IconButton>
              <IconButton
                size="small"
                onMouseDown={onRemoveDown}
                onMouseLeave={onRemoveLeave}
                onMouseUp={onRemoveUp}
              >
                {removing ? <DoneIcon color="error" /> : <DeleteIcon />}
              </IconButton>
            </Actions>
            <Box left={0} position="absolute" top={0}>
              <Actions in={active} ref={refActions}>
                <IconButton onClick={onCancel} size="small">
                  <CloseIcon />
                </IconButton>
              </Actions>
            </Box>
          </Box>
          <MenuBorder active={active} height={`${ticTac}%`} />
        </Box>
      </Fade>
    );
  }
);

Menu.propTypes = {
  active: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  over: PropTypes.bool.isRequired,
  refActions: PropTypes.object
};

export default Menu;
