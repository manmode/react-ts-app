import classnames from 'classnames';

// components
import HM_BUTTON from "../../HM_BUTTON/HM_BUTTON";

function View({
    className
}) {
    const classes = classnames('', className);
    return (
        <div className={classes}>
            <HM_BUTTON primary outline>Primary</HM_BUTTON>
            <HM_BUTTON secondary>Secondary</HM_BUTTON>
            <HM_BUTTON information rounded>Information</HM_BUTTON>
            <HM_BUTTON success rounded>Success</HM_BUTTON>
            <HM_BUTTON warning>Warning</HM_BUTTON>
            <HM_BUTTON danger>Danger</HM_BUTTON>
        </div>
    )
}
export default View;