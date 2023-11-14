import React from "react";
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PhotoModel from "../model/PhotoModel";
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

/**
 * PhotoViewer component, which shows the selected photo in full screen.
 *
 * User can navigate to the previous/next photo by clicking the arrows.
 * Upon closing the photo viewer, user will be taken back to the PhotoGrid and scrolled to the last photo seen in the PhotoViewer.
 *
 * @author Terry Deng
 */
interface PhotoViewerProps {
    open: boolean, // Indicate if the photo viewer is open or closed
    closeHandler: () => void, // Handler to close the photo viewer
    currentIndex: number, // Index of the current photo populated in the viewer
    photoList: PhotoModel[], // List of photos to be populated in the viewer
    viewerStyle: object, // Styles applied to the photo viewer background
    photoDescriptionClass?: string, // Optional class applied to the photo description
    photoPanelClass?: string, // Optional class applied to the photo viewer
    parentHandler: {
        setPhotoIndex: (param: number) => void
    } // State handlers passed from the parent component
}

const PhotoViewer = (props: PhotoViewerProps) => {
    const currentPhoto = props.photoList[props.currentIndex];

    const backHandler = () => {
        props.parentHandler.setPhotoIndex(props.currentIndex - 1);
    }

    const nextHandler = () => {
        props.parentHandler.setPhotoIndex(props.currentIndex + 1);
    }

    const scrollCallback = () => {
        document.getElementById("unSplashImg_" + props.currentIndex)!.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <Dialog
            fullScreen
            PaperProps={{style: props.viewerStyle}}
            open={props.open}
            onClose={() => {
                props.closeHandler && props.closeHandler();
            }}
            TransitionProps={{
                onExited: scrollCallback
            }}
        >
            <AppBar position="sticky">
                <Toolbar>
                    {
                        props.currentIndex > 0 && (
                            <IconButton edge="start" color="inherit" onClick={backHandler} aria-label="close">
                                <ArrowBackIcon />
                            </IconButton>
                        )
                    }
                    <Typography variant="h6" className={props.photoDescriptionClass}>
                        {props.open && (currentPhoto.alt_description + ' (' + (props.currentIndex + 1) + '/' + props.photoList.length + ')')}
                    </Typography>
                    {
                        props.currentIndex < props.photoList.length - 1 && (
                            <IconButton edge="start" color="inherit" onClick={nextHandler} aria-label="close">
                                <ArrowForwardIcon />
                            </IconButton>
                        )
                    }
                </Toolbar>
            </AppBar>
            <div className={props.photoPanelClass}>
                {props.open && <img src={currentPhoto.urls.regular} alt={currentPhoto.alt_description} />}
            </div>
        </Dialog>
    );
}

export default PhotoViewer;