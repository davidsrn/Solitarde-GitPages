import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Dropdown,
  Segment,
  Sidebar,
  Visibility,
  Flag
} from 'semantic-ui-react'
import { Link } from 'react-static'
import Footer from './Footer'
import logo from './../images/logo.png'
import SimpleLogo from './../images/simple_logo.png'
import back from './../images/backb.jpg'
import CostumerService from './../images/CustomerService.jpg'
import GlogalLogistics from './../images/GlobalLogistics.jpg'
import InternationalSales from './../images/InternationalSales.jpg'
import Valuation from './../images/Valuation.jpg'
import FavIcon from './../images/simple_logo.png'
import Favicon from 'react-favicon';
import SideLogo from './../images/sidenamelogo.png'

class Layout extends React.Component {
  constructor(props){
    super(props);
    document.title = this.props.title;
  }
  render(){
    return(
      <div>
      </div>
    );
  }
}

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <br/>
    <br/>
    <br/>
    <br/>
    <Image centered src={logo} size='large'/>
    {/* <Header
      as='h1'
      content='SOLITRADE'
      inverted
      style={{
        fontSize: mobile ? '2em' : '40em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    >
    </Header> */}
    {/* <Header
      as='h1'
      content='BUILT TO HELP YOU BUILD'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    /> */}
    <br/>
    <br/>
    <br/>
    <Button primary size='big' href="about">
      MORE INFO
    </Button>
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
    <Button color='white' inverted size='big' href="contact" >
      CONTACT US
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive {...Responsive.onlyComputer}>
        {/* <Favicon url={Favicon} /> */}
        <Layout title="Solitrade Group"/>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            textAlign='center'
            style={{ minHeight: 900, padding: '0em 0em', backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundPosition: 'center'  }}
            vertical
          >
            <Menu
              // fixed={fixed ? 'top' : null}
              inverted={!fixed}
              // pointing={!fixed}
              // secondary={!fixed}
              size='large'
              style = {{margin: 0, padding: '0em 1em'}}
            ><Grid>
              <Grid.Row>
              <Menu.Item as='a' href='https://www.linkedin.com/company/solitrade-group'><Link href='https://www.linkedin.com/company/solitrade-group'> <Icon name='linkedin in'/></Link></Menu.Item>
              <Menu.Item as='a' href='/'><Flag name='us' /></Menu.Item>
              <Menu.Item as='a' href='/es'><Flag name='es' /></Menu.Item>
              <Menu.Item position='right'>
                <Icon name='phone'/> +1-864-498-8691
              </Menu.Item>
              <Menu.Item>
                <Icon name='mail'/> info@solitrade.com
              </Menu.Item>
              <Menu.Item>
                {/* <Image src={SideLogo} size='small' /> */}
                <Button as='a'  href="http://sales.solitrade.com" >
                  Log in
                </Button>
              </Menu.Item>
              {/* <Menu.Item style={{ right: '0px'}}>
                <Image src={SideLogo} size='small' />
              </Menu.Item> */}
            </Grid.Row>
            <Grid.Row centered>
              <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                // pointing={!fixed}
                // secondary={!fixed}
                size='large'
              >
                <Container style={{  }}>
                  {/* <Menu.Item as='a' href='/'><Image src='http://solitrade.com/images/logo-1.png' size='tiny'/></Menu.Item> */}
                  {/* <Menu.Item as='a' href=''><Flag name='es' /></Menu.Item>
                  <Menu.Item as='a' href=''><Flag name='us' /></Menu.Item> */}
                  <Menu.Item as='a' href='/'>HOME</Menu.Item>
                  <Menu.Item as='a' href='/about'>ABOUT US</Menu.Item>
                  <Menu.Item as='a' href='/products'>PRODUCTS</Menu.Item>
                  <Dropdown text='OUR COMMUNITY' pointing className='link item'>
                    <Dropdown.Menu>
                      <Dropdown.Item href='/community'>US</Dropdown.Item>
                      <Dropdown.Item href='/events'>EVENTS</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Menu.Item as='a' href='/contact' >CONTACT US</Menu.Item>
                  {/* <Menu.Item>
                    <Icon name='phone'/> +1-864-498-8691
                  </Menu.Item>
                  <Menu.Item>
                    <Icon name='mail'/> info@solitrade.com
                  </Menu.Item> */}
                  <Menu.Item position='right' style={{ right: '0px'}}>
                    <Image src={SideLogo} size='small' />
                  </Menu.Item>
                </Container>
              </Menu>
            </Grid.Row>
              </Grid>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class TabletContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive {...Responsive.onlyTablet}>
        {/* <Favicon url={Favicon} /> */}
        <Layout title="Solitrade Group"/>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            textAlign='center'
            style={{ minHeight: 900, padding: '0em 0em', backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundPosition: 'center'  }}
            vertical
          >
            <Menu
              // fixed={fixed ? 'top' : null}
              inverted={!fixed}
              // pointing={!fixed}
              // secondary={!fixed}
              size='large'
              style = {{margin: 0}}
            ><Grid>
              <Grid.Row>
              <Menu.Item as='a' href='https://www.linkedin.com/company/solitrade-group'><Link href='https://www.linkedin.com/company/solitrade-group'> <Icon name='linkedin in'/></Link></Menu.Item>
              <Menu.Item as='a' href='/'><Flag name='us' /></Menu.Item>
              <Menu.Item as='a' href='/es'><Flag name='es' /></Menu.Item>
              <Menu.Item position='right'>
                <Icon name='phone'/> +1-864-498-8691
              </Menu.Item>
              <Menu.Item>
                <Icon name='mail'/> info@solitrade.com
              </Menu.Item>
              <Menu.Item>
                {/* <Image src={SideLogo} size='small' /> */}
                <Button as='a'  href="http://sales.solitrade.com" >
                  Log in
                </Button>
              </Menu.Item>
              {/* <Menu.Item style={{ right: '0px'}}>
                <Image src={SideLogo} size='small' />
              </Menu.Item> */}
            </Grid.Row>
            <Grid.Row centered>
              <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                // pointing={!fixed}
                // secondary={!fixed}
                size='large'
              >
                <Container style={{  }}>
                  {/* <Menu.Item as='a' href='/'><Image src='http://solitrade.com/images/logo-1.png' size='tiny'/></Menu.Item> */}
                  {/* <Menu.Item as='a' href=''><Flag name='es' /></Menu.Item>
                  <Menu.Item as='a' href=''><Flag name='us' /></Menu.Item> */}
                  <Menu.Item as='a' href='/'>HOME</Menu.Item>
                  <Menu.Item as='a' href='/about'>ABOUT US</Menu.Item>
                  <Menu.Item as='a' href='/products'>PRODUCTS</Menu.Item>
                  <Dropdown text='OUR COMMUNITY' pointing className='link item'>
                    <Dropdown.Menu>
                      <Dropdown.Item href='/community'>US</Dropdown.Item>
                      <Dropdown.Item href='/events'>EVENTS</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Menu.Item as='a' href='/contact' >CONTACT US</Menu.Item>
                  {/* <Menu.Item>
                    <Icon name='phone'/> +1-864-498-8691
                  </Menu.Item>
                  <Menu.Item>
                    <Icon name='mail'/> info@solitrade.com
                  </Menu.Item> */}
                  <Menu.Item position='right' style={{ right: '0px'}}>
                    <Image src={SideLogo} size='small' />
                  </Menu.Item>
                </Container>
              </Menu>
            </Grid.Row>
              </Grid>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

TabletContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive {...Responsive.onlyMobile}>
        {/* <Favicon url={Favicon} /> */}
        <Layout title="Solitrade Group"/>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            {/* <Menu.Item as='a' href='https://www.linkedin.com/company/solitrade-group'><Link href='https://www.linkedin.com/company/solitrade-group'> <Icon name='linkedin in'/></Link></Menu.Item> */}
            {/* <Menu.Item as='a' href='/'><Image src='http://solitrade.com/images/logo-1.png' size='tiny'/></Menu.Item> */}
            {/* <Menu.Item as='a' href=''><Flag name='es' /></Menu.Item>
            <Menu.Item as='a' href=''><Flag name='us' /></Menu.Item> */}
            <Menu.Item as='a' href='/'>HOME</Menu.Item>
            <Menu.Item as='a' href='/about'>ABOUT US</Menu.Item>
            <Menu.Item as='a' href='/products'>PRODUCTS</Menu.Item>
            <Menu.Item as='a' href='/community'>US</Menu.Item>
            <Menu.Item as='a' href='/events'>EVENTS</Menu.Item>
            <Menu.Item as='a' href='/contact' >CONTACT US</Menu.Item>

          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 900, padding: '0em 0em', backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundPosition: 'center'  }}
              // style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
              basic
            >
                <Menu inverted pointing size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' size='large' />
                  </Menu.Item>
                  <Menu.Item as='a' href='/'><Flag name='us' /></Menu.Item>
                  <Menu.Item as='a' href='/es'><Flag name='es' /></Menu.Item>
                  <Menu.Item position='right'>
                    {/* <Icon name='phone'/> +1-864-498-8691  /
                    <Icon name='mail'/> info@solitrade.com */}
                    <Image src={SimpleLogo} size='mini' />
                  </Menu.Item>

                </Menu>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
    <TabletContainer>{children}</TabletContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
      <Container text textAlign='center'>
        <Header as='h1' style={{ fontSize: '2em', padding:"2em 0em" }}>
          WHAT WE <span style={{color:"#2185d0"}}>OFFER</span>
          {/* <Divider style={{color:"#2185d0"}}/> */}
          <hr style={{
            width: "10%",
            border: "1px solid #2185d0",
          }}/>
        </Header>
      </Container>
    <Segment style={{ padding: '0em 0em' }} basic>
      <Grid container stackable divided='vertically' >
        <Grid.Row>
          <Grid.Column width={8}>
              <Image src={CostumerService} size='medium' floated='left' />
              <Header as='h3'>GLOBAL LOGISTICS EXPERTISE</Header>
              <Container>
                <hr style={{
                  width: "40%",
                  border: "1px solid #2185d0",
                }}/>
              </Container>
              <Header as='h4'>Efficient, secure and reliable delveries.</Header>
          </Grid.Column>

            <Grid.Column width={8}>
              <Image src={GlogalLogistics} size='medium' floated='left'/>
              <Header as='h3'>INTERNATIONAL SALES AND MARKETING</Header>
              <hr style={{
                width: "40%",
                border: "1px solid #2185d0",
              }}/>
              <Header as='h4'>Global network of customers and suppliers.</Header>
          </Grid.Column>
          </Grid.Row>
          <Grid.Row>

          <Grid.Column width={8}>
              <Image src={InternationalSales} size='medium' floated='left'/>
              <Header as='h3'>OUTSTANDING CUSTOMER SERVICE</Header>
              <hr style={{
                width: "40%",
                border: "1px solid #2185d0",
                padding: "0em 0em"
              }}/>
              <Header as='h4'>We focus on our clients complete trust and satisfaction.</Header>
          </Grid.Column>
          <Grid.Column width={8}>
              <Image src={Valuation} size='medium' floated='left'/>
              <Header as='h3'>FOREIGN MARKET VALUATION</Header>
              <hr style={{
                width: "40%",
                border: "1px solid #2185d0",
              }}/>
              <Header as='h4'>Positioning products in the right market for success.</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>


    <Segment style={{ padding: '8em 0em', backgroundColor:'#666666'}} vertical>
      <Container text textAlign='center'>
        <Header as='h2' style={{ fontSize: '2em', color:'#FFFFFF' }}>
          WE ARE BUILT
        </Header>
        <Header as='h2' style={{ fontSize: '2em', color:'#66BEFA' }}>
          TO HELP YOU BUILD
        </Header>
      </Container>
    </Segment>

    <Footer />
  </ResponsiveContainer>

)

export default HomepageLayout