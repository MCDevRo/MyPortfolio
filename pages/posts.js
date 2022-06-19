import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { WorkGridItem } from '../components/grid-item'


import thumbCertificate from '../public/images/contents/cert.png'
import thumbAnim from '../public/images/contents/animeventsfire.png'
import thumbBlend from '../public/images/projects/galaxyguardian2.png'
import thumbShaderGraph from '../public/images/projects/shadergrass.png'

const Posts = () => (
  <Layout title="Study Case">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        My Study Cases
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="C# programming course on Udemy"
            thumbnail={thumbCertificate}
            href="https://www.udemy.com/certificate/UC-01adc2cb-72f0-41b1-a846-54a8c79dacf0/"
          />
          <WorkGridItem id="shadergraph" title="ShaderGrass" thumbnail={thumbShaderGraph}></WorkGridItem>
          <WorkGridItem
            id="animevents"
            title="Animation events"
            thumbnail={thumbAnim}
          />
          <WorkGridItem
            id="blender"
            title="Blender Modeling"
            thumbnail={thumbBlend}
            href="https://www.youtube.com/watch?v=1OFDMwDlnOE"
          />
        </SimpleGrid>
      </Section>

    </Container>
  </Layout>
)

export default Posts
export { getStaticProp } from '../components/chakra'
