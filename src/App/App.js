import React, { useEffect, useState } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { PDF } from '../PDF';
import { getTemplates } from '../templates';

import './App.css';
import Editable from '../Editable/Editable';
import { Popup } from '../Popup/Popup';
import { Toolbar } from '../Toolbar/Toolbar';

function App() {
  const [avatar, setAvatar] = useState('https://via.placeholder.com/1000.png?text=Click+to+add+avatar');
  const [message, setMessage] = useState("");
  const [state, setState] = useState(null);

  useEffect(() => {
    setState(getTemplates()[0]);
  }, []);

  const onChangeAvatar = () => {
    const url = window.prompt("Enter new avatar URL");

    if (!url) return;

    // TODO: Valid image URL
    console.log({ url });

    setAvatar(url);
  }

  const onPopupComplete = () => setMessage("");

  const addEditable = (column) => (html, type) => {
    const newState = { ...state };

    newState.layout.cols[column].items.push({ html, type });

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
      {state &&
        <>
          <Container>
            <Grid className="resume" divided columns={state.layout.cols.length} padded='horizontally'>
              <Grid.Row>
                {state.layout.cols.map((column, columnIndex) => {
                  return (
                    <Grid.Column key={`${columnIndex}`} width={column.width}>
                      {/* <Image style={{ cursor: 'pointer' }} src={avatar} size='medium' circular onClick={onChangeAvatar} /> */}
                      {column.items.map((item, itemIndex) => {
                        return <Editable key={`${columnIndex}-${itemIndex}`} html={item.html} onUpdate={onUpdate(columnIndex, itemIndex)} />
                      })}
                      <Toolbar addEditable={addEditable(columnIndex)} />
                    </Grid.Column>
                  )
                })}
              </Grid.Row>
            </Grid>
          </Container>

          <Container style={{ padding: '20px' }}>
            {/* <button onClick={() => capture(".resume")}>Download Image</button> */}
            {/* <button onClick={addEditable}>ADD</button>
        <button onClick={() => console.log(state)}>DUMP TO CONSOLE</button> */}
            <PDF content={state} />
          </Container>
        </>
      }
    </>
  );
}

export default App;
