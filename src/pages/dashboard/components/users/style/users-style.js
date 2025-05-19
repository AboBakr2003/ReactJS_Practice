import photo from "../avatar/avatar.jpeg"

export const usersStyles = {
  display: "flex",
  flexDirection: "column",
  rowGap: "20px",
  color: "#fff",
  zIndex: 1,
  title: {
    backgroundImage: 'linear-gradient(180deg,rgba(97, 218, 251, 1) 30%, rgba(110, 110, 110, 1) 100%)',
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "center",
  },
  filter: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    button: {
      width: 'fit-content',
      height: '100%',
      borderRadius: '5px',
      border: 'none',
      outline: 'none',
      padding: '5px 10px',
      backgroundColor: '#61dafb',
      color: '#fff',
      cursor: 'pointer',
    }
  },
  user: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "10px",
    borderBottom: "2px dotted #aaa",
    borderRadius: "40px 20px 20px 40px",
    gap: "10px",
    justifyContent: "space-between",
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      columnGap: "15px",
      avatar: {
        position: "relative",
        width: "50px",
        height: "50px",
        img: {
          width: "inherit",
          borderRadius: "50%",
          objectFit: "cover",
          photo,
          outline: "2px solid #61dafb",
          outlineOffset: "2px",
        },
        active: {
          position: "absolute",
          top: "0",
          right: "0",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          outline: "2px solid #23272f",
          zIndex: 3,
          backgroundColor: "#00e100",
        },
      },
      info: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        rowGap: "5px",
        name: {
          fontSize: "16px",
          fontWeight: "500",
        },
        email: {
          fontSize: "12px",
          opacity: 0.6,
        },
      },
    },
    viewLink: {
      margin: "10px",
      cursor: "pointer",
      opacity: 0.6,
      transition: "0.3s",
      hover: {
        opacity: 1,
        textDecoration: "underline",
        color: "#61dafb",
      },
    }
  },
}