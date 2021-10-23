import React, { useState } from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';
// import { capture } from './utils';
import { PDF } from '../PDF';

import './App.css';
import Editable from '../Editable/Editable';
import { Popup } from '../Popup/Popup';
import { Toolbar } from '../Toolbar/Toolbar';

export const ELEMENT_TYPES = {
  H1: "H1",
  H2: "H2",
  BODY: "BODY"
};

const template = [
  [],
  [
    { html: "<h2>The title</h2>", type: ELEMENT_TYPES.H1 },
    { html: "<p>write something...</p>", type: ELEMENT_TYPES.BODY },
  ]
]

function App() {
  const [avatar, setAvatar] = useState('https://via.placeholder.com/1000.png?text=Click+to+add+avatar');
  const [message, setMessage] = useState("");
  const [state, setState] = useState(template);

  const onChangeAvatar = () => {
    const url = window.prompt("Enter new avatar URL");

    if (!url) return;

    // TODO: Valid image URL
    console.log({ url });

    setAvatar(url);
  }

  const onPopupComplete = () => setMessage("");

  const addEditable = (column) => (html, type) => {
    const newState = [...state];

    newState[column].push({ html, type });

    setState(newState);
  }

  const onUpdate = (column, index) => (value) => {
    console.log({ column, index });
    console.log('onUpdate', value);

    const newState = [...state];

    newState[column][index] = value;

    setState(newState);
  }

  return (
    <>
      <Popup message={message} onPopupComplete={onPopupComplete} />
      <Container>
        <Grid className="resume" divided columns={2} padded='horizontally'>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image style={{ cursor: 'pointer' }} src={avatar} size='medium' circular onClick={onChangeAvatar} />
              {/* {state[0].map((html, index) => <Editable key={index} html={html} onUpdate={onUpdate(0, index)} />)} */}
            </Grid.Column>
            <Grid.Column width={12}>
              {state[1].map(({ html }, index) => {
                return <Editable key={index} html={html} onUpdate={onUpdate(1, index)} />
              })}
              <Toolbar addEditable={addEditable(1)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

      <Container style={{ padding: '20px' }}>
        {/* <button onClick={() => capture(".resume")}>Download Image</button> */}
        {/* <button onClick={addEditable}>ADD</button>
        <button onClick={() => console.log(state)}>DUMP TO CONSOLE</button> */}
        <PDF />
      </Container>
    </>
  );
}

export default App;
