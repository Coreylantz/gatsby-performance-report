import Typography from "typography"
import lincolnTheme from 'typography-theme-lincoln'

const typography = new Typography(lincolnTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography