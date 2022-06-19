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
  <Layout title="ShaderGraph">
    <Container>
      <Title>
       ShaderGrass
      </Title>
      <P>
      I love the power Shader Graph gives to a developer so I decided to create
      my own stylized grass shader, started to reaserch online how Shaders Work
      learned about UV, Normals, Vertex Displacement, Texture Maps, Grass model 
      made in blender tree also.
      </P>
      <P>
        Quick note! I even tested the shader on a prototyped Stylzed Tree.
      </P>
      <P>
        As for my first expierence with Shader Graph I realized how much power
        this technology holds and I will experiment further with it!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ShaderGraph, Unity, C#, Blender, Photoshop,Substance Painter</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/shadergrass.png" alt="shadergraph" />
      <WorkImage src="/images/projects/shadergraph1.png" alt="shadergraph" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/h5c6FPx3EOE" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}
        >
        </iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getStaticProp } from '../../components/chakra'