import React from "react";
import articles from "./Images/articles.svg";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import "./styles/Artical.css";

const Articles = () => {
  return (
    <div className="navbarPadding">
      {/* <div className='hero-image'>
        <img  src={articles} alt="hero image"/>
      </div> */}
      <div style={{ maxWidth: "1440px", objectFit: "contain" }}>
        <img width="100%" height="100%" src={articles} alt="hero image" />
      </div>
      <div style={{ backgroundColor: "#437f86", marginTop: "50px" }}>
        <div className="tabs-div">
          <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3"
            fill
          >
            <Tab eventKey="New Borns" title="New Borns">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column" style={{borderRight:"1px solid black", paddingRight:'10px'}}>
                      <Nav.Item>
                        <Nav.Link eventKey="Sleep">Sleep</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Play and Learning">
                          Play and Learning
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Media and Learning">
                          Media and Learning
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Health and Daily Care">
                          Health and Daily Care
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Allergies and Intelerance">
                          Allergies and Intelerance
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="Sleep">
                        <p>
                          The standard chunk of Lorem Ipsum used since the 1500s
                          is reproduced below for those interested. Sections
                          1.10.32 and 1.10.33 from "de Finibus Bonorum et
                          Malorum" by Cicero are also reproduced in their exact
                          original form, accompanied by English versions from
                          the 1914 translation by H. Rackham.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Play and Learning"></Tab.Pane>
                      <Tab.Pane eventKey=" Media and Learning"></Tab.Pane>
                      <Tab.Pane eventKey="Health and Daily Care"></Tab.Pane>
                      <Tab.Pane eventKey=" Allergies and Intelerance"></Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Tab>
            <Tab eventKey="Babies" title="Babies">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column" style={{borderRight:"1px solid black", paddingRight:'10px'}}>
                      <Nav.Item>
                        <Nav.Link eventKey="Sleep">Sleep</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Play and Learning">
                          Play and Learning
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Media and Learning">
                          Media and Learning
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Health and Daily Care">
                          Health and Daily Care
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Allergies and Intelerance">
                          Allergies and Intelerance
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="Sleep">
                        <p>
                          The standard chunk of Lorem Ipsum used since the 1500s
                          is reproduced below for those interested. Sections
                          1.10.32 and 1.10.33 from "de Finibus Bonorum et
                          Malorum" by Cicero are also reproduced in their exact
                          original form, accompanied by English versions from
                          the 1914 translation by H. Rackham.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Play and Learning"></Tab.Pane>
                      <Tab.Pane eventKey=" Media and Learning"></Tab.Pane>
                      <Tab.Pane eventKey="Health and Daily Care"></Tab.Pane>
                      <Tab.Pane eventKey=" Allergies and Intelerance"></Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Tab>
            <Tab eventKey="Toddler" title="Toddler">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column" style={{borderRight:"1px solid black", paddingRight:'10px'}}>
                      <Nav.Item>
                        <Nav.Link eventKey="Sleep">Sleep</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Play and Learning">
                          Play and Learning
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Media and Learning">
                          Media and Learning
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Health and Daily Care">
                          Health and Daily Care
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Allergies and Intelerance">
                          Allergies and Intelerance
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="Sleep">
                        <p>
                          The standard chunk of Lorem Ipsum used since the 1500s
                          is reproduced below for those interested. Sections
                          1.10.32 and 1.10.33 from "de Finibus Bonorum et
                          Malorum" by Cicero are also reproduced in their exact
                          original form, accompanied by English versions from
                          the 1914 translation by H. Rackham.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Play and Learning"></Tab.Pane>
                      <Tab.Pane eventKey=" Media and Learning"></Tab.Pane>
                      <Tab.Pane eventKey="Health and Daily Care"></Tab.Pane>
                      <Tab.Pane eventKey=" Allergies and Intelerance"></Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Tab>
            <Tab eventKey="Pre School" title="Pre School">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column" style={{borderRight:"1px solid black", paddingRight:'10px'}}>
                      <Nav.Item>
                        <Nav.Link eventKey="Sleep">Sleep</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Play and Learning">
                          Play and Learning
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Media and Learning">
                          Media and Learning
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Health and Daily Care">
                          Health and Daily Care
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Allergies and Intelerance">
                          Allergies and Intelerance
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="Sleep">
                        <p>
                          The standard chunk of Lorem Ipsum used since the 1500s
                          is reproduced below for those interested. Sections
                          1.10.32 and 1.10.33 from "de Finibus Bonorum et
                          Malorum" by Cicero are also reproduced in their exact
                          original form, accompanied by English versions from
                          the 1914 translation by H. Rackham.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Play and Learning"></Tab.Pane>
                      <Tab.Pane eventKey=" Media and Learning"></Tab.Pane>
                      <Tab.Pane eventKey="Health and Daily Care"></Tab.Pane>
                      <Tab.Pane eventKey=" Allergies and Intelerance"></Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Tab>
            <Tab eventKey="School Age" title="School Age">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column" style={{borderRight:"1px solid black", paddingRight:'10px'}}>
                      <Nav.Item>
                        <Nav.Link eventKey="Sleep">Sleep</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Play and Learning">
                          Play and Learning
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Media and Learning">
                          Media and Learning
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Health and Daily Care">
                          Health and Daily Care
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Allergies and Intelerance">
                          Allergies and Intelerance
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="Sleep">
                        <p>
                          The standard chunk of Lorem Ipsum used since the 1500s
                          is reproduced below for those interested. Sections
                          1.10.32 and 1.10.33 from "de Finibus Bonorum et
                          Malorum" by Cicero are also reproduced in their exact
                          original form, accompanied by English versions from
                          the 1914 translation by H. Rackham.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Play and Learning"></Tab.Pane>
                      <Tab.Pane eventKey=" Media and Learning"></Tab.Pane>
                      <Tab.Pane eventKey="Health and Daily Care"></Tab.Pane>
                      <Tab.Pane eventKey=" Allergies and Intelerance"></Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Tab>
            <Tab eventKey="Autism" title="Autism">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column" style={{borderRight:"1px solid black", paddingRight:'10px'}}>
                      <Nav.Item>
                        <Nav.Link eventKey="Sleep">Sleep</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Play and Learning">
                          Play and Learning
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Media and Learning">
                          Media and Learning
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Health and Daily Care">
                          Health and Daily Care
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Allergies and Intelerance">
                          Allergies and Intelerance
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="Sleep">
                        <p>
                          The standard chunk of Lorem Ipsum used since the 1500s
                          is reproduced below for those interested. Sections
                          1.10.32 and 1.10.33 from "de Finibus Bonorum et
                          Malorum" by Cicero are also reproduced in their exact
                          original form, accompanied by English versions from
                          the 1914 translation by H. Rackham.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Play and Learning"></Tab.Pane>
                      <Tab.Pane eventKey=" Media and Learning"></Tab.Pane>
                      <Tab.Pane eventKey="Health and Daily Care"></Tab.Pane>
                      <Tab.Pane eventKey=" Allergies and Intelerance"></Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Tab>
            <Tab eventKey="ADHD" title="ADHD">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column" style={{borderRight:"1px solid black", paddingRight:'10px'}}>
                      <Nav.Item>
                        <Nav.Link eventKey="Sleep">Sleep</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Play and Learning">
                          Play and Learning
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Media and Learning">
                          Media and Learning
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Health and Daily Care">
                          Health and Daily Care
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Allergies and Intelerance">
                          Allergies and Intelerance
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="Sleep">
                        <p>
                          The standard chunk of Lorem Ipsum used since the 1500s
                          is reproduced below for those interested. Sections
                          1.10.32 and 1.10.33 from "de Finibus Bonorum et
                          Malorum" by Cicero are also reproduced in their exact
                          original form, accompanied by English versions from
                          the 1914 translation by H. Rackham.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Play and Learning"></Tab.Pane>
                      <Tab.Pane eventKey=" Media and Learning"></Tab.Pane>
                      <Tab.Pane eventKey="Health and Daily Care"></Tab.Pane>
                      <Tab.Pane eventKey=" Allergies and Intelerance"></Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Articles;
