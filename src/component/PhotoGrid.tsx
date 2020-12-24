import React from "react";
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import PhotoModel from "../model/PhotoModel";
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

interface PhotoGridProps {
    cols: number, // Number of columns in the Phote Grid
    gap: number,  // The gap between items in px.
    photoList: Array<PhotoModel>,
    photoGrid?: string,
    parentHandler: {
        openPhotoViewer: () => void,
        setPhotoIndex: (param: number) => void
    }
}

const PhotoGrid = (props: PhotoGridProps) => {
    return (
        <ImageList className={props.photoGrid} variant="masonry" cols={props.cols} gap={props.gap}>
            {props.photoList.map((photo, index) => (
                <ImageListItem id={`unSplashImg_${index}`} key={index}>
                    <img src={photo.urls.regular} alt={photo.alt_description} />
                    <ImageListItemBar
                        actionIcon={
                            <IconButton
                                style={{color: 'rgba(255, 255, 255, 0.54)'}}
                                onClick={() => {
                                    props.parentHandler.openPhotoViewer();
                                    props.parentHandler.setPhotoIndex(index);
                                }}
                            >
                                <InfoIcon />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

export default PhotoGrid;