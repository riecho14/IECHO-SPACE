import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'

const Project = () => (
  <Layout title="Old Portfolio">
    <Container>
      <Title>
        Old Portfolio <Badge>2022</Badge>
      </Title>
      <P>
        This is an old portfolio that I use to host my personal website.
        It&apos;s a little painful to maintain, but I still like it. I hope you
        like it too. I&apos;m not sure if I&apos;ll ever use it again, but I
        believe it&apos;s a great place to start.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          HTML, CSS, JavaScript
        </ListItem>
        <ListItem>
          <Meta>Demo</Meta>
          <Link
            href="https://riecho14.github.io/IECHO-Homepage"
            target="_blank"
          >
            riecho14.github.io/IECHO-Homepage/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link
            href="https://github.com/riecho14/IECHO-Homepage"
            target="_blank"
          >
            github.com/riecho14/IECHO-Homepage <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <ProjectImage
        src="/images/projects/oldportfolio/image1.png"
        alt="greentrash"
      />
      <ProjectImage
        src="/images/projects/oldportfolio/image2.png"
        alt="greentrash"
      />
      <ProjectImage
        src="/images/projects/oldportfolio/image3.png"
        alt="greentrash"
      />
      <ProjectImage
        src="/images/projects/oldportfolio/image4.png"
        alt="greentrash"
      />
    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'
