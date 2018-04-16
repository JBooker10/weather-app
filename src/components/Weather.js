import React, { Component } from 'react'
import { Collection, CollectionItem, } from 'react-materialize'
import logo from './../assets/logo.svg'

const Weather = props => (

      <div>
      <div className="collection">
      { props.error && <p className="collection-item center">{props.error}</p>}
      <CollectionItem>{ <span>Date/Time:<span className="right info"> {props.time}</span></span>}</CollectionItem>
      <CollectionItem>{ <span>Location:<span className="right info">{props.city} {props.state}</span></span> }</CollectionItem>
      <CollectionItem>{ <span>Temperature:<span className="right info">{props.temperature}</span></span> }</CollectionItem>
      <CollectionItem>{ <span>Weather:<span className="right info">{props.weather}</span></span> }</CollectionItem>
      <CollectionItem>{ <span>Humidity:<span className="right info"> {props.humidity}</span></span> }</CollectionItem>
      </div>
      <br/><br/>
      </div>
    )

export default Weather
