import Head from 'next/head'
import Navbar from '../navbar'
import dynamic from 'next/dynamic'
import VoxelIechoLoader from '../voxel-iecho-loader'
import Footer from '../footer'
import { Box, Container } from '@chakra-ui/react'

const LazyIechoLoader = dynamic(() => import('../voxel-iecho'), {
  ssr: false,
  loading: () => <VoxelIechoLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta property="og:site_name" content="Ericho Aldo Firano" />
        <meta name="og:title" content="Ericho Aldo Firano" />
        <meta property="og:type" content="website" />
        <link rel="iecho-icon" href="iecho.png" />
        <link rel="shortcut icon" href="/iecho.ico" type="image/x-icon" />
        <meta name="description" content="IECHO SPACE Homepage" />
        <meta name="author" content="Ericho Aldo Firano" />
        <meta name="author" content="IECHO SPACE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>IECHO SPACE - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyIechoLoader />
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
