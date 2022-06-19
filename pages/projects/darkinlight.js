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
  <Layout title="DarkinLight">
    <Container>
      <Title>
       DarkinLight <Badge>2021</Badge>
      </Title>
      <P>
        DarkinLight is a prototype born in Brackeys Game Jam,the theme was Stronger Together and
        the idea was to create a platformer game in which you control two players in order to collect
        keys and advance trough the levels.
      </P>
      <P>
        Check the proto down below!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>PC,WebGL</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C#, Photoshop, Unity</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/MCDevRo/DarkinLight">
            View Source Code <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>       
        <ListItem>
          <Meta>Download</Meta>
          <Link href="https://easyupload.io/4s98l7">
            Check it out! <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/projects/darkinlight.png" alt="darkinlight" />
      <WorkImage src="/images/projects/darkinlight2.png" alt="darkinlight" />
    </Container>
  </Layout>
)

export default Work
export { getStaticProp } from '../../components/chakra'
