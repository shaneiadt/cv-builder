import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Header, Label, Button, Modal, Form, Input, TextArea } from 'semantic-ui-react';

import { updateBlock } from '../actions';

const Block = ({ header = "", subheader = "", text = "", labels = [], columnIndex, blockIndex, updateBlock }) => {
    const [showModal, setShowModal] = useState(false);
    const [content, setContent] = useState({
        header,
        subheader,
        text,
        labels
    });

    const handleChange = (e, { name, value }) => {
        setContent({ ...content, [name]: name === 'labels' ? value.split(",") : value });
    };

    const handleSubmit = () => {
        setShowModal(false);
        
        updateBlock(columnIndex, blockIndex, content);
    }

    return (
        <>
            <Modal
                closeOnDimmerClick={true}
                onClose={() => setShowModal(false)}
                className="block-modal"
                dimmer="blurring"
                open={showModal}>
                <Form onSubmit={handleSubmit}>
                    <Form.Field>
                        <Input
                            value={content.header}
                            name='header'
                            onChange={handleChange} />
                    </Form.Field>
                    <Form.Field>
                        <Input
                            value={content.subheader}
                            name='subheader'
                            onChange={handleChange} />
                    </Form.Field>
                    <Form.Field>
                        <TextArea
                            value={content.text}
                            name='text'
                            onChange={handleChange} />
                    </Form.Field>
                    <Form.Field>
                        <Input
                            value={content.labels.join(",")}
                            name='labels'
                            onChange={handleChange} />
                    </Form.Field>
                    <Button onClick={() => setShowModal(false)}>Cancel</Button>
                    <Button type='submit' primary>Submit</Button>
                </Form>
            </Modal>
            <div className="block">
                <div className="block-actions">
                    <Button.Group basic size='small'>
                        <Button onClick={() => setShowModal(true)} icon='pencil' />
                    </Button.Group>
                </div>
                {header && (
                    <Header as='h2'>
                        {header}
                        {
                            subheader && (
                                <Header.Subheader>
                                    {subheader}
                                </Header.Subheader>
                            )
                        }
                    </Header>
                )}
                {text && (
                    <p>{text}</p>
                )}
                {
                    labels.length > 0 && (
                        <div>
                            {labels.map(label => (
                                <Label className="block-label" key={label}>
                                    {label}
                                </Label>
                            ))}
                        </div>
                    )
                }
            </div>
        </>
    )
};

export default connect(null, { updateBlock })(Block);