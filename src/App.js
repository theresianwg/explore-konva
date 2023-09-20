// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { createRoot } from 'react-dom/client';
import { Stage, Layer, Rect, Text, Circle, Line, Ellipse, Wedge, Star, Ring, Arc, Arrow } from 'react-konva';


function App() {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
    <Layer>
      <Text text="Ini coba coba" fontSize={30} />

      {/* ------------- SHAPES ------------- */}
      <Rect
        x={20}
        y={50}
        // sisi
        width={80}
        height={80}
        //warna
        fill="red"
        // garis pinggir
        stroke="white"
        // bayangan
        shadowBlur={10}
        // radius
        // atas kiri, atas kanan, bawah kanan, bawah kiri
        cornerRadius={[10, 10, 10, 10]}
        // drag
        draggable={true}
        // onMouseDown={true}
        
        
      />
      

      <Circle 
        x={200} 
        y={87} 
        // jari jari
        radius={45} 
        fill="red"
        stroke="white"
        shadowBlur={10} 
        draggable={true}
      />

      <Ellipse
        x={370} 
        y={87}
        radiusX={80}    
        radiusY={40}
        fill="red"
        stroke="white"
        shadowBlur={10} 
        draggable={true}
      />

      {/* segitiga (masih belum jadi)
      <Shape
       x={800} 
       y={140}
       point={[100,100,200,100,150,50]}
       stroke="white"
       shadowBlur={10} 
       fill="red"
       draggable= {true}
      /> */}

      <Wedge
        x={530} 
        y={140}
        // jari-jari
        radius={100}
        // sudut
        angle={60}
        stroke="white"
        shadowBlur={10} 
        fill="red"
        draggable= {true}
        rotation={-120}
      />
        
      <Star
        x={680} 
        y={90}
        // jumlah .. (aa lupa namanya)
        numPoints={6}
        innerRadius={30}
        outerRadius={70}
        stroke="white"
        shadowBlur={10} 
        fill="red"
        draggable= {true}
      />

      {/* 360 */}
      <Ring
        x={850} 
        y={90}
        innerRadius={30}
        outerRadius={60}
        stroke="white"
        shadowBlur={10} 
        fill="red"
        draggable= {true}
      />

      {/* 60 */}
      <Arc
        x={930} 
        y={90}
        innerRadius={30}
        outerRadius={60}
        angle={60}
        stroke="white"
        shadowBlur={10} 
        fill="red"
        draggable= {true}
      />

      {/* 90 */}
      <Arc
        x={1030} 
        y={90}
        innerRadius={30}
        outerRadius={60}
        angle={90}
        stroke="white"
        shadowBlur={10} 
        fill="red"
        draggable= {true}
      />

      {/* 180 */}
      <Arc
        x={1190} 
        y={90}
        innerRadius={30}
        outerRadius={60}
        angle={180}
        stroke="white"
        shadowBlur={10} 
        fill="red"
        draggable= {true}
      />

      {/* Hexagon -> belum bisa */}
    {/* ------------- SHAPES LINE ------------- */}
      {/* garis berbentuk w radius */}
      <Line
        x={30}
        y={230}
        // 2 kanan : flip, 
        points={[0, 0, 100, 0, 100, 100]}
        tension={0.5}
        closed
        stroke="white"
        shadowBlur={10} 
        // x : gradiet kiri atas(+), y : gradient kiri hampir full (+) | kalau (-) brati sebaliknya lebih tipis
        fillLinearGradientStartPoint={{ x: -50, y: -50 }}
        // x : gradient kiri luar, y : geradient kiri dalam
        fillLinearGradientEndPoint={{ x: 100, y: 100 }}
        fillLinearGradientColorStops={[0, 'yellow', 1, 'red']}
        draggable= {true}
      />

      {/* garis berbentuk */}
      <Line
        x={170}
        y={240}
        // 2 kanan : flip, 
        points={[0, 0, 100, 0, 100, 100]}
        closed
        stroke="white"
        shadowBlur={10} 
        // x : gradiet kiri atas(+), y : gradient kiri hampir full (+) | kalau (-) brati sebaliknya lebih tipis
        fillLinearGradientStartPoint={{ x: -50, y: -50 }}
        // x : gradient kiri luar, y : geradient kiri dalam
        fillLinearGradientEndPoint={{ x: 100, y: 100 }}
        fillLinearGradientColorStops={[0, 'yellow', 1, 'red']}
        draggable= {true}
      />

      {/* garis berbentuk zigzag w radius */}
      <Line
        x={300}
        y={180}
        points={[23, 20, 23, 160, 70, 93, 150, 109, 290, 139, 270, 93]}
        tension={0.3}
        closed
        stroke="white"
        shadowBlur={10} 
        // x : gradiet kiri atas(+), y : gradient kiri hampir full (+) | kalau (-) brati sebaliknya lebih tipis
        fillLinearGradientStartPoint={{ x: -50, y: 90 }}
        // x : gradient kiri luar, y : geradient kiri dalam
        fillLinearGradientEndPoint={{ x: -5, y: -60 }}
        fillLinearGradientColorStops={[1, 'yellow', 0, 'red']}
        draggable= {true}
      />

      {/* garis berbentuk zigzag */}
      <Line
        x={610}
        y={170}
        points={[23, 20, 23, 160, 70, 93, 150, 109, 290, 139, 270, 93]}
        closed
        stroke="white"
        shadowBlur={10} 
        // x : gradiet kiri atas(+), y : gradient kiri hampir full (+) | kalau (-) brati sebaliknya lebih tipis
        fillLinearGradientStartPoint={{ x: -50, y: 90 }}
        // x : gradient kiri luar, y : geradient kiri dalam
        fillLinearGradientEndPoint={{ x: -5, y: -60 }}
        fillLinearGradientColorStops={[1, 'yellow', 0, 'red']}
        draggable= {true}
      />

    {/* ------------- LINE ------------- */}
     {/* garis lurus */}
     <Line
        x={-25}
        y={370}
        points={[50, 50, 330, 50, 50]}
        stroke="red"
        strokeWidth={5}
        lineCap="round"
        lineJoin="round"
      />

      { /* garis zigzag */}
      <Line
        x={330}
        y={350}
        points={[5, 70, 140, 23, 250, 60, 300, 20]}
        stroke="red"
        strokeWidth={5}
        lineCap="round"
        lineJoin="round"
      />

      {/* garis putus-putus */}
      <Line
        x={600}
        y={360}
        points={[50, 50, 330, 50, 50]}
        stroke="orange"
        strokeWidth={5}
        dash={[33, 10]}
        lineJoin="round"
      />

      { /* garis zigzag putus-putus w/ dot */}
      <Line
        x={970}
        y={340}
        points={[5, 70, 140, 23, 250, 60, 300, 20]}
        stroke="orange"
        strokeWidth={5}
        dash={[29, 20, 0.001, 20]}
        lineCap="round"
        lineJoin="round"
      />

      { /* garis zigzag mleyot */}
      <Line
        x={20}
        y={470}
        points={[5, 70, 140, 23, 250, 60, 300, 20]}
        tension={1}
        stroke="red"
        strokeWidth={5}
        lineCap="round"
        lineJoin="round"
      />

      { /* garis zigzag mleyot */}
      <Line
        x={350}
        y={470}
        points={[5, 70, 140, 23, 250, 60, 300, 20]}
        tension={0.5}
        dash={[33,10]}
        stroke="orange"
        strokeWidth={5}
        lineCap="round"
        lineJoin="round"
      />

      { /* garis zigzag mleyot w dot */}
      <Line
        x={680}
        y={470}
        points={[5, 70, 140, 23, 250, 60, 300, 20]}
        tension={0.7}
        dash={[29, 20, 0.001, 20]}
        stroke="orange"
        strokeWidth={5}
        lineCap="round"
        lineJoin="round"
      />

      { /* panah */}
      <Arrow
        x={960}
        y={470}
        points={[50, 50, 330, 50]}
        pointerLength={20}
        pointerWidth={20}
        fill="black"
        stroke="black"
        strokeWidth={4}
      />

      {/* ------------- TEXT ------------- */}
      <Text
        x={20}
        y={610}
        text="Hallo, ini coba text conva"
        fontSize="30"
        fontFamily="Calibri"
        fill="green"
      />

      {/* <rect
        x={180}
        y={610}
        stroke= "black"
        strokeWidth={5}
        fill="#ddd"
        width={300}
        height={Text.y()}
        shadowColor="black"
        shadowBlur={10}
        shadowOffsetX={10}
        shadowOffsetY={10}
        shadowOpacity={0.2}
        cornerRadius={10}
      /> */}
    </Layer>
  </Stage>
  );
}

export default App;
