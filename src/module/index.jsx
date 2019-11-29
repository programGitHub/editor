import React from 'react';
import Editor from 'lib';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';

import 'typeface-roboto';

/**
 * App
 */
const App = () => (
  <React.Fragment>
    <CssBaseline />
    <Container maxWidth="md">
      <Box marginTop={2}>
        <Paper square>
          <Box padding={2}>
            <Editor
              editable
              onSave={value => {
                console.log('ici', value);
              }}
            />
          </Box>
        </Paper>
      </Box>
    </Container>
  </React.Fragment>
);

export default App;
