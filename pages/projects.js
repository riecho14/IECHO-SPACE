import Layout from '../components/layouts/article'
import Section from '../components/section'
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { ProjectGridItem } from '../components/grid-item'

import thumbReadmeIcons from '../public/images/projects/thumbReadmeIcons.png'
import thumbDockerizedPyGame from '../public/images/projects/thumbDockerizedPygame.png'
import thumbDendamSiTikus from '../public/images/projects/thumbDendamSiTikus.png'
import thumbOldPortfolio from '../public/images/projects/thumbOldPortfolio.png'
import thumbGreenTrash from '../public/images/projects/thumbGreenTrash.png'
import thumbGymtera from '../public/images/projects/thumbGymtera.png'
import thumbKuma from '../public/images/projects/thumbKuma.png'
import thumbIcositer from '../public/images/projects/thumbIcositer.png'
import thumbBard from '../public/images/projects/thumbBard.png'

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
            A script that will graph your GitHub contributions green.
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem
            id="readmeicons"
            title="Readme Icons"
            thumbnail={thumbReadmeIcons}
          >
            List of icons that have been scaled and padded to work well when
            used in Github README.
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem
            id="gymtera"
            title="Gymtera"
            thumbnail={thumbGymtera}
          >
            An application that will become your personal trainer in doing gym
            fitness exercises and also comes with features for gym managers.
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
            This project is a game development project using the PyGame library.
          </ProjectGridItem>
        </Section>
        <Section delay={0.4}>
          <ProjectGridItem
            id="dockerizedpygame"
            title="Dockerized PyGame"
            thumbnail={thumbDockerizedPyGame}
          >
            Containerize PyGame with Docker.
          </ProjectGridItem>
        </Section>
        <Section delay={0.4}>
          <ProjectGridItem id="kuma" title="Kuma App" thumbnail={thumbKuma}>
            an App to understand special children and help the role of parents
            monitor the child&apos;s condition.
          </ProjectGridItem>
        </Section>
        <Section delay={0.4}>
          <ProjectGridItem
            id="icositer"
            title="ICoSITeR 2022"
            thumbnail={thumbIcositer}
          >
            International Conference on Science, Infrastructure Technology, and
            Regional Development.
          </ProjectGridItem>
        </Section>
        <Section delay={0.4}>
          <ProjectGridItem id="bard" title="BARD" thumbnail={thumbBard}>
            Web-based and mobile food ordering application.
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
            javascript.
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
