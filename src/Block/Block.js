import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useDrag } from 'react-dnd';
import { Header, Label, Button, Modal, Form, Input, TextArea } from 'semantic-ui-react';

import { updateBlock } from '../actions';
import { BLOCK_TYPE } from '../utils';
import BlockContainer from './BlockContainer';

const Block = ({ id, header = "", subheader = "", text = "", labels = [], columnIndex, blockIndex, updateBlock }) => {
    useEffect(() => {
        setContent({ id, header, subheader, text, labels });
    }, [id, header, subheader, text, labels]);

    const [showModal, setShowModal] = useState(false);
    const [content, setContent] = useState({
        id,
        header,
        subheader,
        text,
        labels
    });
    const [{ isDragging }, drag] = useDrag(() => ({
        type: BLOCK_TYPE.DEFAULT,
        item: [columnIndex, blockIndex],
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    const handleChange = (_, { name, value }) => {
        if (name === "labels") {
            const labels = name === "labels" && value === "" ? [] : value.split(",");

            setContent({ ...content, labels });
        } else {
            setContent({ ...content, [name]: value });
        }

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
                            value={content?.labels?.join(",")}
                            name='labels'
                            onChange={handleChange} />
                    </Form.Field>
                    <Button onClick={() => setShowModal(false)}>Cancel</Button>
                    <Button type='submit' primary>Submit</Button>
                </Form>
            </Modal>
            <BlockContainer
                columnIndex={columnIndex}
                blockIndex={blockIndex}
            >
                <div
                    className="block"
                    ref={drag}
                    style={{
                        opacity: isDragging ? 0.5 : 1,
                        cursor: 'move'
                    }}>
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
            </BlockContainer>
        </>
    )
};

export default connect(null, { updateBlock })(Block);