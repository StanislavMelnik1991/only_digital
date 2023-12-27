declare module '*.module.css' {
  const classes: Readonly<Record<string, string>>
  export default classes
}

declare module '*.module.scss' {
  const classes: Readonly<Record<string, string>>
  export default classes
}

declare module '*.module.sass' {
  const classes: Readonly<Record<string, string>>
  export default classes
}
declare module '*.png';
declare module '*.svg';
declare module '*.jpg';

declare module '*.json'

declare module 'mockData.json' {
  const classes: Array<{
    title: string
    data: Array<{
      year: number
      title: string
    }>
  }>
  export default classes
}
