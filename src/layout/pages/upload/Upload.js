import { Chip, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { Close, Publish } from '@material-ui/icons';
import React from 'react';
import { withRouter } from 'react-router';
import './upload.scss';

function Upload(props) {
    const [tags, setTags] = React.useState(["memes"])

    const addTag = (e) => {
        setTags([...new Set([...tags, e.target.value])])
    }

    const handleDelete = (remove) => {
        setTags([...tags].filter(tag=> tag !== remove))
    }

    return (
        <div className="upload-container">
            <div className="upload-header">
                <Typography className="upload-title" variant="h5">Upload meme</Typography>
                <Close style={{position: 'relative', top: '5px'}} />
            </div>
            <div className="upload-form">
                <div className="upload-media">
                    <Publish />
                    <Typography >Drop a file to upload or <button>Browse</button></Typography>
                </div>
                <div className="upload-details">
                    <div className="upload-details-tab">
                        <Typography className="upload-details-tab-item-selected">
                            Details
                        </Typography>
                        <Typography className="upload-details-tab-item-blurred">
                            Options
                        </Typography>
                    </div>
                    <div className="upload-details-content">
                        <TextField 
                            className="upload-txt-title"
                            name="title"
                            label="Title"
                            fullWidth
                            id="upload-title-textfield"
                            size="medium"
                            required
                        />
                        
                        <div className="upload-label-dropdown">
                            <div className="labels">
                                <div className="label"><label name="visibility">Visibility: </label></div>
                                <div className="label"><label name="tag-label">Tags: </label></div>
                            </div>

                            <div className="dropdowns">
                                <Select
                                    defaultValue="public"
                                    title="Visibility"
                                    id="upload-title-textfield"
                                    aria-labelledby="visibility"
                                    >
                                    <MenuItem value="public">Public</MenuItem>
                                    <MenuItem value="private">Private</MenuItem>
                                </Select>
                                <Select
                                    defaultValue="meme"
                                    aria-labelledby="tag-label"
                                    onChange={addTag}>
                                    <MenuItem value="meme">Meme</MenuItem>
                                    <MenuItem value="fluff">Fluff</MenuItem>
                                    <MenuItem value="kappa">Kappa</MenuItem>
                                    <MenuItem value="NSFW">NSFW</MenuItem>
                                </Select>
                            </div>
                        </div>
                        <div className="upload-tags-chips">
                            {tags.map((tag, index)=> <Chip style={{marginLeft: '5px'}} key={index} variant="outlined" size="small" label={tag} onDelete={()=>handleDelete(tag)} />)}
                        </div>
                        <div className="upload-button-container">
                            <button className="upload-button-submit">Upload Meme</button>
                            <button className="upload-button-cancel">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Upload)
