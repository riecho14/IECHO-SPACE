import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import {
  Container,
  Box,
  Heading,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Center,
  Image
} from '@chakra-ui/react'

const Project = () => (
  <Layout title="Gymtera">
    <Container>
      <Title>
        Gymtera <Badge>2024</Badge>
      </Title>
      <Center>
        <Image
          width="216px"
          height="100px"
          src="/images/projects/gymtera/Logo.png"
          alt="icon"
        />
      </Center>
      <P>
        This application is a project that I made to complete my informatics
        engineering final project. Gym ITERA is a facility available to the
        entire ITERA academic community, including lecturers, education staff,
        and students, which can be used free of charge. This application
        provides fitness guidance developed to provide clear and detailed
        instructions for each exercise, both for beginners and advanced users.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Firebase, MPAndroidChart, Base Recycler View Adapter Helper, Apache
            POI, Play Service Location
          </span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/riecho14/Gymtera" target="_blank">
            github.com/riecho14/Gymtera <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <UnorderedList my={4}>
        <Heading as="h4" fontSize={18} my={6}>
          <Center>Video App Demo</Center>
        </Heading>
        <Center my={6}>
          <Box w="100%" maxW="560px" aspectRatio={16 / 9}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/qKRzuptWHgs?si=VvKDghWODpxED9Kn"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </Box>
        </Center>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'
