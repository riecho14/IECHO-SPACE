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
  <Layout title="BARD">
    <Container>
      <Title>
        BARD <Badge>2023</Badge>
      </Title>
      <Center>
        <Image
          width="120px"
          height="120px"
          src="/images/projects/bard/logo.png"
          alt="icon"
        />
      </Center>
      <P>
        Develop a web-based and mobile ordering application that can overcome
        the problems of lost or incorrect order recording, communication errors
        between customers and restaurants, and delays in order processing for
        JeBE Cafe & Resto.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Laravel, Bootstrap, JavaScript, SQL, Kotlin</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/riecho14/eMenu-web" target="_blank">
            github.com/riecho14/eMenu-web <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={18} my={6}>
        <Center>Team Contributors</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <Badge mr={2}>Designer</Badge>
          Dini Safitri
        </ListItem>
        <ListItem>
          <Badge mr={2}>Programmer</Badge>
          Ericho Aldo Firano
        </ListItem>
        <ListItem>
          <Badge mr={2}>Programmer</Badge>
          Bayu Nindioko
        </ListItem>
        <ListItem>
          <Badge mr={2}>Programmer</Badge>
          Rahman Pajri
        </ListItem>
      </UnorderedList>

      <ProjectImage src="/images/projects/thumbBard.png" alt="bard" />
    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'
