import React, { useState } from 'react';
import { Container, Header, Image, Grid, Placeholder, Button, Input } from 'semantic-ui-react';
import { capture } from './utils';
import './App.css';

function App() {
  const [config, setConfig] = useState({});

  return (
    <>
      <Container className="resume">
        {/* {!content.isEditMode ?
          <Header as='h1' onClick={() => {
            setContent({ ...content, isEditMode: true });
          }}>{content.header}</Header>
          :
          <Input focus={true} defaultValue={content.header} onBlur={() => setContent({ ...content, isEditMode: false })} onChange={(_, input) => setContent({ ...content, header: input.value })} />
        }

        <Image src="./avatar.jpg" circular size="small" /> */}

        <Grid>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Header as="h1">Select a template to use</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column textAlign="center">
              <Button>Template 1</Button>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Button>Template 2</Button>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Button>Template 3</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

      <Container>
        <Button onClick={() => capture(".resume")}>Download</Button>
      </Container>
    </>
  );
}

export default App;
