import {
  Container,
  Badge,
  List,
  ListItem,
} from '@chakra-ui/react'

import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Galaxy Guardian">
    <Container>
      <Title>
        Galaxy Guardian <Badge>2021</Badge>
      </Title>
      <P>
        A 2D arcade style prototype for study case purpose, the project was a test
        to understand the 2D physics and 2D style games.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Unity, C#, Blender</span>
        </ListItem>
        </List>

      <WorkImage
        src="/images/projects/galaxyguardian1.png"
        alt="walknote"
      />
      <WorkImage src="/images/projects/galaxyguardian.png" alt="walknote" />
      <WorkImage src="/images/projects/galaxyguardian2.png" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
export { getStaticProp } from '../../components/chakra'
