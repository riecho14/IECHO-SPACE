import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Center,
  Image
} from '@chakra-ui/react'

const Project = () => (
  <Layout title="Green Trash">
    <Container>
      <Title>
        Green Trash <Badge>2022</Badge>
      </Title>
      <Center>
        <Image src="/images/projects/greentrash/icon.png" alt="icon" />
      </Center>
      <P>
        A script that will graph your GitHub contributions green. This script
        doesn&apos;t encourage you to cheat. Cheating is bad. But if anybody is
        judging your professional skills by the graph at your GitHub profile
        (which caries no value) they deserve to see a rich graph.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Workflow Syntax</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/riecho14/Green-Trash">
            https://github.com/riecho14/Green-Trash{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <UnorderedList my={4}>
        <ListItem>
          Before running the script
          <ProjectImage
            src="/images/projects/greentrash/before.png"
            alt="greentrash"
          />
        </ListItem>
        <ListItem>
          After running the script
          <ProjectImage
            src="/images/projects/greentrash/after.png"
            alt="greentrash"
          />
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'
