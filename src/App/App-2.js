import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { Animated } from 'react-animated-css';
import { connect } from 'react-redux';
// import { PDFDownloadLink } from '@react-pdf/renderer';

// import { Resume } from '../Resume';
import { loadTemplate } from '../actions';
import Block from '../Block/Block';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.loadTemplate();
  }

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
        {this.props.template && (
          <Animated animationIn="fadeIn" animationInDuration={1000} isVisible={true}>
            <Container>
              <Grid className="resume" divided columns={2} padded='horizontally'>
                <Grid.Row>
                  {this.props.template.layout.cols.map((column, columnIndex) => {
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
