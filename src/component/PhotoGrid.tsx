import React from "react";
import Masonry from "react-responsive-masonry";
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import PhotoModel from "../model/PhotoModel";
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

/**
 * PhotoGrid component, which populates the photos in Masonry mode
 *
 * @author Terry Deng
 */
interface PhotoGridProps {
    cols: number, // Number of columns in the Photo Grid
    photoList: Array<PhotoModel>, // List of photos to be populated in the grid
    photoGridClass?: string, // Optional class to be applied to the grid
    parentHandler: {
        openPhotoViewer: () => void,
        setPhotoIndex: (param: number) => void
    } // State handlers passed from the parent component
}

const PhotoGrid = (props: PhotoGridProps) => {
    return (
        <div className={props.photoGridClass}>
            <Masonry columnsCount={props.cols} gutter="8px">
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
            </Masonry>
        </div>
    );
}

export default PhotoGrid;