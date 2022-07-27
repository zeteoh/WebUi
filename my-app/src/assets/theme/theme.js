import { createTheme } from "@mui/material";

export const baseTheme = createTheme({
    palette: {
      background: {
        default: "#FEF9EF",
      }
    },
    typography: {
        fontFamily: '"Open Sans"',
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 600,
        fontWeightBold: 700,

        logo: {
            lineHeight: 1.25,
            fontWeight: 800,
            fontSize: 30,
        },     

        listItem: {
            fontWeight: 600,
            fontSize: 15,
        }
    },
    components: {
        MuiDrawer: { 
            styleOverrides: {
                root: {
                  width: 16,
                  whiteSpace: "nowrap",
                  border: "none",
                },
                paper: {
                  backgroundColor: 'white',
                  borderTopRightRadius: 25,
                  border: "none",
                },
            
         },
        MuiButton: { 
            styleOverrides: {
                root: {
                  marginTop: 0,
                  marginBottom: 0,
                }
                },
              },
        }, 
    }
});