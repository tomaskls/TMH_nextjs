export const cardBaseStyles = `p-4 border-none
  bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
  dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
  transition-all duration-500 
  shadow-lg shadow-slate-900/50
  dark:shadow-black/50
  backdrop-blur-sm`

export const cardHoverStyles = `hover:from-purple-900/90 hover:via-pink-900/90 hover:to-blue-900/90
  dark:hover:from-purple-950 dark:hover:via-pink-950 dark:hover:to-blue-950`

export const cardBeforeStyles = `before:absolute before:inset-0 before:z-0
  before:bg-gradient-to-br before:from-purple-500/10 before:via-pink-500/10 before:to-blue-500/10
  dark:before:from-purple-400/5 dark:before:via-pink-400/5 dark:before:to-blue-400/5
  before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500`

export const buttonStyles = `w-full bg-gradient-to-r from-purple-500 to-blue-500
  dark:from-purple-400 dark:to-blue-400
  hover:from-purple-600 hover:to-blue-600
  dark:hover:from-purple-500 dark:hover:to-blue-500
  text-white font-semibold
  shadow-lg shadow-purple-900/30
  dark:shadow-black/30
  transform transition-all duration-300 
  hover:scale-[1.02] active:scale-[0.98]
  hover:shadow-xl`