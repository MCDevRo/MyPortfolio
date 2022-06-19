import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import ModelLoader from '../model-loader'

const LazyModel = dynamic(() => import('../3d-model'), {
  ssr: false,
  loading: () => <ModelLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="MC#Dev homepage" />
        <meta name="author" content="Marius Cristea" />
        <meta name="author" content="mcdev" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="MCDev" />
        <meta name="og:title" content="Marius Cristea" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://mcdev.ro/card.png" />
        <title>Marius Cristea - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyModel />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
