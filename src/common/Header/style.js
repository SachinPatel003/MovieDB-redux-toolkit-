import { makeStyles } from "@mui/material/styles";

const useStyles = makeStyles(()=>({
    mainContainer: {
        fontFamily: "Source Sans Pro, Arial, sans-serif",
        height: "64px",
        backround: "#031d33",
        display: "flex",
        padding: "22px",
        fontWeight: "600",
        color: "white !important",
      },
      
      items: {
        display: "flex",
        listStyleType: "none",
        alignItems: "center",
      },
      item: {
        margin: "0 20px",
      },
      logo: {
        margin: "0 9px",
        cursor: "pointer",
        zIndex: "2",
      },
      link:{
        all: "unset",
      },
      
    //   @media (min-width: 0px) and (max-width: 420px) {
    //     item {
    //       margin: 0px 3px,
    //     }
    //     logo {
    //       margin: 0 3px,
    //     }
    //     container {
    //       height: 50px,
    //       padding: 15px,
    //     }
    //   }
      
      
      
}))
export default useStyles;