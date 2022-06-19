import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Tank 2021">
    <Container>
      <Title>
        Tank 2021 <Badge>2021</Badge>
      </Title>
      <P>
        This was my first finished project, it doesn&apos;t look great, but I learned a
        lot trough this project as it taught me about Design Patterns. I used a 
        Singleton Pattern for the Game Manager as it was used to store a single instance
        of the data across all levels.
      </P>
      <P>
        I learned about managing multiple levels, implementing sounds, powerups, UI/UX
      </P>
      <P>
        Project is available to download and the source code can be found on my github page. 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>PC</span>
        </ListItem>
        <ListItem>
          <Meta>Get Project</Meta>
          <Link href="https://easyupload.io/nai3ot">
            Try it!{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C#,Unity,Blender,Photoshop</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/Tank1.png" alt="tank" />
      <WorkImage src="/images/projects/Tank2.png" alt="tank" />
      <WorkImage src="/images/projects/Tank3.png" alt="tank" />
    </Container>
  </Layout>
)

export default Work
export { getStaticProp } from '../../components/chakra'
