import { Chip, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import Axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router';
// import { useUserContext } from '../../../context/UserContext';
import DropZone from './dropzone/DropZone';
import './upload.scss';
import target from '../../../helper/target'

export const changeFileNameToValid = (fileName) => {
    const name = fileName.split('.').slice(0,-1).join();
    const fileType = fileName.split('.').pop();
    return name.replace(/[&/\\\-@`!;#,^+()$[\]~%.'":*?<>{}]/g,'').concat(`.${fileType}`);
}

function Upload(props) {
    // const {userSession} = props;
    const [tags, setTags] = React.useState([])
    const [selectedFile, setSelectedFile] = React.useState();
    const [visibility, setVisibility] = React.useState("")
    const [title, setTitle] = React.useState("")

    const handleDelete = (remove) => {
        setTags([...tags].filter(tag=> tag !== remove));
    }

    const handleSelectChange = (e, stateName) => {
        if (stateName === "visibility") {
            setVisibility(e.target.value)
        } else if (stateName === "tags") {   
            if (e.target.value !== "" && e.target.value) {
                setTags([...new Set([...tags, e.target.value])]);
            }
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(selectedFile.name)
        const changedFileName = new File([selectedFile], changeFileNameToValid(selectedFile.name), {
            type: selectedFile.type,
            lastModified: selectedFile.lastModified,
        })
        setSelectedFile(changedFileName)
        console.log(changedFileName)
        // console.log(tags)
        // console.log(title)
        // console.log(visibility)
        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('tags[]', tags);
        formData.append('visibility', visibility);
        formData.append('title', title);
        Axios.post(`${target}/api/content`, formData, {withCredentials: true})
            .then((res) =>
                console.log(res.data)
            )
    }

    return (
        <div className="upload-container">
            <div className="upload-header">
                <Typography className="upload-title" variant="h5">Upload meme</Typography>
                <button className="upload-close" onClick={()=>props.history.goBack()}><Close /></button>
            </div>
            <div className="upload-form">
                <DropZone selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
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
                            value={title}
                            onChange={(e)=>setTitle(e.target.value)}
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
                                    // defaultValue="public"
                                    displayEmpty
                                    onChange={(e)=>handleSelectChange(e, "visibility")}
                                    title="Visibility"
                                    value={visibility}
                                    id="upload-title-textfield"
                                    aria-labelledby="visibility"
                                    >
                                    <MenuItem value="public">Public</MenuItem>
                                    <MenuItem value="private">Private</MenuItem>
                                </Select>
                                <Select
                                    displayEmpty
                                    onChange={(e)=>handleSelectChange(e, "tags")}
                                    defaultValue=""
                                    aria-labelledby="tag-label">
                                    <MenuItem defaultValue=""></MenuItem>
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
                            <button className="upload-button-submit" onClick={onSubmit}>Upload Meme</button>
                            <button className="upload-button-cancel">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Upload)
