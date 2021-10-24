import React from 'react'
import Avatar from 'react-avatar-edit';

export default class CustomAvatar extends React.Component {
    constructor(props) {
        super(props)
        const src = './avatar.jpg'
        this.state = {
            preview: null,
            defaultPreview: null,
            src
        }
    }

    onCropDefault = (preview) => {
        this.setState({ defaultPreview: preview })
    }

    onCrop = (preview) => {
        this.setState({ preview })
    }

    onCloseDefault = () => {
        this.setState({ defaultPreview: null })
    }

    onClose = () => {
        this.setState({ preview: null })
    }

    onLoadNewImage = () => {
        const src = './einshtein2.jpeg'
        this.setState({ src })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row" style={{ marginTop: '45px' }}>
                    <div className="col-2" />
                    <div className="col-8">
                        <h4>Default usage</h4>
                    </div>
                    <div className="col-2" />
                </div>
                <div className="row">
                    <div className="col-2" />
                    <div className="col-5">
                        <Avatar
                            width={390}
                            height={295}
                            exportSize={390}
                            onCrop={this.onCropDefault}
                            onClose={this.onCloseDefault}
                        />
                    </div>
                    <div className="col-2">
                        <h5>Preview</h5>
                        <img alt="" style={{ width: '150px', height: '150px' }} src={this.state.defaultPreview} />
                    </div>
                    <div className="col-3" />
                </div>
            </div>
        )
    }
}