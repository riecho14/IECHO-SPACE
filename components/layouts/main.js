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
