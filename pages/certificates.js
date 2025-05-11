import Layout from '../components/layouts/article'
import Section from '../components/section'
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { ImagePreviewItem } from '../components/grid-item'

import thumbBangkit from '../public/images/certificates/bangkit.jpg'
import thumbIcositer from '../public/images/certificates/icositer.jpg'
import thumbD1 from '../public/images/certificates/d1.png'
import thumbD2 from '../public/images/certificates/d2.png'
import thumbD3 from '../public/images/certificates/d3.png'
import thumbD4 from '../public/images/certificates/d4.png'
import thumbD5 from '../public/images/certificates/d5.png'
import thumbD6 from '../public/images/certificates/d6.png'
import thumbD7 from '../public/images/certificates/d7.png'
import thumbD8 from '../public/images/certificates/d8.png'
import thumbD9 from '../public/images/certificates/d9.png'
import thumbD10 from '../public/images/certificates/d10.png'
import thumbD11 from '../public/images/certificates/d11.png'
import thumbD12 from '../public/images/certificates/d12.png'
import thumbD13 from '../public/images/certificates/d13.png'

const Certificates = () => (
  <Layout title="Certificates">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Bangkit
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <ImagePreviewItem
            id="bangkit"
            title="Certificate of Completion Bangkit Program"
            thumbnail={thumbBangkit}
          ></ImagePreviewItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Dicoding
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.4}>
          <ImagePreviewItem
            id="d1"
            title="Introduction to Programming Logic 101"
            thumbnail={thumbD1}
          ></ImagePreviewItem>
        </Section>
        <Section delay={0.4}>
          <ImagePreviewItem
            id="d2"
            title="Getting Started Programming With Kotlin"
            thumbnail={thumbD2}
          ></ImagePreviewItem>
        </Section>
        <Section delay={0.4}>
          <ImagePreviewItem
            id="d3"
            title="Getting Started Programming With Java"
            thumbnail={thumbD3}
          ></ImagePreviewItem>
        </Section>
        <Section delay={0.4}>
          <ImagePreviewItem
            id="d4"
            title="Getting Started with Basic Programming to Become a Software Developer"
            thumbnail={thumbD4}
          ></ImagePreviewItem>
        </Section>
        <Section delay={0.4}>
          <ImagePreviewItem
            id="d5"
            title="Learn Git Basics with GitHub"
            thumbnail={thumbD5}
          ></ImagePreviewItem>
        </Section>
        <Section delay={0.4}>
          <ImagePreviewItem
            id="d6"
            title="Learn to Make Android Apps for Beginners"
            thumbnail={thumbD6}
          ></ImagePreviewItem>
        </Section>
        <Section delay={0.4}>
          <ImagePreviewItem
            id="d7"
            title="Learn Android App Fundamentals"
            thumbnail={thumbD7}
          ></ImagePreviewItem>
        </Section>
        <Section delay={0.4}>
          <ImagePreviewItem
            id="d8"
            title="Learn SOLID Programming Principles"
            thumbnail={thumbD8}
          ></ImagePreviewItem>
        </Section>
        <Section delay={0.4}>
          <ImagePreviewItem
            id="d9"
            title="Learn Intermediate Android App Development"
            thumbnail={thumbD9}
          ></ImagePreviewItem>
        </Section>
        <Section delay={0.4}>
          <ImagePreviewItem
            id="d10"
            title="Learn to Build Android Apps with Jetpack Compose"
            thumbnail={thumbD10}
          ></ImagePreviewItem>
        </Section>
        <Section delay={0.4}>
          <ImagePreviewItem
            id="d11"
            title="Learn Basic UX Design"
            thumbnail={thumbD11}
          ></ImagePreviewItem>
        </Section>
        <Section delay={0.4}>
          <ImagePreviewItem
            id="d12"
            title="Getting Started Programming with Dart"
            thumbnail={thumbD12}
          ></ImagePreviewItem>
        </Section>
        <Section delay={0.4}>
          <ImagePreviewItem
            id="d13"
            title="Learn to Make Flutter Apps for Beginners"
            thumbnail={thumbD13}
          ></ImagePreviewItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.6}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Organization
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.8}>
          <ImagePreviewItem
            id="icositer"
            title="International Conference on Science Infrastucture Technology and Regional Development"
            thumbnail={thumbIcositer}
          ></ImagePreviewItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Certificates
export { getServerSideProps } from '../components/chakra'
