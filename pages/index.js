import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import Image from 'next/image'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { BioSection, BioYear, FixYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Container,
  Box,
  Link,
  Heading,
  useColorModeValue,
  Button,
  List,
  ListItem
} from '@chakra-ui/react'

const Homepage = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        textAlign="center"
        css={{ backdropFilter: 'blur(10px)' }}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
      >
        Hi there! Welcome to the IECHO SPACE.
      </Box>

      <Box flexShrink={0} textAlign="center" mb="10" display={{ md: 'flex' }}>
        <Box
          position="relative"
          w="100px"
          h="100px"
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          display="inline-block"
          borderRadius="full"
          overflow="hidden"
        >
          <Image
            src="/images/aldo.jpg"
            alt="Profile image"
            fill
            style={{
              objectFit: 'cover',
              borderRadius: '50%',
              objectPosition: 'center 15%'
            }}
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
          <p>Digital Builder (Web & Mobile Developer)</p>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph>
          As a graduate of Informatics Engineering from Institut Teknologi
          Sumatera (ITERA) with a specialization in Information Technology, I
          have expertise as a Web & Mobile Developer who is ready to face the
          dynamics of the digital industry. Armed with an analytical and
          creative approach, I am committed to developing innovative and
          effective technology solutions. I am known as a proactive,
          communicative, and result-oriented person, always ready to work
          together in a team and continue to develop my skills to make the best
          contribution in this field. Today made me realize that the goal is not
          about how high but how free.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/projects" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
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
          <FixYear>2001</FixYear>
          Born in Yogyakarta, Indonesia.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Graduated from SMA Negeri 3 Martapura
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Graduated with a degree in Informatics Engineering from Institut
          Teknologi Sumatera.
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
                colorScheme="blue"
                leftIcon={<IoLogoGithub />}
              >
                riecho14
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/dooaldood/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<IoLogoLinkedin />}
              >
                dooaldood
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/dooaldood" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
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
                colorScheme="blue"
                leftIcon={<IoLogoInstagram />}
              >
                @iechoartwork
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Homepage
export { getServerSideProps } from '../components/chakra'
