import React, { Component } from 'react';
import { Container, Grid, Button } from 'semantic-ui-react';
import { Animated } from 'react-animated-css';
import ContentEditable from "react-contenteditable";
import sanitizeHtml from "sanitize-html";
import { PDFDownloadLink } from '@react-pdf/renderer';

import { Resume } from '../Resume';
import { ELEMENT_TYPES } from '../utils/Types';
import './App-CE.css';

const sanitizeConf = {
  allowedTags: ["h1", "h2", "div", "br"],
  allowedAttributes: {}
};

const template = {
  name: "col-4-12",
  layout: {
    cols: [
      {
        width: 4,
        items: [
          // { content: "./avatar.jpg", type: ELEMENT_TYPES.IMAGE },
          { content: "<h2>Objectivessss</h2><div><br /></div><div>write something...</div>", type: ELEMENT_TYPES.TEXT },
        ]
      },
      {
        width: 12,
        items: [
          { content: "<h1>My Resumes</h1>", type: ELEMENT_TYPES.TEXT },
        ]
      }
    ]
  }
};

class App extends Component {
  state = template;

  sanitize = (column, index) => {
    const newState = { ...this.state };

    newState.layout.cols[column].items[index].content = sanitizeHtml(newState.layout.cols[column].items[index].content, sanitizeConf);

    console.log('sanitize', newState);

    this.setState(newState);
  }

  onUpdate = (column, index) => (value) => {
    const newState = { ...this.state };

    newState.layout.cols[column].items[index].content = value;

    console.log('update', newState);

    this.setState(newState);
  }

  addElement = (text, type = 'text') => (column, index) => {
    const template = type !== 'text'
      ? `<div><br /></div><${type}>${text}</${type}><div><br /></div>`
      : `<div><br /></div><div>${text}</div><div><br /></div>`;

    const newState = { ...this.state };
    const newHtml = newState.layout.cols[column].items[index].content + template;

    newState.layout.cols[column].items[index].content = newHtml;

    console.log('add element', newState);

    this.setState(newState);
  }

  render() {
    return (
      <>
        <Animated animationIn="fadeIn" animationInDuration={1000} isVisible={true}>
          <Container>
            <Grid className="resume" divided columns={2} padded='horizontally'>
              <Grid.Row>
                {this.state.layout.cols.map((column, columnIndex) => {
                  return (
                    <Grid.Column key={`${columnIndex}`} width={column.width}>
                      {/* {columnIndex === 0 && <CustomAvatar />} */}
                      {column.items.map((item, itemIndex) => {
                        switch (item.type) {
                          // case ELEMENT_TYPES.IMAGE:
                          //   return <Image key={`${columnIndex}-${itemIndex}`} style={{ cursor: 'pointer' }} src={item.content} size='medium' circular />;
                          default:
                            return (
                              <>
                                <ContentEditable
                                  key={`${columnIndex}-${itemIndex}`}
                                  html={item.content}
                                  disabled={false}
                                  onChange={(e) => this.onUpdate(columnIndex, itemIndex)(e.target.value)}
                                  onBlur={() => this.sanitize(columnIndex, itemIndex)}
                                />
                                <Button onClick={() => this.addElement("Header 1", "h1")(columnIndex, itemIndex)}>Header 1</Button>
                                <Button onClick={() => this.addElement("Header 2", "h2")(columnIndex, itemIndex)}>Header 2</Button>
                                <Button onClick={() => this.addElement("Some Text")(columnIndex, itemIndex)}>Text</Button>
                              </>
                            )
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
              <PDFDownloadLink document={<Resume state={this.state} />} fileName={"Resume"}>
                <button style={{ width: '200px', padding: '10px' }}>Download PDF</button>
              </PDFDownloadLink>
            </div>
          </Container>
        </Animated>
      </>
    );
  }
}

export default App;
