import React from 'react'
import { Publish } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import './dropzone.scss'
import { useSnackbarContext } from '../../../../context/SnackbarContext';
import Close from '@material-ui/icons/Close';

function DropZone(props) {
    const { setOpen, setMessage } = useSnackbarContext();
    const imageRef = React.useRef();
    // const [errorMessage, setErrorMessage] = React.useState('');

    const dragOver = (e) => {
        e.preventDefault();
    }
    
    const dragEnter = (e) => {
        e.preventDefault();
    }
    
    const dragLeave = (e) => {
        e.preventDefault();
    }
    
    const fileDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files;
        if (file.length === 1) {
            const checkIfValid = validateFile(file[0]);
            if ( checkIfValid === "okay") {
                props.setSelectedFile(file[0])
                const reader = new FileReader();
                console.log(file[0])
                reader.readAsDataURL(file[0]);
                reader.onload = (e) => imageRef.current.style.backgroundImage = `url(${e.target.result})`;
            } else if (checkIfValid === "invalid file type") {
                setMessage("invalid file type!");
                setOpen(true)
            } else if (checkIfValid === "file size too big") {
                setMessage("file size too big! (5mb max)");
                setOpen(true)
            }
        } else {
            setMessage("You can only upload one file at a time!");
            setOpen(true)
        }
    }

    const deleteImage = () => {
        props.setSelectedFile(null)
    }

    const uploadByClick = (e) => {
        e.preventDefault();
        const file = e.target.files;
        if (file.length === 1) {
            const checkIfValid = validateFile(file[0]);
            if ( checkIfValid === "okay") {
                props.setSelectedFile(file[0])
                const reader = new FileReader();
                // console.log(file[0])
                reader.readAsDataURL(file[0]);
                reader.onload = (e) => imageRef.current.style.backgroundImage = `url(${e.target.result})`;
            } else if (checkIfValid === "invalid file type") {
                setMessage("invalid file type!");
                setOpen(true)
            } else if (checkIfValid === "file size too big") {
                setMessage("file size too big! (5mb max)");
                setOpen(true)
            }
        } else {
            setMessage("You can only upload one file at a time!");
            setOpen(true)
        }
    }

    // const fileSize = (size) => {
    //     if (size === 0) return '0 Bytes';
    //     const k = 1024;
    //     const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    //     const i = Math.floor(Math.log(size) / Math.log(k));
    //     return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    // }

    // const fileType = (fileName) => {
    //     return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName;
    // }

    const validateFile = (file) => {
        const size = 1024 * 1024 * 4; //in bytes
        const validTypes = [
            'image/jpeg', 
            'image/jpg', 
            'image/png', 
            'image/gif', 
            'image/x-icon', 
            'image/webp', 
            'image/svg+xml',
            'video/mp4',
            'video/webm',
        ];
        if (validTypes.indexOf(file.type) === -1) {
            return "invalid file type";
        }
        if (file.size > size) {
            return "file size too big";
        }
        return "okay";
    }

    return (
        <div className="upload-media"
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDrop={fileDrop}>
            {props.selectedFile ? 
            <div ref={imageRef} className="uploaded-meme">
                {props.selectedFile.name}
                <button className="upload-close-button" onClick={deleteImage}><Close /></button>
            </div> : 
            <>
                <Publish fontSize="large" />
                <Typography >
                    Drop a file to upload or 
                </Typography>
                <input type="file" className="upload-button-file" onChange={uploadByClick}/>
            </>}
        </div>
    )
}

export default DropZone
