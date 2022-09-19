import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  const nextBackgroundHandler = () => {
    selectNextBackground(background)
  }
  return (
    <button className={props.config.classname} onClick={nextBackgroundHandler}>
      {props.config.label}
    </button>
  )
}
export default ColourSelector;
