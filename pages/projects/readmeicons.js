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
  <Layout title="README Icons">
    <Container>
      <Title>
        README Icons <Badge>2022</Badge>
      </Title>
      <Center>
        <Image src="/images/projects/readmeicons/icon.svg" alt="icon" />
      </Center>
      <P>
        The project README icons aims to gather all logos representing all tech
        related tools, development languages and social websites. Basically, one
        stop to get all the icons that you will need for your README file.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Example</Meta>
          <Link href="https://github.com/riecho14" target="_blank">
            https://github.com/riecho14 <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/riecho14/README_icons" target="_blank">
            https://github.com/riecho14/README_icons{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <UnorderedList my={4}>
        <ListItem>
          <Badge mr={2}>Definition</Badge>
          Curated list of icons to be used in Github READMEs and which looks
          good across all platforms.
        </ListItem>
        <ListItem>
          <Badge mr={2}>Why?</Badge>
          Github saw a lot of changes in the year 2020. With the introduction of
          Github&apos;s mobile app as well as dark mode for Github, it has become
          really difficult to find icons for READMEs that look good irrespective
          of the platform you are viewing it on.
        </ListItem>
      </UnorderedList>

      <ProjectImage
        src="/images/projects/readmeicons/example.png"
        alt="readmeicons"
      />
    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'
