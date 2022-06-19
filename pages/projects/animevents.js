import {
    Container,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
  
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  
  const Work = () => (
    <Layout title="Animation Events">
      <Container>
        <Title>
         Animation Events
        </Title>
        <P>
        In this prototype I experimented with animation events, learning about spawning shader effects
        trough key-frame events.
        </P>
        <P>
          Learned about animations and how they work, events, shaders, animation controllers and
          scriptable parameters.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>ShaderGraph, Unity, C#, Animations</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/contents/animevents.png" alt="animevents" />
        <WorkImage src="/images/contents/animeventsfire.png" alt="animevents" />
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe width="560" 
        height="315" 
        src="https://www.youtube.com/embed/rT30t8C5EQU" 
        title="YouTube video player" frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>       
        </iframe>
        </AspectRatio>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getStaticProp } from '../../components/chakra'