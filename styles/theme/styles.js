import { darken,mode, whiten }from "@chakra-ui/theme-tools";
export const styles = {
   global: (props) => ({
      body: {
        background: mode(whiten("#A6A6A6"),darken("#2D3748"))(props),
        padding: 0,
        margin: 0,
        boxSizing: "borderBox",
        fontFamily: 'Lato',
      },
      a: {
        fontSize: "1.2em",
        color: "inherit",
        textDecoration: "none",
        cursor: "pointer",
        transition: "all 0.3s ease",
        _hover: {
          color: "black",
        },
      },
      p: {
        fontSize:"20px",
      },
      i: {
        cursor:"pointer",
        fontSize: "25px",
      },
   }),
}
