import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello , I&apos;m  a digital artist/dev based in Romania!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1} fontFamily='Lobster Two'>
          <Heading as="h2" variant="page-title" fontFamily='Lobster Two'>
            Marius Cristea
          </Heading>
          <p>Digital Content Creator ( Artist / Developer / GameDeveloper)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/Marius.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        At the moment I&apos;m a full time employee in the automotive industry as Application Aftersales Engineer, I&apos;m responsible for running advance database querries,
implemenetation of new aplication and providing support for the clients that work with the company applications.I also serve as a backup Sys Admin,
helping the infrastructure team, running sccm deployments, backup, wusus updates if needed and they are overloaded with work.
  For the past two years I started to study on my own free time programming, gamedevelopment and 3D Modeling, I was always passionate about gaming industry, as I&apos;m 
born in 1993 and I grew with the industry.None the less my passion was not just at the level of playing games but how were they made, how the studios develop them. 
  When I was a child access to dev tools and programming materials were not that common so I never got into it properly, but now with all this technology around us
and so much free education online I dont want to miss the oportunity anymore.
  I will continue to improve my self and become a fully fledge programmer/game developer,also I&apos;m open for work on any programming/gamedevelopment or 3D Modeling position.
  Don&apos;t hesitate to contact me!
  Currently in my free time I&apos;m working on a passion project with a
friend developing our first mobile game with Unity/C# and Blender called {' '} 
          <NextLink href="/projects/robofunrush" passHref scroll={false}>
            <Link>RoboFunRush</Link>
          </NextLink>
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/projects" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>

      </Section>

      <Section delay={0.2}>
      <Heading as="h3" variant="section-title">
            About me!
          </Heading>
          <BioSection>
          Born in Bucharest, Romania
            <BioYear> 1993.</BioYear>            
          </BioSection>
          <BioSection>
          In 2008 I finished elementary school and High School in 2012,After that I followed Mehcanical Engineering major at Univeristy Politehnica of Bucharest. 
          In 2014 I pariticipated in a Work & Travel program available trough the Univesity and spent the summer in USA.
          </BioSection>
          <BioSection>
          In 2015 I decided to follow my passion
          and started to work on my first IT position in Genpact. In 2017 left the company to move to Honeywell to a better position and in 2018 I recieved and offer
          from my current working position at Porsche Romania.
          </BioSection>
          <BioSection>
          I&apos;m 29 years old married father of two kids, I&apos;m a hard working peacefull guy,motivated , eager to learn and develop new skills. I never backdown from hardwork especially
          if I can push my self to learn new things. Working trough corporations helped me develop new skills and improve my own like: Teamworker,Problem Solving, Work Ethic, Desire to learn, 
          Social, Creativity, Critical Thinking, Value education, Resourcefulness and Troubleshooting.
          </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Free Time & Hobbies
        </Heading>
        <Paragraph>
        First and foremost I love to spend free time with my kids and wife.
        Passionate about art/programming/travel/music/astronomy/science.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/MCDevRo" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                Github
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/marius-cristea-634077126/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                LinkedIn
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:marius.cristea@mcdev.ro" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<EmailIcon />}
              >
                Contact
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Study Cases
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getStaticProp } from '../components/chakra'
