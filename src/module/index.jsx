import React, { useState } from 'react';
import Editor, {
  createPlugins,
  deserialize,
  serialize,
  Toolbar,
  Viewer
} from 'lib';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import 'typeface-roboto';

const initialNodes = [
  {
    value:
      '{"object":"value","document":{"object":"document","data":{},"nodes":[{"object":"block","type":"paragraph","data":{},"nodes":[{"object":"text","text":"Premier Paragraphe","marks":[]}]}]}}',
    id: '2',
    type: 'paragraph'
  },
  {
    src:
      'https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/14/thumb_bigger_formation-node-js.png',
    width: 30,
    id: '1',
    type: 'image'
  }
];

const plugins = createPlugins();

/**
 * App
 */
const App = () => {
  const [value, setValue] = useState(deserialize(plugins)(initialNodes));
  const [preview, setPreview] = React.useState(false);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box marginTop={2}>
          <Paper square>
            <Box padding={2}>
              <Toolbar
                onPreviewChange={setPreview}
                onSave={() => {
                  console.log(serialize(plugins)(value));
                }}
                preview={preview}
              />
              {preview ? (
                <Viewer
                  blockRenderer={p => (
                    <Box {...p} marginBottom={5} marginTop={2} />
                  )}
                  plugins={plugins}
                  value={value}
                />
              ) : (
                <Editor
                  onChange={newValue => {
                    setValue(newValue);
                  }}
                  plugins={plugins}
                  value={value}
                />
              )}
            </Box>
          </Paper>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default App;
