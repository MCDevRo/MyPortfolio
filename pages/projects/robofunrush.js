import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="RoboFunRush">
    <Container>
      <Title>
        RoboFunRush <Badge>2022</Badge>
      </Title>
      <P>
      A Mobile Endless Runner Game in which you have to collect electro-coins
      to unlock new content!
      </P>
      <P>
        The art is made using Blender and the Game is made with Unity Engine and C#
      </P>
      <P>
        The project is in active development and this will be my first Android Store release, I&apos;m working
        on the project with a friend.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android/iOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Unity, Blender, C#, Photoshop, Shader Graph</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://www.linkedin.com/posts/marius-cristea-634077126_unitydeveloper-csharp-hobby-activity-6927382085586321408-o9jk?utm_source=linkedin_share&utm_medium=member_desktop_web">
            Want to follow the project development?
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/roborun.png" alt="Inkdrop" />
      <WorkImage src="/images/projects/roborun2.png" alt="Inkdrop" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6927381969513160704?compact=1"
          title="Embedded post"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getStaticProp } from '../../components/chakra'
