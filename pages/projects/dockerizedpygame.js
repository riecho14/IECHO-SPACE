import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import {
  Container,
  Badge,
  Heading,
  Link,
  List,
  ListItem,
  UnorderedList,
  Center,
  Image,
  AspectRatio
} from '@chakra-ui/react'

const Project = () => (
  <Layout title="Dockerized PyGame">
    <Container>
      <Title>
        Dockerized PyGame <Badge>2022</Badge>
      </Title>
      <Center>
        <Image
          width="216px"
          height="74px"
          src="/images/projects/dockerizedpygame/icon.png"
          alt="icon"
        />
      </Center>
      <P>
        Docker is a service that provides the ability to package and run an
        application in an isolated environment called a container. In this case
        I use docker to run a game I created using PyGame to fulfill one of the
        tasks assigned to my group.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          Python, PyGame, Docker
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link
            href="https://github.com/riecho14/Docker-Dendam-Si-Tikus"
            target="_blank"
          >
            github.com/riecho14/Docker-Dendam-Si-Tikus{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={18} my={6}>
        <Center>Team Contributors</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <Badge mr={2}>Programmer</Badge>
          Andri Setiawan
        </ListItem>
        <ListItem>
          <Badge mr={2}>Designer</Badge>
          Azka Muzhaffar Sutawidjaja
        </ListItem>
        <ListItem>
          <Badge mr={2}>Programmer</Badge>
          Bayu Nindioko
        </ListItem>
        <ListItem>
          <Badge mr={2}>Programmer</Badge>
          Ericho Aldo Firano
        </ListItem>
        <ListItem>
          <Badge mr={2}>Designer</Badge>
          Mila Oktaviani
        </ListItem>
        <ListItem>
          <Badge mr={2}>Programmer</Badge>
          Naufal Rotif Dewanto
        </ListItem>
      </UnorderedList>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/SO_tl0iAmhU"
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'
