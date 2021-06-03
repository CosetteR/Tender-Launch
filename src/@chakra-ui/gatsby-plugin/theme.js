import { extendTheme } from "@chakra-ui/react"
const theme = {
  colors: {
    orange: {
      50: "#fbe5b9",
      100: "#f8aa5c",
    },
    brown: "#523421",
    blue: "#63B3ED",
  },
  fonts: {
    heading: "Vollkorn, serif",
    body: "Poppins, sans-serif",
  },
}
export default extendTheme(theme)
