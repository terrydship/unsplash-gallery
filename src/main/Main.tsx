import React, {useState} from "react";
import useMainStyles from "./MainStyle";
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import PhotoGrid from "../component/PhotoGrid";
import PhotoViewer from "../component/PhotoViewer";
import InfiniteScroll from "react-infinite-scroll-component";
import UnsplashPhotoResource from "../common/resource/UnsplashPhotoResource";
import BackgroundImage from "../common/assets/background.jpg";

// Maximum number of photos to be loaded. Change it accordingly for demo/testing purpose.
const LOADING_THRESHOLD = 36;

/*
 * Custom hook to simulate the constructor in a class component.
 * Ensures the callback happens only ONCE and BEFORE the initial render.
 */
const useConstructor = (callBack: () => void) => {
    const [hasBeenCalled, setHasBeenCalled] = useState(false);
    if (!hasBeenCalled) {
        callBack && callBack();
        setHasBeenCalled(true);
    }
}

/**
 * Main component, which hosts the PhotoGrid and PhotoViewer. It is following React's "Lifting State Up" rule,
 * which passes states down to its children components through properties, then let the children components handle
 * any state change by passing down the state handlers.
 *
 * User can scroll down infinitely on the PhotoGrid component to load more photos until it reaches the LOADING_THRESHOLD.
 *
 * @author Terry Deng
 */
export default function Main() {
    // A CSS-in-JS solution that makes styles scoped in a conflict-free and reusable way.
    const classes = useMainStyles();

    const [photoList, setPhotoList] = useState<any>([]);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [viewerOpen, setViewerOpen] = useState<boolean>(false);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);

    const loadPhotos = async(count = 12) => {
        if (photoList.length >= LOADING_THRESHOLD) {
            setHasMore(false);
        } else {
            let response = await new UnsplashPhotoResource().getPhotoList(count);
            // Add newly loaded photos to the original photo list
            setPhotoList([...photoList, ...response.data]);
        }
    }

    // Load photos only once before the initial render. It also gets rid of the warning message when useEffect.
    useConstructor(() => loadPhotos());

    return (
        <Box className={classes.root}>
            <Paper className={classes.paper} elevation={24} >
                <InfiniteScroll
                    dataLength={photoList.length}
                    next={() => loadPhotos(6)}
                    height={600}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                >
                    {
                        photoList && (
                            <PhotoGrid
                                cols={3}
                                photoList={photoList}
                                photoGridClass={classes.photoGrid}
                                parentHandler={{
                                    openPhotoViewer: () => setViewerOpen(true),
                                    setPhotoIndex: (index: number) => setCurrentPhotoIndex(index)
                                }}
                            />
                        )
                    }
                </InfiniteScroll>
                <PhotoViewer
                    open={viewerOpen}
                    closeHandler={() => setViewerOpen(false)}
                    currentIndex={currentPhotoIndex}
                    photoList={photoList}
                    viewerStyle={{
                        backgroundImage: `url(${BackgroundImage})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}
                    photoDescriptionClass={classes.photoDescription}
                    photoPanelClass={classes.photoPanel}
                    parentHandler={{
                        setPhotoIndex: (index: number) => setCurrentPhotoIndex(index)
                    }}
                />
            </Paper>
        </Box>
    );
}
