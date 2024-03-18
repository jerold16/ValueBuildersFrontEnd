import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Contentsection1 = (props) => {
    let {content} =props
  return (
    <div className="my-20 flex xl:my-0 xl:min-h-[80vh] bgpattern">
        <Row className="my-auto container justify-between mx-auto ">
          <Col lg={6} className="">
            <h1 className="poppins">{content.title} </h1>
            <p className="sourcesan">
              {content.para1}
            </p>
            <p className="sourcesan">
              {content.para2}
            </p>
          </Col>
          <Col lg={5} className="">
            <img
              className="rounded"
              src={content.img}
              alt="Interior"
            />
          </Col>
        </Row>
      </div>
  )
}

export default Contentsection1