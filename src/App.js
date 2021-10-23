import React, { useState } from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';
import { capture } from './utils';
import { PDF } from './PDF';
import Editable from './Editable/Editable';

import './App.css';

function App() {
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
      <Container>
        <Grid className="resume" divided>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image style={{ cursor: 'pointer' }} src={avatar} size='small' circular onClick={onChangeAvatar} />
            </Grid.Column>
            <Grid.Column width={12}>
              <Editable />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

      <Container className="toolbar">
        <button onClick={() => capture(".resume")}>Download Image</button>
        <PDF />
      </Container>
    </>
  );
}

export default App;
