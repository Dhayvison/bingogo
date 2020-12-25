import React from 'react';
import { connect } from 'react-redux';

function DisplayNumero(store: any) {
  console.log(store);

  return <h1>12</h1>;
}

const mapStateToProps = (store: any) => ({});

export default connect(mapStateToProps)(DisplayNumero);
