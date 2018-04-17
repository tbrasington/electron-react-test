import React from 'react';
import { render, Artboard, Text, View } from 'react-sketchapp';

const Document = ({ colors }) => (
  <Artboard
    name="Generated design system 2"
    style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: (96 + 8) * 4,
    }} >

    <View><Text style={{color:'#DC5700', fontSize:48}}>goodbye </Text></View>
   
  </Artboard>
);
 

export default () => {
  render(<Document  />, context.document.currentPage());
};