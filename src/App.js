import React, { useState } from 'react';
import { Container, Grid, Button, Image } from 'semantic-ui-react';
import { capture } from './utils';
import { Editor } from './Editor';
import col1 from './templates/1';
import col2 from './templates/2';

import './App.css';

const template = {
  cols: [col1, col2]
};

function App() {
  // const [config, setConfig] = useState(templates[0]);
  // const selectTemplate = (id) => setConfig({ ...templates.find(t => t.id === id) });
  // const [showEditButton, setShowEditButton] = useState(false);
  const [avatar, setAvatar] = useState('https://via.placeholder.com/1000.png?text=Click+to+add+avatar');

  const onChangeAvatar = () => {
    const url = window.prompt("Enter new avatar URL");

    if (!url) return;

    // TODO: Valid image URL
    console.log({ url });

    setAvatar(url);
  }

  return (
    <>
      <Container className="resume">
        <Grid divided>
          <Grid.Row columns={2}>
            <Grid.Column width={4}>
              <Image style={{ cursor: 'pointer' }} src={avatar} size='medium' circular onClick={onChangeAvatar} />
              <Editor template={template.cols[0]} />
            </Grid.Column>
            <Grid.Column width={12}>
              <Editor template={template.cols[1]} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

      <Container>
        <Button onClick={() => capture(".resume")}>Download</Button>
      </Container>
    </>
  );
}

export default App;
