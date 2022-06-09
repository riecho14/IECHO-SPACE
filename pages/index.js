import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { BioSection, BioYear, BioNow } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Container,
  Box,
  Link,
  Heading,
  Image,
  useColorModeValue,
  Button,
  List,
  ListItem
} from '@chakra-ui/react'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          textAlign="center"
        >
          Hi there! Welcome to the IECHO SPACE.
        </Box>

        <Box mb="10" display={{ md: 'flex' }}>
          <Box flexShrink={0} textAlign="center">
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/aldo.jpg"
            />
          </Box>

          <Box
            flexGrow={1}
            mt={{ base: 4, md: 3.5 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Heading as="h2" variant="page-title">
              Ericho Aldo Firano
            </Heading>
            <p>Live in restlessness, then you will think</p>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About me
          </Heading>
          <Paragraph>
            I am a student at the Sumatera Institute of Technology majoring in
            Informatics Engineering. I have a passion for building digital
            services from planning, design to solving real life problems with
            code. When not busy I like to create content on Instagram{' '}
            <NextLink href="https://www.instagram.com/iechoartwork" passHref>
              <Link target="_blank">iechoartwork </Link>
            </NextLink>
            to draw illustrations and besides that I also like to share
            interesting ideas that are on my mind which I call{' '}
            <NextLink href="https://www.instagram.com/iechospace" passHref>
              <Link target="_blank">iechospace</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2001</BioYear>
            Born in Yogyakarta, Indonesia.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Graduated from SMA Negeri 3 Martapura.
          </BioSection>
          <BioSection>
            <BioNow>Now</BioNow>
            Currently completing a Bachelor's Program at the Sumatera Institute
            of Technology.
          </BioSection>
        </Section>

        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
