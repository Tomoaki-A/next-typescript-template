function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page
    })

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
