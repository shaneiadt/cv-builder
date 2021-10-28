import React, { useEffect, useState } from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';
// import { capture } from '../utils';
import { PDF } from '../PDF';
import { getTemplates } from '../templates';

import './App.css';
import Editable from '../Editable/Editable';
import { Popup } from '../Popup/Popup';
import { Toolbar } from '../Toolbar/Toolbar';
// import CustomAvatar from '../Avatar/Avatar';
import { ELEMENT_TYPES } from '../utils/Types';
import { stringToHTML } from '../utils';

stringToHTML('<image src="./avatar.jpg" /><h2>Object<span>ivess</span>ss</h2><p><strong>wr<span>it</span>ing</strong> something over there bros...</p><div><h3>HEADING 3</h3><br/><div>DO <strong>IT</strong></div></div>');

function App() {
  // const [avatar, setAvatar] = useState('https://via.placeholder.com/1000.png?text=Click+to+add+avatar');
  const [message, setMessage] = useState("");
  const [state, setState] = useState(null);

  useEffect(() => {
    setState(getTemplates()[0]);
  }, []);

  const onPopupComplete = () => setMessage("");

  const addEditable = (column) => (content, type) => {
    const newState = { ...state };

    newState.layout.cols[column].items.push({ content, type });

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
                      {/* {columnIndex === 0 && <CustomAvatar />} */}
                      {column.items.map((item, itemIndex) => {
                        switch (item.type) {
                          case ELEMENT_TYPES.IMAGE:
                            return <Image key={`${columnIndex}-${itemIndex}`} style={{ cursor: 'pointer' }} src={item.content} size='medium' circular />;
                          default:
                            return <Editable key={`${columnIndex}-${itemIndex}`} html={item.content} onUpdate={onUpdate(columnIndex, itemIndex)} />
                        }
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
