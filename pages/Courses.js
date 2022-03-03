import { Badge, Container, Heading, Link, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { Meta, Title, WorkImage } from '../components/work'
import P from '../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'



const Posts = () => (
  <Layout title="Memories">
    <Container>
      <Title>
        WydadFootballScience <Badge>Tool-</Badge>
      </Title>
      <P>
        helps coaches and analysts to analyze the events and view a digital recreation of action in a single match.
      </P>
      <P>
        This tool takes freely available my event data and visualizes it so that football analysts can assess the performance of both teams during the match. This product is a very scaled down version of what I built and currently use for analysis at the local pro football club that I am consulting for. Simply choose the appropriate demo data files from the pulldown menus.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.wydadfootballscience.com/">
            https://www.wydadfootballscience.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>WFS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/inkdrop_01.png" alt="Inkdrop" />
      <WorkImage src="/images/works/inkdrop_02.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Posts


