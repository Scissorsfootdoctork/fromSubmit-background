import * as process from 'process'

export default () => {
  const author = process.env.APP_AUTHOR
  return {
    app: {
      author
    }
  }
}
