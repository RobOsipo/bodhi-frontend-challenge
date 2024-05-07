/* eslint-disable react/jsx-props-no-spreading */
// external imports
import {
  Box,
  Modal as MuiModal,
  Stack,
  Drawer,
  useMediaQuery,
} from "@mui/material";

// internal imports
import { desktopSx, mobileSx } from "./modal.sx";

// presence-device-modal component
export function Modal({
  open,
  handleClose,
  children,
  displayDrawerMaxBreakpoint = 800,
  parentStackProps = { direction: "column", justifyContent: "space-between" },
}: any) {
  // breakpoint for displaying the stepper as a drawer instead of a modal
  const displayDrawer = useMediaQuery(
    `(max-width: ${displayDrawerMaxBreakpoint}px)`,
    { noSsr: true }
  );

  const renderDesktopOrMobileJSX = () => {
    if (displayDrawer) {
      return (
        <Drawer
          PaperProps={{ className: "modal-root", sx: mobileSx }}
          anchor="bottom"
          open={open}
          onClose={handleClose}
        >
          <Stack className="stack-root" {...parentStackProps}>
            {children}
          </Stack>
        </Drawer>
      );
    }

    return (
      <MuiModal open={open} onClose={handleClose}>
        <Box className="modal-root" sx={desktopSx}>
          {children}
        </Box>
      </MuiModal>
    );
  };

  // render
  return renderDesktopOrMobileJSX();
}

export default Modal;
