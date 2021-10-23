import React from 'react';
import ContentEditable from 'react-contenteditable';

export default class Editable extends React.Component {
    constructor(props) {
        super(props);
        this.contentEditable = React.createRef();
        this.state = { html: props.html ?? "", editable: true };
    };

    handleChange = evt => {
        this.setState({ html: evt.target.value });
        this.props.onUpdate(evt.target.value);
    }

    render() {
        return (
            <>
                <ContentEditable
                    innerRef={this.contentEditable}
                    html={this.state.html}
                    disabled={!this.state.editable}
                    onChange={this.handleChange}
                    tagName='section'
                />
            </>
        )
    };
};