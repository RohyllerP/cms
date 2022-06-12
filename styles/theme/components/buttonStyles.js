import { darken,mode, whiten } from '@chakra-ui/theme-tools';

export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {
    fontWeight: "bold",
    color: "white",
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    xl: {
      width:"70px",
      padding:"10px",
    },
    sm:{
      width:"100px",
      padding:"12px",
    }
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: (props)=> ({
      bg: "colors.secondary",
      color:"white",
      borderRadius:"0",
      _hover: {
        bg: "#238038",
        boxShadow:"md",
      },
    }),
    secondary: (props) => ({
      bg:"white",
      color:"black",
      _hover: {
        bg: "#1E639D",
        boxShadow:"md",
      },
    }),
    third: (props) => ({
      bg:"teal.500",
 
      _hover: {
        bg: "#1E639D",
        boxShadow:"md",
      },
    }),
  },
  defaultProps: {},
}