import React, { useState } from 'react';
import { Container, Header, Grid, Button, Icon, Image } from 'semantic-ui-react';
import { lorem } from 'faker';
import { capture } from './utils';
import { Renderer } from './Renderer';
import { CustomEditor } from './Slate';
import './App.css';

const templates = [
  {
    id: 1,
    title: "My Resume",
    cols: [
      [
        {
          "name": "editor1",
          "component": CustomEditor,
          "defaultValue": [
            {
              "type": 'heading-two',
              "children": [{ text: 'Heading' }],
            },
            {
              type: 'paragraph',
              children: [{ text: lorem.sentences(2) }],
            },
          ]
        },
      ],
      [
        {
          "name": "editor2",
          "component": CustomEditor,
          "defaultValue": [
            {
              "type": 'heading-two',
              "children": [{ text: 'Heading' }],
            },
            {
              type: 'paragraph',
              children: [{ text: lorem.sentences(6) }],
            },
          ]
        },
      ]
    ]
  }
];

// const SectionToolbar = () => (
//   <div>
//     <Button.Group>
//       <Button icon>
//         <Icon name='align left' />
//       </Button>
//       <Button icon>
//         <Icon name='align center' />
//       </Button>
//       <Button icon>
//         <Icon name='align right' />
//       </Button>
//       <Button icon>
//         <Icon name='align justify' />
//       </Button>
//     </Button.Group>{' '}
//     <Button.Group>
//       <Button icon>
//         <Icon name='bold' />
//       </Button>
//       <Button icon>
//         <Icon name='underline' />
//       </Button>
//       <Button icon>
//         <Icon name='text width' />
//       </Button>
//     </Button.Group>
//   </div>
// )

function App() {
  const [config, setConfig] = useState(templates[0]);
  const selectTemplate = (id) => setConfig({ ...templates.find(t => t.id === id) });
  const [showEditButton, setShowEditButton] = useState(false);
  const addItem = (colIndex) => {
    const template = { ...config };

    template.cols[colIndex].push(
      {
        "name": "editor2kasjhdkajsd",
        "component": CustomEditor,
        "defaultValue": [
          {
            "type": 'heading-two',
            "children": [{ text: 'Heading' }],
          },
          {
            type: 'paragraph',
            children: [{ text: lorem.sentences(2) }],
          },
        ]
      },
    );

    setConfig(template);
  };

  const onChangeAvatar = () => {
    const url = window.prompt("Enter new avatar URL");

    if (!url) return;

    // TODO: Valid image URL
    console.log({ url });
  }

  return (
    <>
      <Container className="resume">
        {config ?
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column width={4}>
                <Image style={{ cursor: 'pointer' }} src='./avatar.jpg' size='medium' circular onClick={onChangeAvatar} />
              </Grid.Column>
              <Grid.Column width={12}>
                <Renderer config={[{
                  "name": "h1", "component": CustomEditor, "defaultValue": [{ type: "heading-one", children: [{ text: "My Resume" }] }, {
                    type: 'paragraph',
                    children: [{ text: lorem.sentences(4) }],
                  },]
                }]} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2} divided>
              <Grid.Column width={4}>
                <Renderer config={config.cols[0]} />
                <div style={{ padding: '20px 0' }} onMouseEnter={() => setShowEditButton(true)} onMouseLeave={() => setShowEditButton(false)}>
                  {showEditButton &&
                    <Button fluid icon onClick={() => addItem(0)}>
                      <Icon name='plus' />
                    </Button>
                  }
                </div>
              </Grid.Column>
              <Grid.Column width={12}>
                <Renderer config={config.cols[1]} />
                <div style={{ padding: '20px 0' }} onMouseEnter={() => setShowEditButton(true)} onMouseLeave={() => setShowEditButton(false)}>
                  {showEditButton &&
                    <Button fluid icon onClick={() => addItem(1)}>
                      <Icon name='plus' />
                    </Button>
                  }
                </div>
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
