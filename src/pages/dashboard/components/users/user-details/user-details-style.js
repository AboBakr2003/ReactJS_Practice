import avatar from "../avatar/avatar.jpeg"

export const userDetailsStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
  position: "fixed",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgb(0 0 0 / 70%)",
  backdropFilter: "blur(10px)",
  userBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "400px",
    height: "fit-content",
    padding: "20px",
    gap: "20px",
    color: "#fff",
    backgroundColor: "#23272f",
    boxShadow: "0px 0px 40px 5px #000",
    borderRadius: "20px",
    zIndex: 1001,
    img: {
      avatar,
      width: "200px",
      borderRadius: "50%",
      objectFit: "cover",
      outline: "3px solid #61dafb",
      outlineOffset: "5px",
    },
    info: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      p: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: "10px",
        span: {
          color: "#61dafb",
          fontWeight: "bold",
        },
      }
    },
  },
}