import React from 'react'
import { Container, Table, Button } from 'reactstrap'
import './About.css'

const About = () => {
    document.title = "About"

    return (
        <div id='dropped-box' className='container-fluid' align='center'>
            <Container>
                <h1>ABOUT US</h1>
                <h3> Get to know the team</h3>
                <p>
                    Known as Team Luck, we worked together on this project to create QA Cinema!
                    <br/>
                    We split up tasks amongst ourselves and we have created this website as a group
                </p>
                <div id='dropped-box' className='container-fluid'>
                    <Table id='open-table' borderless striped >
                        <thead align='center'>
                            <tr >
                                <th></th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Github</th>
                            </tr>
                        </thead>
                        <tbody align='center'>
                            <tr>
                                <th scope='row'>1</th>
                                <td>Muhammed</td>
                                <td>Jakupovic</td>
                                <td>Mjakupovic@qa.com</td>
                                <td><a id='gitlink' href="https://github.com/Muhammed-Jakupovic7" target='_blank' rel='noreferrer'>github.com/Muhammed-Jakupovic7</a></td>
                            </tr>
                            <tr>
                                <th scope='row'>2</th>
                                <td>Brendon</td>
                                <td>Whitfield</td>
                                <td>Bwhitfield@qa.com</td>
                                <td><a id='.gitlink' href="https://github.com/brendonWhitfield" target='_blank' rel='noreferrer'>github.com/brendonWhitfield</a></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Muhammed</td>
                                <td>Rahman</td>
                                <td>Mrahman@qa.com</td>
                                <td><a id="gitlink" href="#" target="_blank" rel="noreferrer">#</a></td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Oliver</td>
                                <td>Stockman</td>
                                <td>Ostockman@qa.com</td>
                                <td><a id="gitlink" href="https://github.com/Olly000" target="_blank" rel="noreferrer">github.com/Olly000</a></td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Leon</td>
                                <td>Cameron</td>
                                <td>Lcamkiss@qa.com</td>
                                <td><a id="gitlink" href="https://github.com/Lucksray" target="_blank" rel="noreferrer">github.com/Lucksray</a></td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Kester</td>
                                <td>Jones</td>
                                <td>Kjones@qa.com</td>
                                <td><a id="gitlink" href="https://github.com/Lucksray" target="_blank" rel="noreferrer">github.com/Lucksray</a></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <br />
                <div align="center">
                    <Button id="infoButton" href="http://localhost:3000/contact" type="button">
                        If you wish to contact the team, please click here
                    </Button>
                </div>
            </Container>
        </div>
    )
}

export default About;