/**
 * 課題：迷路を作る
 * 最初は配列固定で迷路を作る（周りは壁）
 * Canvasで生成して、キャラを動かせるようにする
 * 壁判定までできるように
 * ランダムでマップを生成する(棒倒し法)
 * スタートとゴールを決める(固定でもいいと思う)
 * 幅優先探索という方法で回答を導く
 */
import React, { FC, useEffect, useRef, useState } from 'react'
import { useCallback } from 'react'
// styles
import '../styles/maze.scss'
// image

// 壁考えて11ｘ11マス(初期値適当)
const MAP = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0],
  [0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

// スタートとゴールを決める(とりあえず固定で)
let START = { x: 0, y: 0 }
START.x = 10 // 文字出すためのやつ
START.y = 20 // 文字出すためのやつ
let GOAL = { x: 0, y: 0 }
GOAL.x = 90
GOAL.y = 100

// マスの縦横個数(11x11だけど実際の迷路範囲は10x10)
const MATH = 10
// ゴールの配列
const STAGE_GOAL = 2
// 壁
const STAGE_WALL = 0


const Maze: FC = () => {
  const canvasRef = useRef(null)
  // const context = useRef(null)
  const [ context, setContext ] = useState(null)
  let MAP_IMAGE = null
  let NICO_IMAGE = null
  const [ nico, setNico ] = useState<any>(null)
  const [ mapData, setMapData ] = useState<any>(null)
  const [ mapArray, setMapArray ] = useState(MAP)

  // ランダムにマップを生成
  const shuffle = (o) => {
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }

  const createRandomMap = (size) => {
    showRandomMap(size)
  }

  const showRandomMap = (size) => {
    _createStickMap(size)
  }

  const _createStickMap = (size) => {
    // 壁を考慮して壁分のsizeを足す
    const mas = (size % 2 === 0 ? size + 1 : size)
    const box = []

    // 壁と通路を交互に作る
    for (let i = 0; i < mas; i++) {
      let row = []
      box.push(row)

      for (let j = 0; j < mas; j++) {
        // 最初の行と最後の行は壁
        if (i === 0 || (i + 1) === mas) {
          row.push(0)
        // 最初の列と最後の列も壁
        } else if (j === 0 || (j + 1) === mas) {
          row.push(0);
        // 奇数行は通路
        } else if (i % 2 === 1) {
          row.push(1)
        // 偶数行は壁と通路交互に配置
        } else {
          row.push(j % 2)
        }
      }
    }

    // 棒倒しで迷路を作る
    for (let r = 0; r < box.length; r++) {
      // 最初と最後の行は対象外
      if (r === 0 || (r + 1) === box.length) {
        continue
      }
      // 壁がある行が対象
      if (r % 2 === 1) {
        continue
      }
      // 行を取り出す
      let row = box[r]

      let direction = ['top', 'bottom', 'left', 'right']
      if (r >= 4) {
        direction = direction.slice(1)
      }

      for (let i = 0; i < row.length; i++) {
        // 端対象外
        if (i === 0 || (i + 1) === row.length) {
          continue
        }
        // 壁のセルのみ対象に処理
        if (i % 2 === 0) {
          // 棒を倒す方向をランダムに
          direction = shuffle(direction)

          for (let j = 0; j < direction.length; j++) {
            if (direction[j] === "top") {
              if (box[r-1][i] === 1) {
                  box[r-1][i] = 0;
                  break;
              }
            }
            if (direction[j] === "left") {
                if (box[r][i-1] === 1) {
                    box[r][i-1] = 0;
                    break;
                }
            }
            if (direction[j] === "right") {
                if (box[r][i+1] === 1) {
                    box[r][i+1] = 0;
                    break;
                }
            }
            if (direction[j] === "bottom") {
                if (box[r+1][i] === 1) {
                    box[r+1][i] = 0;
                    break;
                }
            }
          }
        }
      }
    }

    // ゴールを決める
    box[box.length-2][box.length-2] = STAGE_GOAL

    setMapArray(box)
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

  // 答えを導く
  const answer = () => {
    let search = []
    for (let y = 0; y < MATH; y++) {
      search[y] = []
      for (let x = 0; x < MATH; x++) {
        search[y][x] = false
      }
    }

    let ptX = 1 // START.x
    let ptY = 1 // START.y
    const que = []
    que.push({ x: ptX, y: ptY, rt: [] })
    context.strokeStyle = 'gray'
    context.lineWidth = 1
    context.beginPath()

    // 答えの検索、描画
    while (que.length > 0) {
      let pt = que.shift()
      ptX = pt.x
      ptY = pt.y
      let route = pt.rt

      // 取り出した位置がゴールかどうか
      if (mapArray[ptY][ptX] == STAGE_GOAL) {
        console.log('ごーる')
        route.push({ x: ptX, y: ptY })
        context.closePath()
        context.beginPath()
        context.strokeStyle = 'red'
        context.lineWidth = 4
        context.moveTo(route[0].x*MATH+MATH/2, route[0].y*MATH+MATH/2)

        for (let i = 0; i < route.length; i++) {
          context.lineTo(route[i].x*MATH+MATH/2, route[i].y*MATH+MATH/2)
          context.stroke()
        }

        context.closePath()
        break
      }

      //次の探索先を現在地から左右上下の順で調べる(4????)
      var nextX,nextY;
      for(var dir=0; dir<4; dir++){
        switch(dir){
          case 0: nextX=pt.x-1; nextY=pt.y; break;
          case 1: nextX=pt.x+1; nextY=pt.y; break;
          case 2: nextX=pt.x; nextY=pt.y-1; break;
          case 3: nextX=pt.x; nextY=pt.y+1; break;
        }
        
        //次の探索先が壁ではなく、未訪問の時
        if (mapArray[nextY][nextX]!=STAGE_WALL && !search[nextY][nextX]) {
          search[nextY][nextX] = true;	//次の探索先を訪問済みにする
          
          //新しい配列にルートをコピー
          var newRoute = [];
          for (var i=0; i<route.length; i++) {
            newRoute.push({x:route[i].x, y:route[i].y});
          }

          //現在地をルートに追加
          newRoute.push({x:pt.x, y:pt.y});
          que.push({x:nextX, y:nextY, rt:newRoute});

          context.moveTo(pt.x*MATH+MATH/2, pt.y*MATH+MATH/2);
          context.lineTo(nextX*MATH+MATH/2, nextY*MATH+MATH/2);	//線描画
          context.stroke();
        }
      }
    }
  }

  const handleClick = useCallback((type) => {
    const n = Object.assign({}, nico)
    
    // 移動チェック
    if (n.move === 0) {
      let x = n.x/MATH
      let y = n.y/MATH

      switch (type) {
        case 'left':
          x--
          if (mapArray[y][x] === 1) {
            n.move = MATH
          }
          break
        case 'up':
          if (y > 0) {
            y--
            if (MAP[y][x] === 1) {
              n.move = MATH
            } 
          }
          break
        case 'down':
          if (y < MATH - 1) {
            y++
            if (mapArray[y][x] === 1) {
              n.move = MATH
            } 
          }
          break
        case 'right':
          x++
          if (mapArray[y][x] === 1) {
            n.move = MATH
          } 
          break
      }
    }

    // n.move = 10

    if (n.move > 0) {
      n.move -= MATH;
      switch (type) {
        case 'left':
          n.x -= MATH
          break
        case 'up':
          n.y -= MATH
          break
        case 'down':
          n.y += MATH
          break
        case 'right':
          n.x += MATH
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
    canvasRef.current.width = 110
    canvasRef.current.height = 110
    const c = getContext()
    setContext(c)
  }

  const viewMap = () => {
    // MAPの生成
    updateMap()
    // createRandomMap(10)
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
            context.drawImage(MAP_IMAGE, 0, 0, MATH, MATH, MATH*x, MATH*y, MATH, MATH)
          }
          if (mapArray[y][x] === 0) {
            context.drawImage(MAP_IMAGE, MATH, 0, MATH, MATH, MATH*x, MATH*y, MATH, MATH)
          }
          // mapArray[y][x] === 2

          // マップが生成できたであろうタイミングでスタートとゴールを決めてマップ情報を保存
          if (x == mapArray[y].length - 1 && y == mapArray.length - 1) {
            context.fillStyle = "blue";
            context.fillText('S', START.x, START.y)
            context.fillText('G', GOAL.x, GOAL.y)
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
    NICO_IMAGE.x = START.x
    NICO_IMAGE.y = START.x
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
      // console.log('update', mapData, nico)
      context.drawImage( nico.img, nico.x, nico.y );
    }
  }, [ mapData, nico ])

  // 迷路をランダム生成したとき
  useEffect(() => {
    if (context != null && mapArray) {
      updateMap()
      // 位置情報リセット
      setNico(null)
    }
  }, [ mapArray ])


  return (
    <div className="maze">
      <canvas className="maze__canvas" ref={ canvasRef } />

      <div className="maze__btns">
        <div onClick={ () => handleClick('right') }>→</div>
        <div onClick={ () => handleClick('up') }>↑</div>
        <div onClick={ () => handleClick('left') }>←</div>
        <div onClick={ () => handleClick('down') }>↓</div>
      </div>

      <div className="maze__random" onClick={ () => createRandomMap(10) }>
        ランダムで迷路を作る
      </div>

      <div className="maze__answer" onClick={ () => answer() }>
        答えを見る
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
