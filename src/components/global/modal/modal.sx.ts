const sharedSx = {
  "& .stack-root": {
    width: "100%",
    height: "100%",
  },

  "& .modal-root": {
    width: "100%",
    height: "100%",
  },
};

export const mobileSx = {
  "&.modal-root": {
    backgroundColor: "var(--white)",
    color: "#000",
    position: "absolute",
    top: "6rem",
    left: "0",
    bottom: "0",
    right: "0",
    padding: "2rem",

    ...sharedSx,
  },
};

export const desktopSx = {
  "&.modal-root": {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "75%",
    backgroundColor: "var(--white)",
    boxShadow: 24,
    color: "#fff",
    borderRadius: "5px",
    minHeight: "25rem",
    maxHeight: "90vh",
    overflowY: "auto",
    padding: "2rem",

    ...sharedSx,
  },
};
