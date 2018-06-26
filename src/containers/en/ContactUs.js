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
  Segment,
  Sidebar,
  Visibility,
  Flag
} from 'semantic-ui-react'
import DesktopContainer from './DesktopContainer'
import Footer from './Footer'
import { Form } from 'semantic-ui-react'

const MenuAndBody = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
  </div>
)

MenuAndBody.propTypes = {
  children: PropTypes.node,
}


class MobileForm extends Component {
  state = {}

  render() {
    const { children } = this.props

    return (
      <Responsive {...Responsive.onlyMobile}>
        <MenuAndBody>
          <Segment style={{ padding: '3em 0em' }} vertical>
            <Container text textAlign='center'>
              <Header as='h1' style={{ fontSize: '2em' }}>
                CONTACT US
              </Header>
            </Container>
          </Segment>
          <Segment style={{ padding: '3em 1em' }} vertical>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Form action="http://solitrade.com/sendmail.php">
                    <Form.Group widths='equal'>
                      <Form.Input fluid label='Name' placeholder='Name' />
                      <Form.Input fluid label='Email' placeholder='Email' />
                      <Form.Input fluid label='Phone' placeholder='Phone' />
                    </Form.Group>
                    <Form.Input fluid label='Subject' placeholder='Subject' />
                    <Form.TextArea label='About' placeholder='Tell us more' />
                    <Form.Button>Submit</Form.Button>
                  </Form>
                </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column  style={{ padding: '0em 1em' }}>
                        <Header as='h4' content='CONTACT INFO' />
                            <Grid.Column style={{ padding: '1em 0em' }}>
                              <Icon name='phone' color='blue' size='big' />
                               +1-864-498-8691
                            </Grid.Column>
                            <Grid.Column style={{ padding: '1em 0em' }}>
                              <Icon name='mail' color='blue' size='big'/>
                               info@solitrade.com
                            </Grid.Column>
                            <Grid.Column style={{ padding: '1em 0em' }}>
                              <Icon name='point' color='blue' size='big'/>
                               CHARLOTTE, SC 28203 (USA)
                            </Grid.Column>
                    </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          <Footer />
        </MenuAndBody>
      </Responsive>
    )
  }
}

MobileForm.propTypes = {
  children: PropTypes.node,
}

class TabletForm extends Component {
  state = {}

  render() {
    const { children } = this.props

    return (
      <Responsive {...Responsive.onlyTablet}>
        <MenuAndBody>
          <Segment style={{ padding: '3em 0em' }} vertical>
            <Container text textAlign='center'>
              <Header as='h1' style={{ fontSize: '2em' }}>
                CONTACT US
              </Header>
            </Container>
          </Segment>
          <Segment style={{ padding: '3em 1em' }} vertical>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Form action="http://solitrade.com/sendmail.php">
                    <Form.Group widths='equal'>
                      <Form.Input fluid label='Name' placeholder='Name' />
                      <Form.Input fluid label='Email' placeholder='Email' />
                      <Form.Input fluid label='Phone' placeholder='Phone' />
                    </Form.Group>
                    <Form.Input fluid label='Subject' placeholder='Subject' />
                    <Form.TextArea label='About' placeholder='Tell us more' />
                    <Form.Button>Submit</Form.Button>
                  </Form>
                </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column  style={{ padding: '0em 1em' }}>
                        <Header as='h4' content='CONTACT INFO' />
                            <Grid.Column style={{ padding: '1em 0em' }}>
                              <Icon name='phone' color='blue' size='big' />
                               +1-864-498-8691
                            </Grid.Column>
                            <Grid.Column style={{ padding: '1em 0em' }}>
                              <Icon name='mail' color='blue' size='big'/>
                               info@solitrade.com
                            </Grid.Column>
                            <Grid.Column style={{ padding: '1em 0em' }}>
                              <Icon name='point' color='blue' size='big'/>
                               CHARLOTTE, SC 28203 (USA)
                            </Grid.Column>
                    </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          <Footer />
        </MenuAndBody>
      </Responsive>
    )
  }
}

TabletForm.propTypes = {
  children: PropTypes.node,
}



class DesktopForm extends Component {
  state = {}



  render() {
    const { value } = this.state
    return (
      <Responsive {...Responsive.onlyComputer}>
        <MenuAndBody>
          <Segment style={{ padding: '3em 0em' }} vertical>
            <Container text textAlign='center'>
              <Header as='h1' style={{ fontSize: '2em' }}>
                CONTACT US
              </Header>
            </Container>
          </Segment>
          <Segment style={{ padding: '3% 25%' }} vertical>
            <Grid divided='vertically'>
              <Grid.Row columns={3}>
                <Grid.Column width={10}>
                  <Form action="http://solitrade.com/sendmail.php">
                    <Form.Group widths='equal'>
                      <Form.Input fluid label='Name' placeholder='Name' />
                      <Form.Input fluid label='Email' placeholder='Email' />
                      <Form.Input fluid label='Phone' placeholder='Phone' />
                    </Form.Group>
                    <Form.Input fluid label='Subject' placeholder='Subject' />
                    <Form.TextArea label='About' placeholder='Tell us more' />
                    <Form.Button>Submit</Form.Button>
                  </Form>
              </Grid.Column>
              <Grid.Column  style={{ padding: '0em 5%' }} width={6}>
                  <Header as='h4' content='CONTACT INFO' />
                      <Grid.Column style={{ padding: '1em 0em' }}>
                        <Icon name='phone' color='blue' size='big' />
                         +1-864-498-8691
                      </Grid.Column>
                      <Grid.Column style={{ padding: '1em 0em' }}>
                        <Icon name='mail' color='blue' size='big'/>
                         info@solitrade.com
                      </Grid.Column>
                      <Grid.Column style={{ padding: '1em 0em' }}>
                        <Icon name='point' color='blue' size='big'/>
                         CHARLOTTE, SC 28203 (USA)
                      </Grid.Column>
              </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        <Footer />
      </MenuAndBody>
    </Responsive>
    )
  }
}

const Forms = ({ children }) => (
  <div>
    <DesktopForm>{children}</DesktopForm>
    <MobileForm>{children}</MobileForm>
    <TabletForm>{children}</TabletForm>
  </div>
)

export default Forms