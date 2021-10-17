import React, { useState } from 'react';
import { Container, Header, Grid, TextArea, Form, Button } from 'semantic-ui-react';
import { capture } from './utils';
import { Renderer } from './Renderer';
import './App.css';

const CustomText = (props) => (
  <Form>
    <TextArea {...props} rows={1} />
  </Form>
)

const templates = [
  {
    id: 1,
    title: "My Resume",
    cols: [
      [
        {
          "name": "fullName",
          "component": CustomText,
          "value": "John Doe"
        },
      ],
      [
        {
          "name": "tArea1",
          "component": CustomText,
          "placeholder": "John dfsdf"
        },
      ]
    ]
  }
];

function App() {
  const [config, setConfig] = useState(null);
  const selectTemplate = (id) => setConfig({ ...templates.find(t => t.id === id) });

  return (
    <>
      <Container className="resume">
        {config ?
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Header as="h1">My Resume</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column width={4}>
                <Renderer config={config.cols[0]} />
              </Grid.Column>
              <Grid.Column width={12}>
                <Renderer config={config.cols[1]} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          :
          <Grid>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Header as="h1">Select a template to use</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
              <Grid.Column textAlign="center">
                <Button onClick={() => selectTemplate(1)}>Template 1</Button>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <Button onClick={() => selectTemplate(1)}>Template 2</Button>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <Button onClick={() => selectTemplate(1)}>Template 3</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        }
      </Container>

      <Container>
        <Button onClick={() => capture(".resume")}>Download</Button>
      </Container>
    </>
  );
}

export default App;
