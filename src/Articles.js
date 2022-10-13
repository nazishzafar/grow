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
                    <Nav
                      variant="pills"
                      className="flex-column"
                      style={{
                        borderRight: "1px solid black",
                        paddingRight: "10px",
                      }}
                    >
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
                          <h2> Dressing babies for bed: the basics</h2>
                          Dress in layers Dress your baby in layers of fitted
                          clothing rather than just thick pajamas. You can add
                          or take away layers as the temperature changes. No
                          hats and beanies in bed Babies cool themselves down by
                          releasing heat from their heads and faces. Babies can
                          quickly overheat if they fall asleep wearing hats or
                          beanies. So it’s important to keep your baby’s head
                          uncovered during sleep. Headwear in bed can also be a
                          choking or suffocation hazard.
                          <h2>Baby’s temperature</h2>
                          Your baby’s hands and feet might feel cool, but this
                          isn’t a good indication of temperature. You can find
                          out how hot your baby really is by feeling baby’s back
                          or tummy. Room temperature If you think your baby’s
                          room is too warm, you can use a floor or ceiling fan
                          to keep the room at a comfortable temperature. The
                          safest place for a plug-in floor fan is on the
                          opposite side of the room, away from your baby. If
                          your baby’s room is very cold, you can use a heater to
                          warm the room to a more comfortable temperature. Keep
                          the door slightly open, so that your baby’s room
                          doesn’t overheat.
                          <h2>Baby wrapping</h2>
                          Wrapping helps babies settle for sleep, as well as
                          stay in a safe sleeping position on their backs. If
                          you choose to wrap your baby, use lightweight cotton
                          or muslin wraps. Make sure the wrap doesn’t go above
                          your baby’s shoulders or cover baby’s head, ears or
                          chin. Wraps that are too high can obstruct your baby’s
                          breathing and cause overheating. Also check that
                          there’s enough room for your baby to stretch their
                          legs and that the wrap isn’t too tight around baby’s
                          chest and hips. Wrapping a baby’s legs and chest too
                          tightly can lead to hip and breathing problems.
                          Underneath the wrap, put your baby in a nappy in
                          warmer weather. You can add a lightweight grow suit in
                          cooler weather. Babies can be wrapped from birth until
                          they start showing signs that they can roll onto their
                          tummies, usually around 4 months.
                          <h2>Sleep and settling help for babies</h2>
                          Why you might need help with baby and toddler sleep
                          Babies and children need sleep to grow and develop
                          well. Good sleep is also important for their health
                          and immunity. If your baby isn’t settling or sleeping
                          well, your baby might not be getting the sleep they
                          need. You’re probably not getting enough sleep either.
                          You need sleep for your health and wellbeing. And your
                          child is more likely to grow, develop and thrive when
                          you’re physically, emotionally and mentally well.
                          That’s why it’s a good idea to get help for your
                          baby’s sleep, if you need it.
                          <h2>
                            Working on baby and toddler sleep problems at home
                          </h2>
                          The child health professionals you talk to at early
                          parenting centers, child and family health centers,
                          and helplines will have plenty of strategies for you
                          to try at home. As you start putting these strategies
                          into practice, it can help to keep the following
                          points in mind: 1. Be patient. It takes time to get
                          used to new routines. Make a plan with the
                          professional for how long you’ll try something before
                          deciding that it isn’t working and trying something
                          else. Do your best to stick to what you and the
                          professional decided will work best for your baby. 2.
                          Don’t be surprised if your baby goes back to old
                          habits for a short time. If you’re consistent with the
                          new approaches you’ve learned, you’ll soon have your
                          baby in a steady, settled routine. 3. Keep any
                          suggested strategies in writing. Reading them will
                          remind you of what you need to do. When things aren’t
                          working, you can double-check to see whether you’re
                          following the strategies correctly. 4. Try to organize
                          back-up for when you start new strategies. Find out
                          who you can contact for help or emotional support.
                          Most early parenting centers, for example, provide a
                          telephone number for follow-up concerns. They have
                          staff who can answer your questions. 5. Talk with your
                          partner, if you have one, and make sure you agree on
                          the plan. If you don’t agree, this can put more stress
                          on your family. It also means that the plan is less
                          likely to work.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Play and Learning">
                        <p>
                          <h2> Learning ideas</h2>
                          Babies and young children learn best when they
                          have warm, engaged and responsive relationships with
                          their main careers. So you play a vital role in
                          helping your child learn through their early years.
                          You are your child’s first teacher, and your child
                          will keep learning from you as they grow older.
                          <h2>How babies and young children learn</h2>
                          Your young child learns through everyday play and
                          exploration in a safe and stimulating environment.
                          Your child’s relationships with you, other family
                          members and careers – for example, early childhood
                          educators – are the foundation for your child’s
                          healthy learning and development. Plenty of time spent
                          playing and interacting with you and others helps your
                          child learn skills they need for life – like
                          communicating, thinking, problem-solving, and being
                          with other people. Your child learns best by actively
                          engaging with their environment. This includes: 1.
                          observing things, watching faces and responding to
                          voices 2. listening to sounds, making sounds and
                          singing 3. exploring – for example, putting things in
                          their mouth, shaking things and turning things around
                          4. asking questions – for example, ‘But why?’ 5.
                          experimenting with textures, objects and materials
                          like water, sand or dirt 6. doing things that
                          stimulate their senses – touch, taste, smell, vision
                          and hearing. Your child also learns by being involved
                          in their learning. This could be as simple as: 1.
                          choosing books to read 2. pointing to pictures in
                          books 3. choosing objects and toys to play with 4.
                          picking out vegetables for dinner 5. measuring out
                          flour for muffins.
                          <h2>About numeracy and math’s skills</h2>
                          Numeracy is the ability to recognize and apply math’s
                          concepts in all areas of life. Numeracy skills involve
                          understanding numbers, counting, solving number
                          problems, measuring, estimating, sorting, noticing
                          patterns, adding and subtracting numbers, and so on.
                          Children and adults need numeracy and math’s skills to
                          do everyday things like: 1. solve problems – for
                          example, have I got time to walk to school? 2. analyze
                          and make sense of information – for example, how many
                          wins does my team need to get to the top of the
                          competition? 3. understand patterns – for example,
                          what number would the next house in this street be? 4.
                          make choices – for example, which bike is the best
                          value? Your child’s everyday experiences are full of
                          learning opportunities that lay the foundations for
                          numeracy.
                          <h2>Babies: tips for building numeracy skills</h2>
                          Your baby loves hearing your voice and enjoys stories
                          and songs with repetition, rhyme and numbers. Some
                          things you might already be doing or could start doing
                          with your baby to build numeracy skills include: 1.
                          reading stories with numbers – for example,
                          ‘Goldilocks and the three bears’ 2. playing counting
                          and sorting games 3. singing number songs and rhymes
                          4. changing your tone of voice to describe concepts –
                          for example, a deep, loud voice to describe something
                          big, or a soft, squeaky voice to describe something
                          little.
                        </p>
                      </Tab.Pane>
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
                    <Nav
                      variant="pills"
                      className="flex-column"
                      style={{
                        borderRight: "1px solid black",
                        paddingRight: "10px",
                      }}
                    >
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
                    <Nav
                      variant="pills"
                      className="flex-column"
                      style={{
                        borderRight: "1px solid black",
                        paddingRight: "10px",
                      }}
                    >
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
                    <Nav
                      variant="pills"
                      className="flex-column"
                      style={{
                        borderRight: "1px solid black",
                        paddingRight: "10px",
                      }}
                    >
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
                    <Nav
                      variant="pills"
                      className="flex-column"
                      style={{
                        borderRight: "1px solid black",
                        paddingRight: "10px",
                      }}
                    >
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
                    <Nav
                      variant="pills"
                      className="flex-column"
                      style={{
                        borderRight: "1px solid black",
                        paddingRight: "10px",
                      }}
                    >
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
                    <Nav
                      variant="pills"
                      className="flex-column"
                      style={{
                        borderRight: "1px solid black",
                        paddingRight: "10px",
                      }}
                    >
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
