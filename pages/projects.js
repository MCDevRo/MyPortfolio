import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbRoboRush from '../public/images/projects/roborun2.png'
import thumbTank from '../public/images/projects/Tank.png'
import thumbGalaxy from '../public/images/projects/galaxyguardian1.png'
import thumbDarkin from '../public/images/projects/darkinlight1.png'
import thumbPortfolio from '../public/images/projects/portfolio03.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="robofunrush" title="RoboFunRush" thumbnail={thumbRoboRush}>
            A Mobile Endless Runner Game in which you have to collect electro-coins
            to unlock new content!
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="tank"
            title="Tank 2021"
            thumbnail={thumbTank}
          >
            A project inspired by old SNES game battlecity, this is 
            an arcade game with tanks battle where you have to protect 
            your base.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="galaxyguardian"
            title="Galaxy Guardian"
            thumbnail={thumbGalaxy}
          >
            A 2D arcade style prototype for study case purpose, 
            the project was a test to understand the 2D physics and 2D style games.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="darkinlight" thumbnail={thumbDarkin} title="DarkinLight">
          DarkinLight is a prototype born in Brackeys Game Jam,the theme was Stronger Together and
        the idea was to create a platformer game in which you control two players in order to collect
        keys and advance trough the levels.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          JavaScript Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="myportfolio" thumbnail={thumbPortfolio} title="My Portfolio">
            This is my presentation webpage made with JavaScript/Next.js/Three.js/React
          </WorkGridItem>
        </Section>
        </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getStaticProps } from '../components/chakra'
