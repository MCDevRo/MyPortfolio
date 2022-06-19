import {
    Container,
    Link,
    List,
    ListItem,
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  
  const Work = () => (
    <Layout title="Blender modeling">
      <Container>
        <Title>
         Blender Art
        </Title>
        <P>
        I&apos;m passionate about art also, that&apos;s why I started to use blender regularly and 
        experimenting with it. Looking into Substance Painter to...
        </P>
        <P>
          Below you will find some basic examples!
        </P>
        <P>
          Also you can download some of the blend files trough my google drive,
          link attached bellow!
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Blender, Photoshop, Substance Painter</span>
          </ListItem>
          <ListItem>
          <Meta>Blend Files</Meta>
          <Link href="https://drive.google.com/drive/folders/1weAjboKcqNpoKSJJqmS6zqsOKGZEnlmm?usp=sharing">
            Download!{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        </List>
        
  
        <WorkImage src="/images/projects/galaxyguardian1.png" alt="shadergraph"/>
        <WorkImage src="/images/projects/galaxyguardian2.png" alt="shadergraph"/>
        <WorkImage src="/images/projects/roborun2.png" alt="shadergraph" />
        <WorkImage src="/images/projects/Tank2.png" alt="shadergraph" />

      </Container>
    </Layout>
  )
  
  export default Work
  export { getStaticProp } from '../../components/chakra'