import React, {Component} from "react";
import {Handles, Rail, Slider, Ticks, Tracks} from "react-compound-slider";
import {Handle, SliderRail, Tick, Track} from "./components"; // example render components - source below
import PropTypes from "prop-types";

const sliderStyle = {
  position: "relative",
  width: "100%"
};

//const domain = [100, 700];
//const defaultValues = [400, 450];

class RangeSlider extends Component {
  propTypes = {
    min: PropTypes.number.required,
    max: PropTypes.number.required,
    step: PropTypes.number.required
  };

  constructor(props) {
    super(props);
    this.state = {
      min: props.min,
      max: props.max,
    }
  }

  onChange = (e) => {
    console.log(e);

    this.setState({
      min: e[0],
      max: e[1]
    })
  };

  render() {
    const domain = [this.props.min, this.props.max],
      defaultValues = [this.state.min, this.state.max];
    return (
      <div className={"text-white p-4"}>
        <p className={"py-1"}><span className={"h5 test-bold"}>{this.props.title}</span> | KSh {this.state.max} - Ksh {this.state.min}</p>
        <div style={{height: 120, width: "100%"}}>
          <Slider
            mode={1}
            step={this.props.step}
            domain={domain}
            rootStyle={sliderStyle}
            onUpdate={this.onUpdate}
            onChange={this.onChange}
            values={defaultValues}
          >
            <Rail>
              {
                ({getRailProps}) => {
                  return <SliderRail getRailProps={getRailProps}/>
                }
              }
            </Rail>
            <Handles>
              {({handles, getHandleProps}) => (
                <div style={{color: 'black'}} className="slider-handles">
                  {handles.map(handle => (
                    <Handle
                      className={"default-color"}
                      style={{backgroundColor: 'black'}}
                      key={handle.id}
                      handle={handle}
                      domain={domain}
                      getHandleProps={getHandleProps}
                    />
                  ))}
                </div>
              )}
            </Handles>
            <Tracks left={false} right={false}>
              {({tracks, getTrackProps}) => (
                <div className="slider-tracks">
                  {tracks.map(({id, source, target}) => (
                    <Track
                      className={"default-color-dark"}
                      key={id}
                      source={source}
                      target={target}
                      getTrackProps={getTrackProps}
                    />
                  ))}
                </div>
              )}
            </Tracks>
            <Ticks count={5}>
              {({ticks}) => (
                <div className="slider-ticks">
                  {ticks.map(tick => (
                    <Tick key={tick.id} tick={tick} count={ticks.length}/>
                  ))}
                </div>
              )}
            </Ticks>
          </Slider>
        </div>
      </div>
    );
  }
}

export default RangeSlider;