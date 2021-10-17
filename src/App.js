import React, { useState } from 'react';
import { Container, Header, Grid, Button, Icon } from 'semantic-ui-react';
import { capture } from './utils';
import { Renderer } from './Renderer';
import { Editor } from './Slate';
import './App.css';

const templates = [
  {
    id: 1,
    title: "My Resume",
    cols: [
      [
        {
          "name": "editor1",
          "component": Editor,
          "defaultValue": [
            {
              type: 'paragraph',
              children: [{ text: 'A line of text in a paragraph.' }],
            },
          ]
        },
      ],
      [
        {
          "name": "editor2",
          "component": Editor,
          "defaultValue": [
            {
              type: 'paragraph',
              children: [{ text: 'A line of text in a asfasf.' }],
            },
          ]
        },
        {
          "name": "editor3",
          "component": Editor,
          "defaultValue": [
            {
              type: 'paragraph',
              children: [{ text: 'Thrid One' }],
            },
          ]
        },
      ]
    ]
  }
];

function App() {
  const [config, setConfig] = useState(null);
  const selectTemplate = (id) => setConfig({ ...templates.find(t => t.id === id) });
  const addItem = (id) => {
    const template = { ...config };

    template.cols[1].push({
      "name": "editor4",
      "component": Editor,
      "defaultValue": [
        {
          type: 'paragraph',
          children: [{ text: 'Just added' }],
        },
      ]
    });

    setConfig(template);
  };

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
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button icon onClick={() => addItem(1)}>
                  <Icon name='plus' />
                </Button>
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
