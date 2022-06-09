import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import Image from 'next/image'
import { IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import { BioSection, BioYear, BioNow } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Container,
  chakra,
  Box,
  Link,
  Heading,
  useColorModeValue,
  Button,
  List,
  ListItem
} from '@chakra-ui/react'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
  ;<Layout>
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        textAlign="center"
        __css={{ backdropFilter: 'blur(10px)' }}
      >
        Hi there! Welcome to the IECHO SPACE.
      </Box>

      <Box mb="10" display={{ md: 'flex' }}>
        <Box
          flexShrink={0}
          textAlign="center"
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          w="100px"
          h="100px"
          display="inline-block"
          borderRadius="full"
          overflow="hidden"
        >
          <ProfileImage
            src="/images/aldo.jpg"
            alt="Profile image"
            borderRadius="full"
            width="100%"
            height="100%"
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
          <NextLink href="/projects" passHref scroll={false}>
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
          Currently completing a Bachelor's Program at the Sumatera Institute of
          Technology.
        </BioSection>
      </Section>

      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/riecho14" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoGithub />}
              >
                riecho14
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/dooaldood" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoInstagram />}
              >
                @dooaldood
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/iechoartwork" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoInstagram />}
              >
                @iechoartwork
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/iechospace" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoInstagram />}
              >
                @iechospace
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
}

export default Home
export { getServerSideProps } from '../components/chakra'
