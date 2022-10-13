import React from "react";
import Actnormal from "./Images/Actnormal.svg";
import balance from "./normal/balance.png";
import ballon from "./normal/ballon.png";
import blocks from "./normal/blocks.png";
import chair from "./normal/chair.png";
import freeze from "./normal/freeze.png";
import hide from "./normal/hide.png";
import HOPSCOTCH from "./normal/HOPSCOTCH.png";
import ice from "./normal/ice.png";
import indoorc from "./normal/indoorc.png";
import inout from "./normal/inout.png";
import light from "./normal/lght.png";
import puzzle from "./normal/puzzle.png";
import simon from "./normal/simon.png";
import sorting from "./normal/sorting.png";
import tape from "./normal/tape.png";
import ziping from "./normal/ziping.png";
import "./styles/NormalAct.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
const Activities = () => {
  return (
    <div className="navbarPadding">
      <div style={{ maxWidth: "1440px", objectFit: "contain" }}>
        <img width="100%" height="100%" src={Actnormal} alt="hero-img" />
      </div>

      <div className="tabs-div">
        <Tabs
          defaultActiveKey="profile"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="Outdoor" title="Outdoor">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav
                    variant="pills"
                    className="flex-column"
                    style={{
                      borderRight: "1px solid black",
                      paddingRight: "10px",
                    }}
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="Balance Beem">Balance Beem</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Keep the Ballon up">
                        Keep the Ballon up
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Freeze Tag">Freeze Tag</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="HopScotch">HopScotch</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Red light Green Light">
                        Red light Green Light
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="Balance Beem">
                      <div>
                        <img src={balance} className="normal-act" alt="" />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Keep the Ballon up">
                      <div>
                        <img src={ballon} className="normal-act" alt="" />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Freeze Tag">
                      <div>
                        <img src={freeze} className="normal-act" alt="" />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="HopScotch">
                      <div>
                        <img src={HOPSCOTCH} className="normal-act" alt="" />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Red light Green Light">
                      <div>
                        <img src={light} className="normal-act" alt="" />
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Tab>

          <Tab eventKey="Indoor" title="Indoor">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav
                    variant="pills"
                    className="flex-column"
                    style={{
                      borderRight: "1px solid black",
                      paddingRight: "10px",
                    }}
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="Building blocks">
                        Building blocks
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Musical Chair">
                        Musical Chair
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Hide and Seek">
                        Hide and Seek
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Ice Painting Game">
                        Ice Painting Game
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Indoor obstacle">
                        Indoor obstacle
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="In and Out Hangman">
                        In and Out Hangman
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Puzzle Game">Puzzle Game</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Simon says it with feelings">
                        Simon says it with feelings
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Sorting and Matching colors">
                        Sorting and Matching colors
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Sticky tape">Sticky tape</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Ziping Board">Ziping Board</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="Building blocks">
                      <div>
                        <img src={blocks} className="normal-act" alt="" />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Musical Chair">
                      <div>
                        <img src={chair} className="normal-act" alt="" />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Hide and Seek">
                      <div>
                        <img src={hide} className="normal-act" alt="" />
                      </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="Ice Painting Game">
                      <div>
                        <img src={ice} className="normal-act" alt="" />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Indoor obstacle">
                      <div>
                        <img src={indoorc} className="normal-act" alt="" />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="In and Out Hangman">
                      <div>
                        <img src={inout} className="normal-act" alt="" />
                      </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="Puzzle Game">
                      <div>
                        <img src={puzzle} className="normal-act" alt="" />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Simon says it with feelings">
                      <div>
                        <img src={simon} className="normal-act" alt="" />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Sorting and Matching colors">
                      <div>
                        <img src={sorting} className="normal-act" alt="" />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Sticky tape">
                      <div>
                        <img src={tape} className="normal-act" alt="" />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Ziping Board">
                      <div>
                        <img src={ziping} className="normal-act" alt="" />
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Activities;
