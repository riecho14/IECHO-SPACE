import Layout from '../components/layouts/article'
import Section from '../components/section'
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { ProjectGridItem } from '../components/grid-item'

import thumbReadmeIcons from '../public/images/projects/thumbReadmeIcons.png'
import thumbDockerizedPyGame from '../public/images/projects/thumbDockerizedPygame.png'
import thumbDendamSiTikus from '../public/images/projects/thumbDendamSiTikus.png'
import thumbOldPortfolio from '../public/images/projects/thumbOldPortfolio.png'
import thumbGreenTrash from '../public/images/projects/thumbGreenTrash.png'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <ProjectGridItem
            id="greentrash"
            title="Green Trash"
            thumbnail={thumbGreenTrash}
          >
            A script that will graph your GitHub contributions green
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem
            id="readmeicons"
            title="Readme Icons"
            thumbnail={thumbReadmeIcons}
          >
            List of icons that have been scaled and padded to work well when
            used in Github README
          </ProjectGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.4}>
          <ProjectGridItem
            id="dendamsitikus"
            title="Dendam Si Tikus"
            thumbnail={thumbDendamSiTikus}
          >
            This project is a game development project using the pygame library
          </ProjectGridItem>
        </Section>
        <Section delay={0.4}>
          <ProjectGridItem
            id="dockerizedpygame"
            title="Dockerized PyGame"
            thumbnail={thumbDockerizedPyGame}
          >
            Containerize Pygame with Docker
          </ProjectGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.6}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.8}>
          <ProjectGridItem
            id="oldportfolio"
            title="Old Portfolio"
            thumbnail={thumbOldPortfolio}
          >
            The first portfolio website I created using html, css, and
            javascript
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
