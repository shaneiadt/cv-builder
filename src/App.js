import React, { useState } from 'react';
import { Container, Header, Image, Grid, Placeholder, Button, Input } from 'semantic-ui-react';
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
  const [content, setContent] = useState({
    header: "CV Builder",
    isEditMode: false
  });


  return (
    <>
      <Container className="resume">
        {!content.isEditMode ?
          <Header as='h1' onClick={() => {
            setContent({ ...content, isEditMode: true });
          }}>{content.header}</Header>
          :
          <Input focus={true} defaultValue={content.header} onBlur={() => setContent({ ...content, isEditMode: false })} onChange={(_, input) => setContent({ ...content, header: input.value })} />
        }

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
