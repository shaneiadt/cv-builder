import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { Animated } from 'react-animated-css';
import { connect } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
// import { PDFDownloadLink } from '@react-pdf/renderer';

// import { Resume } from '../Resume';
import { loadTemplate } from '../actions';
import Block from '../Block/Block';
import './App.css';
import { BLOCK_TYPE } from '../utils';
import CustomAvatar from '../Avatar/Avatar';

class App extends Component {
  componentDidMount() {
    this.props.loadTemplate();
  }

  render() {
    return (
      <>
        {this.props.template && (
          <Animated animationIn="fadeIn" animationInDuration={1000} isVisible={true}>
            <Container>
              <DndProvider backend={HTML5Backend}>
                <Grid className="resume" divided columns={2} padded='horizontally'>
                  <Grid.Row>
                    {this.props.template.layout.cols.map((column, columnIndex) => {
                      return (
                        <Grid.Column key={`col-${columnIndex}`} width={column.width}>
                          {column.blocks.map((block, blockIndex) => {
                            switch (block.type) {
                              case BLOCK_TYPE.AVATAR:
                                return <CustomAvatar image={block.image} key={`col-${columnIndex}-block-${blockIndex}`} />
                              case BLOCK_TYPE.DEFAULT:
                              default:
                                return <Block key={`col-${columnIndex}-block-${blockIndex}`} {...block} columnIndex={columnIndex} blockIndex={blockIndex} />;
                            }
                          })}
                        </Grid.Column>
                      )
                    })}
                  </Grid.Row>
                </Grid>
              </DndProvider>
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
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { template } = state;

  return {
    template
  };
}

export default connect(mapStateToProps, { loadTemplate })(App);
