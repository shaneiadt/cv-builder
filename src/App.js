import React from 'react';
import { Container, Header, Image, Grid, Placeholder, Button } from 'semantic-ui-react';
import html2canvas from 'html2canvas';
import './App.css';

const capture = () => {
  html2canvas(document.querySelector(".resume")).then(canvas => {
    var a = document.createElement('a');
    
    // a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
    a.href = canvas.toDataURL();
    a.download = 'resume.png';
    a.click();
  });
}

function App() {
  return (
    <>
      <Container className="resume">
        <Header as='h1'>CV Builder</Header>

        <Image src="./avatar.jpg" circular size="small" />

        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
            </Grid.Column>
            <Grid.Column>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={3}>
            <Grid.Column>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
            </Grid.Column>
            <Grid.Column>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
            </Grid.Column>
            <Grid.Column>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

      <Container>
        <Button onClick={capture}>Download</Button>
      </Container>
    </>
  );
}

export default App;
