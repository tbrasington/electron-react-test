import React from 'react';
import { render, Artboard, Text, View } from 'react-sketchapp';

const Document = ({ colors }) => (
  <Artboard
    name="Generated design system"
    style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: (96 + 8) * 4,
    }} >

    <View><Text style={{color:'#0066DC', fontSize:48}}>Hello</Text></View>
   
  </Artboard>
);
 

export default () => {
  render(<Document  />, context.document.currentPage());
};