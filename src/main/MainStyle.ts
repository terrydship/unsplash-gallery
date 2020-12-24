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
            width: 800,
            height: 600,
            opacity: 0.9
        },
        photoGrid: {
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
            marginBottom: 0
        },
        appBar: {
            position: 'relative'
        },
        photoDescription: {
            marginLeft: theme.spacing(2),
            flex: 1,
            textAlign: 'center'
        },
        photoPanel: {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    })
);

export default useMainStyles;