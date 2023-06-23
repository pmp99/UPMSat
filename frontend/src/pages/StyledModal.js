import React from "react";
import {styled} from "@mui/material/styles";
import Modal from "@mui/base/Modal";
import Fade from "@mui/material/Fade";

function StyledModal(props) {
    const {children, ...rest} = props

    const StyledModal = styled(Modal)`
      position: fixed;
      z-index: 1300;
      right: 0;
      bottom: 0;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    `;

    const Backdrop = React.forwardRef((props, ref) => {
        const {open, ...other} = props
        return (
            <Fade in={open}>
                <div ref={ref} {...other} />
            </Fade>
        )
    })

    const StyledBackdrop = styled(Backdrop)`
      z-index: -1;
      position: fixed;
      right: 0;
      bottom: 0;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
      -webkit-tap-highlight-color: transparent;
    `;

    return(
        <StyledModal
            {...rest}
            closeAfterTransition
            slots={{backdrop: StyledBackdrop}}
        >
            {children}
        </StyledModal>
    )
}

export default StyledModal;