import React, { Component } from 'react'



class Header extends Component {


      componentWillReceiveProps(newProps){
        const indicator = document.querySelector('.cls-20')
        if(newProps.temperature !== undefined) {
        const temperature = newProps.temperature.slice(0,4);
        const rad = Math.ceil(temperature/ 360 * 100)
        const degree = Math.ceil(rad * 3.1416)
        indicator.style.transformOrigin = 'center'
        indicator.style.transform = `rotate(${degree * 2.45}deg)`
        indicator.style.transition = '2s'
        console.log(indicator.style.transform)
          }
      }

      render(){
        return (
        <div className="contain">
        <br/>
        <svg className="thermostat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 415 415"><title>thermo2</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" d="M208,1.31A206,206,0,0,1,413.69,207.5v.5a205.33,205.33,0,0,1-60.15,145l-.15.14-.05.06h0l0,0A205.42,205.42,0,0,1,208,413.69h-.5A206,206,0,0,1,1.31,208v-.5A205.45,205.45,0,0,1,61.43,62l.18-.18,0-.06h0l0,0A205.35,205.35,0,0,1,207.5,1.31h.5M205.5,385H208a177,177,0,0,0,124-53l.11-.12A176.88,176.88,0,0,0,383,208v-.5A177.38,177.38,0,0,0,208.06,30H205.5A176.92,176.92,0,0,0,81,81l0,0-.06.07A176.92,176.92,0,0,0,28,207.5v.5A177.41,177.41,0,0,0,205.5,385M208,.31h-.5A206.43,206.43,0,0,0,61,61h0l-.1.11A206.49,206.49,0,0,0,.31,207.5v.5A207.07,207.07,0,0,0,207.5,414.69h.5A206.46,206.46,0,0,0,354,354h0l.1-.11A206.37,206.37,0,0,0,414.69,208v-.5A207,207,0,0,0,208,.31ZM205.5,384A176.39,176.39,0,0,1,29,208v-.5A175.93,175.93,0,0,1,81.6,81.81l.11-.11A175.9,175.9,0,0,1,205.5,31H208A176.37,176.37,0,0,1,382,207.5v.5a176,176,0,0,1-50.6,123.19l-.11.11A175.94,175.94,0,0,1,208,384h-2.5Z"/><line className="cls-2" x1="208" y1="415" x2="208" y2="414.69"/><line className="cls-3" x1="208" y1="383.98" x2="208" y2="366"/><line className="cls-2" x1="208" y1="0.31" x2="208"/><line className="cls-4" x1="208" y1="47" x2="208" y2="31.02"/><line className="cls-3" x1="382" y1="208" x2="363" y2="208"/><line className="cls-2" x1="415" y1="208" x2="414.69" y2="208"/><line className="cls-2" x1="0.31" y1="208" y2="208"/><line className="cls-3" x1="47" y1="208" x2="29" y2="208"/><polyline className="cls-5" points="95 95.21 94.68 94.89 81.71 81.92 81.6 81.81"/><polyline className="cls-2" points="60.5 60.71 60.78 61 60.79 61 60.9 61.11"/><polyline className="cls-5" points="318.05 317.84 318.3 318.09 331.29 331.08 331.4 331.19"/><polyline className="cls-2" points="354.1 353.89 354.21 354 354.22 354 354.5 354.29"/><polyline className="cls-2" points="59.49 353.51 59.79 353.21 60.01 352.99"/><polyline className="cls-5" points="80.7 332.3 93.29 319.71 93.49 319.51"/><polyline className="cls-2" points="352.99 60.01 353.21 59.79 353.51 59.49"/><polyline className="cls-5" points="330.3 82.7 316.71 96.29 316.57 96.43"/><polyline className="cls-2" points="287.21 398.8 287.33 399.09 287.5 399.5"/><polyline className="cls-5" points="275.15 369.72 268.15 352.86 268.07 352.66"/><polyline className="cls-2" points="128.27 15.59 128.29 15.65 128.41 15.94"/><polyline className="cls-5" points="139.78 43.6 144.69 60.96 144.76 61.2"/><polyline className="cls-5" points="265.83 62.39 265.92 62.18 273.25 44.48"/><polyline className="cls-5" points="144.99 353.9 144.89 354.15 138.05 370.64"/><line className="cls-2" x1="126.59" y1="398.28" x2="126.5" y2="398.5"/><polyline className="cls-5" points="351.57 266.59 351.75 266.66 369.09 273.87"/><polyline className="cls-2" points="399.16 286.36 399.45 286.48 399.5 286.5"/><line className="cls-2" x1="16.37" y1="127.39" x2="16.16" y2="127.3"/><polyline className="cls-5" points="43.02 138.45 59.87 145.46 60.14 145.57"/><polyline className="cls-5" points="368 140 357.19 144.6 350.73 147.35"/><polyline className="cls-2" points="15.5 286.5 15.55 286.48 15.84 286.36"/><polyline className="cls-5" points="42.5 275.29 58.99 268.45 59.26 268.34"/><text className="cls-6" transform="translate(201.5 66.99)">60</text><text className="cls-7" transform="translate(254.5 76.99)">70</text><text className="cls-7" transform="translate(334.5 155.99)">90</text><text className="cls-7" transform="translate(301.5 107.99)">80</text><text className="cls-7" transform="translate(144.5 78.99)">50</text><text className="cls-7" transform="translate(99.5 110.99)">40</text><text className="cls-7" transform="translate(68.5 154.99)">30</text><text className="cls-8" transform="translate(198.5 355.97)">-20</text><text className="cls-6" transform="translate(59.98 211.98) scale(0.89 1)">20</text><text className="cls-7" transform="translate(70.99 268.97)">10</text><text className="cls-7" transform="translate(144.99 345.97)">-10</text><text className="cls-7" transform="translate(99.99 314.97)">0</text><text className="cls-6" transform="translate(340.51 212.98) scale(0.82 1)">100</text><text className="cls-7" transform="translate(326.51 266.97)">110</text><text className="cls-7" transform="translate(294.51 314.97)">120</text><text className="cls-7" transform="translate(254.51 343.97)">130</text><image width="256" height="256" transform="translate(79 81)" /><path className="cls-20" d="M269.81,142.33l-21.17,9.22-37.89,43.74A13.16,13.16,0,0,0,208,195a13,13,0,0,0-12.19,17.53l-71.3,82.3,78.17-75a13,13,0,0,0,17.39-16.68l42.75-41ZM211.23,214a6.93,6.93,0,1,1,2.53-9.46A6.93,6.93,0,0,1,211.23,214Z"/></g></g></svg>
        <div className="chip">{this.props.temperature}</div>
        </div>
      )
    }
  }

export default Header;
