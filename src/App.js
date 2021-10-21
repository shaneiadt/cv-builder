import React, { useState } from 'react';
import { Image } from 'semantic-ui-react';
import { capture } from './utils';
import { Editor } from './Editor';
import col1 from './templates/1';
import col2 from './templates/2';

import './App.css';

const template = {
  cols: [col1, col2]
};

function App() {
  // const [config, setConfig] = useState(templates[0]);
  // const selectTemplate = (id) => setConfig({ ...templates.find(t => t.id === id) });
  // const [showEditButton, setShowEditButton] = useState(false);
  const [avatar, setAvatar] = useState('https://via.placeholder.com/1000.png?text=Click+to+add+avatar');

  const onChangeAvatar = () => {
    const url = window.prompt("Enter new avatar URL");

    if (!url) return;

    // TODO: Valid image URL
    console.log({ url });

    setAvatar(url);
  }

  return (
    <>
      <div className="container">
        <div className="resume">
          <div>
            <Image style={{ cursor: 'pointer' }} src={avatar} size='medium' circular onClick={onChangeAvatar} />
            <Editor template={template.cols[0]} />
          </div>
          <div>
            <Editor template={template.cols[1]} />
          </div>
        </div>
      </div>

      <div className="toolbar">
        <div>
          <button onClick={() => capture(".resume")}>Download</button>
        </div>
      </div>
    </>
  );
}

export default App;
