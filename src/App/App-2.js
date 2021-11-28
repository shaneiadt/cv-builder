import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { Animated } from 'react-animated-css';
// import ContentEditable from "react-contenteditable";
// import sanitizeHtml from "sanitize-html";
// import { PDFDownloadLink } from '@react-pdf/renderer';

// import { Resume } from '../Resume';
// import { ELEMENT_TYPES } from '../utils/Types';
import Block from '../Block/Block';
import './App.css';

const BLOCK_TYPE = {
  DEFAULT: "DEFAULT"
};

const template = {
  name: "col-4-12",
  layout: {
    cols: [
      {
        width: 4,
        blocks: [
          {
            type: BLOCK_TYPE.DEFAULT,
            header: "Header",
            text: "Aliquam erat volutpat. Aliquam rhoncus ligula sed nisl suscipit faucibus. Phasellus eleifend lorem sed cursus accumsan. Suspendisse condimentum nisi erat, suscipit mollis nisl fringilla at. Maecenas gravida libero non porta laoreet.",
          }
        ]
      },
      {
        width: 12,
        blocks: [
          {
            type: BLOCK_TYPE.DEFAULT,
            header: "Header",
            subheader: "Subheader",
            text: "Aliquam erat volutpat. Aliquam rhoncus ligula sed nisl suscipit faucibus. Phasellus eleifend lorem sed cursus accumsan. Suspendisse condimentum nisi erat, suscipit mollis nisl fringilla at. Maecenas gravida libero non porta laoreet.",
            labels: ["ReactJs"]
          },
          {
            type: BLOCK_TYPE.DEFAULT,
            header: "Header",
            subheader: "Subheader",
            text: "Aliquam erat volutpat. Aliquam rhoncus ligula sed nisl suscipit faucibus. Phasellus eleifend lorem sed cursus accumsan. Suspendisse condimentum nisi erat, suscipit mollis nisl fringilla at. Maecenas gravida libero non porta laoreet.",
            labels: ["HTML", "CSS"]
          }
        ]
      }
    ]
  }
};

class App extends Component {
  state = template;

  onChange = (column, index) => (block) => {
    console.log(column, index, block);
    const newState = { ...this.state };

    newState.layout.cols[column].blocks[index] = {
      ...newState.layout.cols[column].blocks[index],
      ...block
    };

    console.log('update', newState);

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
                      {column.blocks.map((block, blockIndex) => {
                        return (
                          <>
                            <Block {...block} onChange={(block) => this.onChange(columnIndex, blockIndex)(block)} />
                          </>
                        )
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
            {/* <div style={{ textAlign: 'center' }}>
              <PDFDownloadLink document={<Resume state={this.state} />} fileName={"Resume"}>
                <button style={{ width: '200px', padding: '10px' }}>Download PDF</button>
              </PDFDownloadLink>
            </div> */}
          </Container>
        </Animated>
      </>
    );
  }
}

export default App;
