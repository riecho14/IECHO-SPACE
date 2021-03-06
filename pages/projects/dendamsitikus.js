import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import {
  Container,
  Badge,
  Heading,
  Link,
  List,
  UnorderedList,
  ListItem,
  Center,
  Image
} from '@chakra-ui/react'

const Project = () => (
  <Layout title="Dendam Si Tikus">
    <Container>
      <Title>
        Dendam Si Tikus <Badge>2022</Badge>
      </Title>
      <Center>
        <Image
          width="216px"
          height="45px"
          src="/images/projects/dendamsitikus/icon.png"
          alt="icon"
        />
      </Center>
      <P>
        Dendam Si Tikus is a game about a mouse who tries to defeat the cat by
        attacking the cats with poison. This game aims to get as much score as
        possible by avoiding and defeating the cats that come. Rat&apos;s life
        will be reduced when the cat touches the mouse. The game will end when
        the mouse&apos;s life has run out.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, PyGame</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link
            href="https://github.com/riecho14/Dendam-Si-Tikus"
            target="_blank"
          >
            github.com/riecho14/Dendam-Si-Tikus <ExternalLinkIcon mx="2px" />
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

      <ProjectImage
        src="/images/projects/dendamsitikus/image1.png"
        alt="dendamsitikus"
      />
      <ProjectImage
        src="/images/projects/dendamsitikus/image2.png"
        alt="dendamsitikus"
      />
    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'
