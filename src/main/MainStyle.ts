import {makeStyles, Theme} from '@material-ui/core/styles';
import BackgroundImage from "../common/assets/background.jpg";

const useMainStyles = makeStyles((theme: Theme) =>
    ({
        root: {
            display: 'flex',
            backgroundImage: `url(${BackgroundImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center'
        },
        paper: {
            width: theme.spacing(100),
            height: theme.spacing(75),
            opacity: 0.9
        },
        photoGrid: {
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
            marginBottom: 0,
            '& .MuiIconButton-root': {
                color: 'rgba(255, 255, 255, 0.54)'
            }
        },
        photoDescription: {
            marginLeft: theme.spacing(2),
            flex: 1,
            textAlign: 'center'
        },
        photoPanel: {
            height: theme.spacing(96),
            '& img': {
                position: 'absolute',
                maxWidth: '100%',
                maxHeight: '100%',
                margin: 'auto',
                display: 'block',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }
        }
    })
);

export default useMainStyles;