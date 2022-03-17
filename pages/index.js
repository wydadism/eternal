import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  UnorderedList,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoFacebook,
} from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbYouTubes from '../public/images/links/youtube1.png'
import thumbYouTubess from '../public/images/links/youtube2.png'
import thumbYouTubesss from '../public/images/links/youtube3.png'
import thumbYouTubessss from '../public/images/links/youtube4.png'
import thumbYouTubesssss from '../public/images/links/youtube5.png'
import thumbYouTubessssss from '../public/images/links/youtube6.png'
import thumbYouTubesssssss from '../public/images/links/youtube7.png'
import thumbYouTubessssssss from '../public/images/links/youtube8.png'
import thumbYouTubesssssssss from '../public/images/links/youtube9.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        For a long time, she held a special place in my heart. I kept this special place just for her, like a "Reserved" sign on a quiet corner table in a restaurant. ♥
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Salma Dhimene ♥
          </Heading>
          <p> My Future wife ♥</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/takuya.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Soulaymati.
        </Heading>
        <Paragraph>
          My queen, Only ALLAH knows that I love you more than you can imagine, You are the epitome of beauty and I’m blessed to be with you, You have given my life a beautiful meaning and with the dawn of each day
          I promise to do my best to make you beam daily.
        </Paragraph>
        <Paragraph>
          I will always be there for you. I will be with you for better or worse as God is my witness.
          </Paragraph>
        <Paragraph>
          You are my dream come true
            </Paragraph>
          <Paragraph>
          {' '}
        </Paragraph>
        <Paragraph>
          <Link href="https://www.youtube.com/watch?v=_-jescndAl0" target="_blank">
            KANBGHIIIIIIIIIIIIIIIK ♥{' '}
          </Link>
          </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Insieme ♥ :
        </Heading>
        <BioSection>
          <BioYear>February 11th, 2022</BioYear>
          Our first conversation "Twitter"♥.
        </BioSection>
        <BioSection>
          <BioYear>February 14th, 2022</BioYear>
          The Honeymoon phase ♥.
        </BioSection>
        <BioSection>
          <BioYear>February 16th, 2022</BioYear>
          She said : "I love you ♥".
        </BioSection>
        <BioSection>
          <BioYear>March 1st,     2022&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</BioYear>
               First Date "Rabat" & First Kiss "La collisée"♥.
        </BioSection>
         <BioSection>
          <BioYear>March 10-14,  &nbsp;&nbsp;2022&nbsp;</BioYear>
          First weekend together "Sidi Rahal"♥.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Playlist ♥
        </Heading>
        <Paragraph>
            <Link href="https://soundcloud.com/souulaymaa" target="_blank">
            Soulayma ♥{' '}
          </Link>
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Memories ♥
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="15/01/2022"
            thumbnail={thumbYouTubes}
          >
            Invisible Support ♥
          </GridItem>
          <GridItem
            title="09/02/2022"
            thumbnail={thumbYouTubess}
          >
            Taking care of here ♥
          </GridItem>
        </SimpleGrid>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="14/02/2022"
            thumbnail={thumbYouTubesss}
          >
            The merge! ♥
          </GridItem>
          <GridItem
            title="16/02/2022"
            thumbnail={thumbYouTubessss}
          >
            She said I love you! ♥
          </GridItem>

        </SimpleGrid>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.google.com/maps/dir//rouange+rooftop+rabat+map/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xda76b4173dbc6a1:0x6b95f396b9b52fca?sa=X&ved=2ahUKEwjhsuLuw6n2AhVpSvEDHWNOCWQQ9Rd6BAgHEAU"
            title="21/02/2022"
            thumbnail={thumbYouTubesssss}
          >
            The best phone call ever! ♥
          </GridItem>
          <GridItem
            href="https://www.google.com/maps/dir//rouange+rooftop+rabat+map/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xda76b4173dbc6a1:0x6b95f396b9b52fca?sa=X&ved=2ahUKEwjhsuLuw6n2AhVpSvEDHWNOCWQQ9Rd6BAgHEAU"
            title="01/03/2022"
            thumbnail={thumbYouTube}
          >
            First date ♥
          </GridItem>
        </SimpleGrid>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="10/03/2022"
            thumbnail={thumbYouTubessssss}
          >
            OMG She is coming! ♥
          </GridItem>
          <GridItem
            title="11/03/2022"
            thumbnail={thumbYouTubessssssss}
          >
            If I know what love is, it is because of you! ♥
          </GridItem>

        </SimpleGrid>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="12/03/2022"
            thumbnail={thumbYouTubesssssss}
          >
            Sempre insieme! ♥
          </GridItem>
          <GridItem
            title="13/03/2022"
            thumbnail={thumbYouTubesssssssss}
          >
            The RIGHT man will put a RING on the Right finger! ♥
          </GridItem>

        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)
export default Home

