import React, { Component } from 'react'
import { Input, Row, Button, Autocomplete } from 'react-materialize'
import { UnitedStates } from './Info';

const Form = props => (
      <form onSubmit={props.getWeather}>
      <Row className="center-align p-4">
      <Input className="form-style center-align"  m={6} type="text" name="city" placeholder="City..."/>
      <Input className="form-style center-align" m={6} type="text" name="state" placeholder="State/Country..."/>
       </Row>
       <Row>
       <Button className="right p-4 btn">Get Weather</Button>
       </Row>
      </form>
)

export default Form
