import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, ProjectImage } from '../../components/project'
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
} from '@chakra-ui/react'

const Project = () => (
  <Layout title="Kuma App">
    <Container>
      <Title>
        Kuma App <Badge>2023</Badge>
      </Title>
      <Center>
        <Image
          width="216px"
          height="74px"
          src="/images/projects/kuma/logo.png"
          alt="icon"
        />
      </Center>
      <P>
        This project will create an application called Kuma (Koneksi untuk
        Memahami Anak Istimewa). Kuma is aimed at autistic children from four to
        seventeen years old. Autism is a developmental condition that affects
        how individuals perceive the world and interact with others. According
        to Autistica, seven of ten autistic people have a mental health
        condition such as anxiety, depression or OCD (mentalhealth.org.uk).
        Furthermore, according to autismspectrum.org, 46% of children (3-6 years
        old) and 70% (10-14 years old) have at least one mental health
        condition. One of the problems faced by people with autism is mood
        problems, so Kuma is here to track their daily moods. Parents, teachers,
        or therapists can input the emotional experiences of autistic children
        for a day, and the system will provide results in the form of a Visual
        Analog Mood Scale (VAMS). By knowing their daily mood, parents can
        evaluate their autistic children&apos;s day and plan a better agenda for
        tomorrow, also their parents can learn patterns of which days their
        autistic children&apos;s mood is not good. We believe this project could help
        many parents who have autistic children to have a better understanding
        of their children&apos;s mental condition.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          Paging 3, MPAndroidChart, Lottie, Navigation Fragment, Live Data
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/riecho14/Kuma-App" target="_blank">
            github.com/riecho14/Kuma-App <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={18} my={6}>
        <Center>Team Contributors</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <Badge mr={2}>Mobile Development</Badge>
          Ericho Aldo Firano
        </ListItem>
        <ListItem>
          <Badge mr={2}>Mobile Development</Badge>
          Rahman Pajri
        </ListItem>
        <ListItem>
          <Badge mr={2}>Machine Learning</Badge>
          Mikael Alvian Rizky
        </ListItem>
        <ListItem>
          <Badge mr={2}>Machine Learning</Badge>
          Muhammad Rivan Hasri
        </ListItem>
        <ListItem>
          <Badge mr={2}>Cloud Computing</Badge>
          Novita Risdanti
        </ListItem>
        <ListItem>
          <Badge mr={2}>Cloud Computing</Badge>
          Iftikhar Jihan Naurah Ikhwan
        </ListItem>
      </UnorderedList>

      <Heading as="h4" fontSize={18} my={6}>
        <Center>Key Features in the Kuma Project</Center>
      </Heading>
      <ProjectImage src="/images/projects/kuma/1.png" alt="kuma" />
      <ProjectImage src="/images/projects/kuma/2.png" alt="kuma" />
      <ProjectImage src="/images/projects/kuma/3.png" alt="kuma" />
      <ProjectImage src="/images/projects/kuma/4.png" alt="kuma" />
      <ProjectImage src="/images/projects/kuma/5.png" alt="kuma" />
      <ProjectImage src="/images/projects/kuma/6.png" alt="kuma" />
    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'
