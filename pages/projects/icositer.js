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
  <Layout title="ICoSITeR 2022">
    <Container>
      <Title>
        ICoSITeR <Badge>2022</Badge>
      </Title>
      <Center>
        <Image
          width="216px"
          height="150px"
          src="/images/projects/icositer/logoicos.png"
          alt="icon"
        />
      </Center>
      <P>
        The International Conference on Science, Infrastructure Technology, and
        Regional Development (ICOSITER) is an annual international conference
        held on campus, bringing together academics, researchers, and industry
        practitioners. The event focuses on development and innovation in the
        fields of science, infrastructure technology, and regional development.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Laravel, JavaScript, Bootstrap</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href="https://icositer.itera.ac.id/2022/"
            target="_blank"
          >
            icositer.itera.ac.id/2022/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/riecho14/icositer2022" target="_blank">
            github.com/riecho14/icositer2022 <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={18} my={6}>
        <Center>Team Contributors</Center>
      </Heading>
      <UnorderedList my={4}>
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
        <ListItem>
          <Badge mr={2}>Programmer</Badge>
          William Rusli
        </ListItem>
        <ListItem>
          <Badge mr={2}>Data</Badge>
          Dessy Siar Rehulina
        </ListItem>
        <ListItem>
          <Badge mr={2}>Data</Badge>
          Sophia Maranata Gultom
        </ListItem>
      </UnorderedList>

      <Heading as="h4" fontSize={18} my={6}>
        <Center>Activity Documentation</Center>
      </Heading>

      <ProjectImage
        src="/images/projects/thumbIcositer.png"
        alt="icositer"
      />
      <ProjectImage
        src="/images/projects/icositer/1.jpeg"
        alt="icositer"
      />
      <ProjectImage
        src="/images/projects/icositer/2.jpeg"
        alt="icositer"
      />
    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'
