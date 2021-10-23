import React, { useState } from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';
// import { capture } from './utils';
import { PDF } from '../PDF';

import './App.css';
import Editable from '../Editable/Editable';
import { Popup } from '../Popup/Popup';

function App() {
  const [avatar, setAvatar] = useState('https://via.placeholder.com/1000.png?text=Click+to+add+avatar');
  const [message, setMessage] = useState("");

  const onChangeAvatar = () => {
    const url = window.prompt("Enter new avatar URL");

    if (!url) return;

    // TODO: Valid image URL
    console.log({ url });

    setAvatar(url);
  }

  const onPopupComplete = () => setMessage("");

  return (
    <>
      <Popup message={message} onPopupComplete={onPopupComplete} />
      <Container>
        <Grid className="resume" divided columns={2} padded='horizontally'>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image style={{ cursor: 'pointer' }} src={avatar} size='medium' circular onClick={onChangeAvatar} />
            </Grid.Column>
            <Grid.Column width={12}>
              <Editable html="<h2>The title</h2>" />
              <Editable html="<p>The title</p>" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

      <Container className="toolbar">
        {/* <button onClick={() => capture(".resume")}>Download Image</button> */}
        <PDF />
      </Container>
    </>
  );
}

export default App;
