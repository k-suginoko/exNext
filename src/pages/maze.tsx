import React, { FC, useEffect, useRef, useState } from 'react'
import { useCallback } from 'react'
// styles
import '../styles/maze.scss'
// image

const MAP = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 1, 1, 1, 1, 0],
  [0, 1, 0, 1, 1, 1, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]


const Maze: FC = () => {
  const canvasRef = useRef(null)
  // const context = useRef(null)
  const [ context, setContext ] = useState(null)
  let MAP_IMAGE = null  
  let NICO_IMAGE = null
  const [ nico, setNico ] = useState<any>(null)
  const [ mapData, setMapData ] = useState<any>(null)
  const [ mapArray, setMapArray ] = useState(MAP)

  const createRandomMap = (w, h) => {

  }

  // 主人公が動かせるかどうか
  // const moveCheck = (key, nico) => {
  //   let x = nico.x/10
  //   let y = nico.y/10
  //   console.log('map', MAP)
  //   switch (key) {
  //     case 'left':
  //       x--
  //       console.log('left push', MAP[y][x], x)
  //       if (MAP[y][x] === 0) {
  //         nico.move = 10
  //       } 
  //       break
  //     case 'up':
  //       if (y > 0) {
  //         y--
  //         if (MAP[y][x] === 0) {
  //           nico.move = 10
  //         } 
  //       }
  //       break
  //     case 'down':
  //       console.log('down push1', MAP[y][x], y)
  //       if (y < 9) {
  //         y++
  //         console.log('down push2', MAP[y][x], y)
  //         if (MAP[y][x] === 0) {
  //           nico.move = 10
  //         } 
  //       }
  //       break
  //     case 'right':
  //       x++
  //       if (MAP[y][x] === 0) {
  //         nico.move = 10
  //       } 
  //       break
  //   }
  // }


  const handleClick = useCallback((type) => {
    const n = Object.assign({}, nico)
    
    // 移動チェック
    if (n.move === 0) {
      let x = n.x/10
      let y = n.y/10

      switch (type) {
        case 'left':
          x--
          if (mapArray[y][x] === 1) {
            n.move = 10
          } 
          break
        case 'up':
          if (y > 0) {
            y--
            if (MAP[y][x] === 1) {
              n.move = 10
            } 
          }
          break
        case 'down':
          if (y < 9) {
            y++
            if (mapArray[y][x] === 1) {
              n.move = 10
            } 
          }
          break
        case 'right':
          x++
          if (mapArray[y][x] === 1) {
            n.move = 10
          } 
          break
      }
    }

    // n.move = 10

    if (n.move > 0) {
      n.move -= 10;
      switch (type) {
        case 'left':
          n.x -= 10
          break
        case 'up':
          n.y -= 10
          break
        case 'down':
          n.y += 10
          break
        case 'right':
          n.x += 10
          break
      }
      console.log(n)
      setNico(n)
      context.clearRect(0, 0, 100, 100);
      setMapData(null)
      updateMap()
      // context.drawImage( n.img, n.x, n.y );
    }
  }, [ nico, mapData ])

  const getContext = (): CanvasRenderingContext2D => {
    const canvas = canvasRef.current
    return canvas.getContext('2d');
  } 

  // canvasを生成
  const initCanvas = () => {
    canvasRef.current.width = 100
    canvasRef.current.height = 100
    const c = getContext()
    setContext(c)
  }

  const viewMap = () => {
    // MAPの生成
    updateMap()
  }

  const updateMap = () => {
    MAP_IMAGE = new Image()
    MAP_IMAGE.src = process.env.NODE_ENV === "production" ? '/exNext/map.png' : '/map.png'

    context.fillStyle = "rgb( 0, 0, 0 )"
    context.fillRect(0, 0, 300, 300);
    // 迷路生成
    MAP_IMAGE.onload = () => {
      for (let y = 0; y < mapArray.length; y++) {
        for (let x = 0; x < mapArray[y].length; x++) {
          if (mapArray[y][x] === 1) {
            context.drawImage(MAP_IMAGE, 0, 0, 10, 10, 10*x, 10*y, 10, 10)
          }
          if (mapArray[y][x] === 0) {
            context.drawImage(MAP_IMAGE, 10, 0, 10, 10, 10*x, 10*y, 10, 10)
          }

          if (x == mapArray[y].length - 1 && y == mapArray.length - 1) {
            setMapData(MAP_IMAGE)
          }
        }
      }
    }
  }

  const createUser = () => {
    // 迷路ユーザー生成
    NICO_IMAGE = new Object()
    NICO_IMAGE.img = new Image()
    NICO_IMAGE.img.src = process.env.NODE_ENV === "production" ? '/exNext/niko.png' : '/niko.png'
    NICO_IMAGE.x = 0
    NICO_IMAGE.y = 10
    NICO_IMAGE.move = 0

    NICO_IMAGE.img.onload = () => {
      // 主人公出力
      setNico(NICO_IMAGE)
      context.drawImage( NICO_IMAGE.img, NICO_IMAGE.x, NICO_IMAGE.y );
    }
  }

  useEffect(() => {
    initCanvas()
  }, [])

  useEffect(() => {
    if (context != null && nico == null) {
      viewMap()
    }
  }, [context])

  useEffect(() => {
    if (mapData && nico == null) {
      // map生成が遅いので、mapが出来てから
      createUser()
    }

    if (mapData && nico != null) {
      console.log('update', mapData, nico)
      context.drawImage( nico.img, nico.x, nico.y );
    }
  }, [ mapData, nico ])

  return (
    <div className="maze">
      <canvas className="maze__canvas" ref={ canvasRef } />

      <div className="maze__btns">
        <div onClick={ () => handleClick('right') }>→</div>
        <div onClick={ () => handleClick('up') }>↑</div>
        <div onClick={ () => handleClick('left') }>←</div>
        <div onClick={ () => handleClick('down') }>↓</div>
      </div>

      <div className="maze__answer">
        答えを見る(まだ)
      </div>
      <div className="maze__random">
        ランダムで迷路を作る(まだ)
      </div>
    </div>
  )
}

export default Maze

class Controller {
  constructor () {
    
  }

  up () {

  }

  down () {

  }

  left () {

  }

  right () {

  }
}
