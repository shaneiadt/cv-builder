import React, { useEffect, useState } from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';
import { getTemplates } from '../templates';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Resume } from '../Resume';
import { Animated } from 'react-animated-css';

import './App.css';
import Editable from '../Editable/Editable';
import { Popup } from '../Popup/Popup';
// import CustomAvatar from '../Avatar/Avatar';
import { ELEMENT_TYPES } from '../utils/Types';

function App() {
  // const [avatar, setAvatar] = useState('https://via.placeholder.com/1000.png?text=Click+to+add+avatar');
  const [message, setMessage] = useState("");
  const [state, setState] = useState(null);

  useEffect(() => {
    setState(getTemplates()[0]);
  }, []);

  const onPopupComplete = () => setMessage("");

  const onUpdate = (column, index) => (value) => {
    const newState = { ...state };

    newState.layout.cols[column].items[index].content = value;

    setState(newState);
  }

  return (
    <>
      <Popup message={message} onPopupComplete={onPopupComplete} />
      {state &&
        <>
          <Animated animationIn="fadeIn" animationInDuration={1000} isVisible={true}>
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
                      </Grid.Column>
                    )
                  })}
                </Grid.Row>
              </Grid>
            </Container>

            <Container style={{ padding: '20px' }}>
              {/* 
              <PDFViewer width="1000" height="1000">
                <Quixote />
              </PDFViewer>
              <br/>
            */}
              <div style={{ textAlign: 'center' }}>
                <PDFDownloadLink document={<Resume state={state} />} fileName={"Resume"}>
                  <button style={{ width: '200px', padding: '10px' }}>Download PDF</button>
                </PDFDownloadLink>
              </div>
            </Container>
          </Animated>
        </>
      }
    </>
  );
}

export default App;
