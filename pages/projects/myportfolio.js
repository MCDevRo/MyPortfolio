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
  <Layout title="My Portfolio">
    <Container>
      <Title>
      My Portfolio <Badge>2022</Badge>
      </Title>
      <P>
      This is my presentation webpage made with JavaScript/Next.js/Three.js/React/ Chakra UI, it was a fun experience,
      not to mention that my game dev study helped me understand better the Three.js library.
      </P>
     

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://mcdev.ro" target="_blank">
              https://mcdev.ro <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Next.js / JavaScript / React / Three.js
          </span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <span>
            <Link href="https://mcdev.ro" target="_blank">
              View Source <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/portfolio03.png" alt="Website" />

      <WorkImage src="/images/projects/portfolio.png" alt="Margelo" />
      <WorkImage src="/images/projects/portfolio01.png" alt="Margelo" />
      <WorkImage src="/images/projects/portfolio02.png" alt="Margelo" />
    </Container>
  </Layout>
)

export default Work
export { getStaticProp } from '../../components/chakra'
