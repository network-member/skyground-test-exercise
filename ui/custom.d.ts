declare module '*.svg' {
  let comp: import('react').FC
  export default comp
}

declare module '*.svg?url' {
  let url: string
  export default url
}

declare module '*.ttf'

declare module '*svgo.config'
