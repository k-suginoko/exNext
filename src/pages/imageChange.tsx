import React, { FC, memo, useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
// import Image from 'next/image'
// types
import { RootState } from 'types'
// actions
import { setCount } from 'modules/textModules'
// components
import Button from '../component/atoms/Button/';
// styles
import '../styles/about.scss'

const CANVAS_WIDTH = 919
const CANVAS_HEIGHT = 518

const ImageChange: FC = memo(() => {
  const [ value, setValue ] = useState<object>({ text: '' })
  const [ image, setImage ] = useState<any>(null)
  const createRef = React.useRef(null)
  const svgRef = useRef<SVGElement>(null);
  const mRef = useRef<SVGElement>(null);

  const changeInput = (val: string, key: string) => {
    setValue({ [key]: val })
  }


  const createImage = () => {
    if (createRef == null && mRef == null) return
    console.log(mRef)
    const svgData = new XMLSerializer().serializeToString(mRef.current)

    createRef.current.width = CANVAS_WIDTH
    createRef.current.height = CANVAS_HEIGHT
    const ctx = createRef.current.getContext('2d')
    const imageEl = new Image();

    imageEl.onload = () => {
      ctx.drawImage(imageEl, 0, 0)
      const a = document.createElement('a')
      a.href = createRef.current.toDataURL('image/png')
      a.setAttribute('download', 'image/png')
      a.dispatchEvent(new MouseEvent('click'))
    }

    imageEl.src = `data:image/svg+xml;charset=utf-8;base64,${ btoa(unescape(encodeURIComponent(svgData))) }`
  }

  return (
    <div className="imageChange">
      <p>Github pagesはサーバー言語使えない？ぽいので、NextJS使ってSVGをcanvas使ってPNGに変換する練習</p>
      <input type="test" value={ value?.text || '' } onChange={ (e) => changeInput(e.target.value, 'text') } />
      <p>プレビュー</p>
      <SvgBase textRef={ svgRef } text={ value?.text } mainRef={ mRef } />
      <Button onClick={ createImage }>画像作る</Button>

      <canvas ref={ createRef } />
    </div>
  )
})

export default ImageChange



type SvgProps = {
  textRef: any,
  mainRef: any,
  text: string,
}

const SvgBase: React.FC<SvgProps> = ({
  textRef,
  text,
  mainRef
}) => {
  return (
      <svg
        id="svg8"
        version="1.1"
        viewBox="0 0 243.41666 137.05417"
        height="518"
        width="920"
        ref={ mainRef }
      >
        <defs
          id="defs2" />
        <metadata
          id="metadata5">
        </metadata>
        <g
          id="layer1"
        >
          <image
            id="image843"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAJYCAMAAADGwDwXAAAAA3NCSVQICAjb4U/gAAAA3lBMVEUX
      wPlY0fupnqjF9P5a0/pYdbfm+/+99//+0j7p56pBzPn4/v/e+f/y3np12vtKzvkhw/mW4/zW9/64
      0Ohifrz511Zr1vowve7jTTyE3fyapLTh78/f8dtS0PnO9v7t45Lv/f////85yfngbWFr1v9ftNfl
      +v5j1fpz2fr03G4pxfmM4PvM6PXa9vKiuduAl8p83Ps6yvn32WLNh4W26/3k7MPkWEn81Epj1v9z
      3vfd8+ad5fx3j8Xr5Z7w4Ibm6raR4fve9/cwx/m/2e3S8Pqo5/1X0fpa1v9th8B42vrzPVa+AAAA
      CXBIWXMAAAsSAAALEgHS3X78AAAAFnRFWHRDcmVhdGlvbiBUaW1lADA1LzIwLzE1X1ReaQAAABh0
      RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzT7MfTgAAHChJREFUeNrt3XtzG9d5wGGqoncoYW3K
      25ipInO9UKagTMcJ7dbVjFrZGSX1VN//CxXgBQRJXPYKnHP2+f2TGduxQQgP33POLoCj55KS78hT
      IIEuCXRJoEsCXRLokkCXBLok0CXQJYEuCXRJoEsCXRLokkCXBLoEuiTQJYEuCXRJoEsCXRLokkCX
      QJcEuiTQJYEuCXRJoEsCXRLokkCXQJcEuiTQJYEuCXRJoEsCXRLoEuiSQJcEuiTQJYEuCXRJoEsC
      XQJdEuiSQJcEuiTQJYEuCXRJoEsCXQJdEuiSQJcEuiTQJYEuCXRJoEugSwJdEuiSQJcEuiTQJYEu
      CXQJdEmgSwJdEuiSQJcEuqQYoJdlnuel51lKFXqRV5PpTRXqUorQZ9X0QYWnWkoMej6ZPslMl5KC
      XqxhPp1OPNdSQtCL6fpyT7aUDvTlAdx1K9I92VI60PPF9bT7HXlRGelSgnv0x2V3I96zLaULfbmY
      d/AuJQw9f7x2L/Obzfskc3ldSgX68wdr96JavfzmnjkpFejV8ty9qJ5cdjPUpTSgz25Nz9beSmOm
      S0lA33QPjQvsUkLQn2+H7rqblAT0p0v2an5TTV7ZpksJQX90BDcpHv4Nb3iRUoCer2f+/O62OXfH
      SglAf775XWyV8zgpFejLtfts/f7dSJcSgF5uPl8vjHQpEejXHzuz4XbXysG7lAj0bU1cS5fSh15Y
      u0vpQ79evPujkBKHPpdu6S4lD/25d7BJI4AuCXRJoEsCXQLdUyCBLgl0SaBLAl0S6JJAlwS6JNAl
      0CWBLgl0SaBLAl0S6JJAlwS6BLok0CWBLgl0SaBLAl0S6JJAl0CXBLok0CUlDb0sPXtS2tCLajqv
      mhWeQSlZ6Nl0WTUz2aUkoVfTB01mnkcpOeiz6ZMqY11KC3o5XVfluZRSgl5N12eoS+lAL+735lWe
      51m1hO/ZlKKEXlTVZFJVebluoN//xXLO3UiX4oSeT1YO1peKN63U3UAjxQj90V68urk55u7I3SU1
      KQXoa87c8vlfntiQS+lAX3+2npeupknpQM+n23OTu5QA9OUh3LzJGuieOSl+6De2J7cH6WXlPjgp
      Peizx5ofU889c1L00NdM7dzKXUoLerV2dV5ZuUsJQS83vEdl5sxdSgd6tslyeXv+PvG8SdFDn2y+
      w3XmDalSGtDLrZvwWeXTZKQ0JrrDNqlz849rCOY9nWtP3Y1sqWPF5P7zWYpAoUvq6PzRraQ56FLq
      zlc+0AF0KZnWvRFs+d4R0KUkqoJ7dzfoUu+tjvFq0cHvHQdd6rts3b68LOaX20CXktuhB/RubtCl
      nisCfJMn6FIn1Tcb8NWvOckCfJMn6FL7ygfX0bLiwcr9OehSSov0Fevl8sw9A11K0/nieloW4gcr
      gi61bft3H5SgSwk02Q79OehS/N19MHI2f9d5/vSm1wp0KZmBvvScPxrwM9Cl+MueHK0Xk3C/nhB0
      qVXrLqGtTvXnoEtpDPSn+/DlXj0DXUpkoK+5gnb3NYUHelhlWax0/9mUoEstyjffElNUB/owmQfG
      V7SDLrWsCu0bi4qtlaBLLVfu4dz6Vha7Al1qISukC+VFjUCXWhTO1xkVBejSYDM9JuagSzH/tilA
      l1KvKECXOAddGs2yHXRpHM5Bl1JftoMujcM56NIInIMupb4/B10ah3PQpfQX7qBLoc3rIZyDLoUz
      qrObb2Yte3cOuhQI8km9z4QHXYq17NG3P2Q9OwddOviu/On3OW38+ocCdCnKqiZf0Qi6FOXefMN3
      sma9OgddOmh3zidVled5VW0f6aBLMbb4Iog58fsLasuvb3sw0vOsWjQDXYqy8vFF8+LxSC9Xj+Qz
      0KUkulu95w8n/G0V6FISM/6O9POn19dbSwddCqw73GW29jy+Al1KoNl0ezPQpQRag3uSZVl1N+pz
      0KV01u73Z+3XR/NFcbuWn4Auxd+jvfnt1zkuvN6ewWegS9FXPHCeP7+HXtzeMdsGernyEVRl6VmW
      Alq733878w3RvN3J+1H1pFle4C4dsNmTcb6EXsxancetgX57Uy3s0oFH+uqHSi0X3lWbkb4J+qKc
      demAu/T8wV9aNmmxS98GfV7hKZcOUDkftI/sP5TeL/Qn/zVJhxny9+UDQEddCgz6/ERu1j901KXA
      oBfFENDt1VvvtIr89rNB5mVZ7nxTQUOvMq/Qxn8w98Qfro/81lSw0K3fmyrf+lyyrlChG+r1y2v8
      3vRsKkzoduo19+Wzes/mDHWFCd3yvT/mqCtc6KT3sGj3fCp46FXmCd/2Z1E1znZIIUInvb9xbqir
      wZ5wz9BJ31jVMjt1DYq8HXTSe1u2W75r6CV7B+ik97Zst3zX4LO8PXSvy56de0Y14DBvD93rsmfn
      nlENyrwtdLvKnp2TriGZt4bupLhn56RrkL15V+gO5FZ+91a9ZJWkgcZ5B+gG0H1VT1klaSjn7aF7
      WfbtvKo8lxpi2d4NusV7jxt0qyQN6rwDdHvKPjfonlINtmzvCN1Ks9+Fu6dUgznvBN1Ks9eFu6dU
      gznvBN38WXxxTr854rQ/Dw+6+TPrG/rMi53z4KCPfqT3PtCNdAv3EKGPfaTP+odupHMeHvSxj/Sq
      MtIVg/Ou0Nde+C1XthplAK/bwR5PPgR0Bx/JbOyWxQ+9enyYkK958c/y4kDcB3481SAREr/wddR2
      eS+Chr7y4IutO9bZ3rEP/niKYaC7PS5q5Nu9lQdy3hn63UJzwzeHHuz7xvbxePJhoFu7p6p8q/XA
      oV8vNIssrHG1p8dTVdbuaqZ8o/UidOhlGdq3EO3r8RRDQbd2T5v5WurBQ88CW5vme3s8+VDQrd2j
      qw29vTrvDj2sl3K+x8eTVdbu6qC0TB/6QMvTwb4sZXGZbuk6y/LrU7wKdD3vdIN6uTfnB4NeZb2f
      wJfZII+n2HCAPxvuuXFzXPrj/OH6PWHova/fB/kOhSJPZrmjwMb5ylAvk4be71DPBng8eRq/AhXo
      OF8O9SJt6D2OrgE+Wr2cHexp8Q62ETlfSE8eel+zK+/98RyQuQ/YHcuyfZ8dGHo/0vv/xOX8sM8K
      RKMZ52OB3sf0yvp+PMWhnxSKOE8NenfpWd+PJ69AV1rOA4DeVXpWpRdHnKcHvZv0FJ2DznmK0LtI
      T9I56JwnCb392XtegS7OY4Ee3DtFQVca188Dg97uHrkiUedumDHQU4Xe6h1biTp3Cyzn6UJvMcWy
      VKF7UwvnyUJv/upOdYPubao26ClDb7p4L5N1XmWkG+jpQm+4eM+qlMt9ygzniUJvtmItqsSboW7h
      nib0RpePq/RD3UBPE3qD87i8GkOO3zlPEXploDuAB30E0HMD3VDnPH3olYHezz2DAj1o6LmBbvnO
      efrQKwPd8h30EUCvNb2KinS5hh4z9FojPatIl4EeNfQ6R09VRbpAjxp6jVd0XpEuK/e4oddYu2dj
      hO7s3UBPC/rutXs1zlxPBz0l6DsnVzFS6D4y0so9Jeg7PzBtNlbotukGekLQdw6uarTZpoOeEPQS
      dIt30NOHXtiiW7zboqcPPXcV3cm7gZ4+9JmzuPYnlQI9FuiVLbqRDjrolZEu0BOAXs6PPvJ8eaNr
      luWrn3JeGekCPQXoG87oCtAdvIOePPRb68XIobuWDnry0BfW87FDd3ucy+gjgC5rdwMddGt3gQ66
      tbtAl7W7QJe1O+igC/TNh9bzFq+2xf+CDrpqFZOVTdelyrh+J7m8JqdxbS8+lxH9TgJdTuPaL3bL
      SH4nWbpr/80SUR6K9WIMgR5fWWq3i1IOuiI7dm+3CLZiB10RQW8vB3PQFQn0bnIwB10xQO/6Wiwx
      B12hQ++DjiM40BU29H5ejqVxDrrChd4fHeMcdIUKvc9XpHEOusK8Yabfl2RpnIOuKrxbYHt/UXIO
      ukJ7U8sQS2HOQVdYb1MdZstrew66yuSdDyN9zM5Bd+geph3OQQc93XO44aSP2znozuJCPdtyDge6
      s7j0nfcsvQBdVu5B2ik5B93KPXnnfY70AnRyrNyDPdziHHQr9+QHem/SS85Bt3IPeUga6KCPtHI8
      C/e+pFMOenTNRjXQe5Fu4Q66gR78kDTQQTfQRwC94Bx0Az19551vm2EcdEfuMex6OQfdNfTkB3rH
      ke4kDvT4KsY40LuNdMJBt3CPBM/mkV7Ou/4n5hnooFu4x/2OzwaCSwMddCfukd5Q2nBMl6CDboMe
      4w0ojf/rJeeg26FHd0dpm98xJeigkx7XOXbpYA100tOHXmAOOunJr9wFugO5MQx0ge4SG+gC3U0z
      Vu4C3TbdQAddtumgg64RLt6JAV0jWLwTA7rSP3l3Fge69tTMQBfoRjroAt1IBx10Gemgg67RH7wD
      A7pGcC0dGNC1vwrQBbq1O+gC3doddNBl7Q466Br32h0Y0DWCtTswoAt0ga5eK0EX6E7jQBfoTuNA
      B10xNANdoKdfBrpAd+wOukBP4th98ac3m13/IZagC/Rx7Nn3ox0Y0HV47KQL9FGc0RWgC/RRXGEv
      QRfoY1jCl6An0Y+/gK7D3E7jq1r21YcXP5+8AF07FvBGeuzKT05+tnTX7gvtoMfaL1+eXPcGdB1q
      qGM49Mb84zc3zE++dBinWtfaStKjW7N/fH9y1wfQdbjlO4wDTvPvTu771eU11a0APaZF+/sV5/0O
      dNBt1EkPo98eMO95oINOOugh9O33Jw/7ALoOKt09M0Os2h8x73ugg066gX74cf7zY+cn317/jRno
      OsSJHJND9GScn5x8f+N8Arr2fpXNmn2YZfuXT52f3LydZTbNQFf9MA942f7NGuff3Py9bDoFXfXL
      MI/kotptH2/+ZjWdVqBrb9t0zAdzfrK2H5fQpzno2tM2nceh+nW987u3s0zm0Cegay+Ld+N8385P
      fluBPp2Brj0s3nHcu/P3d//A9DrQNfjJu3E+XN9tcH5/V9wN9Ap01S83zqM4h1teRF9cRr8pB12D
      jnQah+uXjc6XK/c76BXoGnKk0zjgfTLvT3au3LNb6H2cx4FupI9ve54/bc+P4MefT3au3K8vo183
      AV1DHbyXYyF+EO5fbnZ+d7fMCvQebnkH3Ugfi/O8XofdoN+9cW15Gb2nS2ygj6hyvM7zZg29cH+/
      BfqLddAr0DXEcdyYlQ9vfdvC/fYjJ+4vo/dziQ10a/fEnedtG+wRvdnm/H2xFvoEdPW+dsd8UOrf
      bIN+//0ss1XoXS+xgW7tnrDzvGtDPKgX25yvbNEfQp+Crn7X7pgPSn3rSdzqNytmD6FnoKtP6CXm
      g1L/uNX5yf0/WE17HOmg26QnOdDzPtvfDn31O9EfQ69AV80Kzg8t/bftA/27Yt1l9O6X2EAfVbNx
      LNzz/uvtsX1/UvMs7in0Cejqa5PO+bDSP2x3vnIWV0yfNANd/UDHfGDq353UPYtbA30KukAf2Hk/
      0rcfxd19c8Oay+gdz+NAd+zO+f6kf7tjoH+/HXr78zjQQU/oJC4fumHvilt+Rcua+2U6jnTQQU9n
      oOd56NJ3nLmvHrpX66C3Po8D3YX0ZAZ6ngcv/aT+oft66BPQ1RU650NLf7ML+rdbLqN3uuUd9NE1
      m83yvCyTg57n4UvftUVfvbr2P1+s7Q//BF3NxBcF5/uV/msD6F9s6K+gq3l5mQb0PI9B+vf1r65t
      hP7FX0BXK+tF/EdxeR6F9JP60P+xEfrfQFcH65wPLv3HXdC/rAP9i3+ArvbWc86Hlr7z0H3X/TLt
      b3kHXXdlOejhQK+2QM9AV8clPOcDSn/RE/Qp6Bof9TyPRfrHk5P2HzvR7ZZ30BX5Aj7Po5H+scEd
      sFuhN38XG+h63Az0AKB/sbW/ga5xrd/zPB7pDaD/czv0L/4VdI1pqOd5RNIbQP/HDuj/90/QNaKh
      PlboTW95B10xS8/zmKQ3gP7XXdD/8BfQ1cvxO+d9S28Afetl9BaX2EDXxkDvGfqLPqE3+1Qp0BXv
      8j3P45L+pj70yW7oE9A1Dunjht7olnfQFa30PI9M+of60Kd1Al1jkB4d9KJn6BXoSl96nkcn/Zu6
      0Ge1oDe45R10xSo9Qujf9wx9ArpSl57n8Unf9V2qvzS4utbsEhvoilR6jNBrf/VaXehT0NVfnPck
      /U3v0DPQlbT0KKEXdaFPpj2PdNBVo4zzfqT/XPPjnutDr0BXwtv0SKH/WvMLHKb1y0FXutIjhf5b
      /9Az0JXsNj3P45S+4ybYb5pdRncYp96bgd7HSP+m1rep1oTe4A8FdMW4eI8W+o5N+ocGV9ca/YmA
      rhgX79FC/63WPbC7oU8aXggBXREu3vM8Vuk/1roHtupzmIOuWBfv8ULfcSX9Y53L6G3uagBdtctA
      7w59++3uv+6EPmm3sAJdEY70iKF/qHMhvcc1O+iK9jwuz1Ndu7/fBn3SYUkFuuIb6VFDf7H7Qvqs
      40Vz0JXESI8a+ofd19dmfXwjOuiKfaRHDb34+f2XH9+8+fH6/elvXnz38OOlXqy7ujbpfmUTdMV3
      8B439B8f/4Vfvru/Mfa7p9B7+e0KuuIb6XFDX9cvv64eu1cdL5qDrhRGep6nJ7348PH98jRu0s8B
      HOiK+jguSejzJf31l61+ew+9z+UT6Ipu7Z4o9PlU//LmNK7rRXPQlcJITxb6fK/+/tdr6L3/PgVd
      oA8OvZpMJovnbjab7Vy/z3++AQ5CQFd0a/cIJ/qDC2Y36nejB12jHukxLt03vR9tX+hBF+j72KPX
      +crEa/RZluWgy9o9Tuj5tFl1N/Wga6Ay0NucumfT1vWwvgdd0a3dI728Vk37qOX6HnSBvqfr6P1I
      b/fOVdAV3SY92htmJgdzDrqaNwO95Z1xPUqf2KMr8bV7vNDzQzkHXaDv8V73WV/Qc9AFerhvaskO
      47w4qtGnl436dCQNWcMX5F6q/ar/ug/nZ0E8raQL9I39Z6DOXzX/oV95LWrAXgUIvf5r/lXR1fn/
      DvKstvmpvRYF+saHX4Xo/G2bn/qtF6MGLEDojR5+J+nFIAvmy3Y/9qUXo/p+KV6+vZ06b589e3Ya
      MfSjP/1b+/78x6B+d3pdqk/kD8/fLs7mHZ8H5LzhGvZfWjv/r38P63zTybuGexU+O7vpOJi53vT1
      /h9hOT/a01JGajJszs/OAqPeeN/853bQ/zTQiqn9T26XruHWlGdngVFv/HP98c8BOT/a648u1Z00
      FyvSz85jhB5Ur/a6mJHqHhEdr0I/O45uix7L8+w4Tnvop40vrvMH0M8uTmPboofVmFczCno9efao
      Uyt30JXevvEiKOlvU36qbdJ1uBff+VlI0iO/xPRp1AcUCno1eRaS9Mif67ejXs8ozHO4TWv3swsr
      d9CV2mLy6dr9cFfZYr85bOQLGh2sOndkPoV+sDtnjkCXBnrlHZ+Fsk3/BLo0yMJ9w0g/NtBBV2Iv
      vItARvpb0KXBBvq647iDjPRXoEsDvu7CGOkJXFxyeU3hDvRQRvor0EP6WV7d96lulyv/J/fzBriQ
      XIz0z6u9fv36ola/33dqnMV2C+wq459uOu2/23/zg18GdPbX02vop9cgb4l+ddPrRT/899N+eN22
      q5t/89nKr4LTUQz0sN/UskQ9FOh2vwGuHxL7HZyf3pq+97y5r59C//p1331e8l/YT3J/GtRZ3J3s
      UFzX6OWt/EvwN8O+vPko5/N517vsRgjXjPTXg3c9+ufuj4+PT49Af9mb7TmXl6cJtBgA5v3Rq7nt
      xYL8TvajGpn7e59r9zbTfv5emvnPsdiozv9gx7lJ/9Re9w3u07S7mfYjQT/HPf955yTWXRJ70LvX
      HUf6XqE/fvTzr5B5+fKny8tXIxrprxryvhyD7o2jfrHAv0zsI7JvFuXn58dnDfqqmbSn53F/36Pz
      d1t+kGvzbyP5Mx165X49vd++fXuq+0F/Pedj5j3fadUY3Ru6amjt6wNs0peb9Xo/0jX5sKf8ZXvn
      l9uBL8Y31emQ78i7PfTXB4Te+Idb7OY/fUprpG/yDXg78kFOhFeLxXkfvFuexa1dvAexcN/e/Lh+
      sZNP4Tju02Pg1ud97OXfhjHjF8fmp8323oNBf7J4D2zhvmvEBwK+20C/PmF7SWgi4hfr89P1F8UO
      CP2x9GAX7pu7OD+dn9sd9Dd4u136qSX6/hb1w4O/AX5xto/akDsI9CF++Pmp3cEGfLN3tpyePnt2
      cTH/ihwlAP7VHoF3gf7DAaC/G/A5OD5enNKHuXg/vb5FefmuYB1sSd/HK+RyfqIyzBZ8EOgPb5Db
      i/Ov9vBUzL3/tMf1/Ks6Q/zREQNycQ74xQgfeA/e++W1J9v0WA7iGhzY7eeS3KdaQ/zBV9MrkAFf
      1/vl4YV3gr4qPTHnexzvn2oMcc7j9L64UHagRXovt8A+lf73SA/iao7305cDcn9bk/jtd1UrAu/X
      q/SQhLd7U8tT6T+k7Hxo7p9qETfPo9i/X7/R5CzYXneU/kP6zofiPr+vrfYLg/OQe1bvl3Wc0G+l
      j8b58nuofrrs4ULq3X0v53V/ySjE5vejBy+822ncnfSv0zuHq3dU9/ay9Rh/eO9qjReK7Tnihxzp
      C+k/jNH53Y11p42+2HX+FpS196f/vuu/8ztWiB8U+vzOmfjvk+l83/zLT5c1xvi2O9SP7c6jaPHh
      yGfR9vl1sL2L5kk8P920c3/16W2Nt5ltfAGZ5oiHMNI77fEjO4arcTL+cClfz/hyrF/0PcyPb/+V
      F8fO8ka3UO/3OO7qbDjpV3E+m8e3F+HavF38fP6J1rcbgs44j20Aul80S4V455HefUmQwLJ97cb9
      6LCv0QtH9x1X6mcJ1nqX/rn7miCtcX7fQaGfuxhvpd7nSO9nn5/aOD849AvX49uN8YSJd3L6bqCz
      +88JPKNHATonfeMYP07feHumn3s704v7sD0w6BfusWt2/jkS4+2V9nl8n9Kq/bDQvdnVUr3fxXvP
      V+qSYn446DvfJONEbkxL9R6k939R/vXVu3SezkNB3/3ILNXPxl1fG+nPIz6COzh0b4Ub0f0v+5C+
      9V/07mrUw/yQ0Os8NGN87F31dzDeyHpyyg8GvdZnlY3pbthR78Y7r7prLrI/1/rXff6c5FN5FOxA
      H8lInxM/JrrT8r3J/P3qastov0pxlEcA/RxxfR7izOyruferFd/z3r1L+3k8CnblnvDa/fdxXhof
      Yqd+5fkJGHrNV/mFIa6tU/2z5yYF6Clt0p+5aNb3WL9652kJHPrZiKAT3lv3B2lXkDeG/uz8HPSB
      VumEKxjoN7vhi2f7BJ8y9PP7z9mSAoO+PP66OD7eA/gUoQOueKDfgx90xKd0GPfMJlzRQn8s/vwg
      0C9Cnt/zz2zjW6lAH4Z8rDfMnFufK3XoD8jPzXda2cezcj9fdGx6a3zQH6Gfz7jjppM+bOjzn+bZ
      dV4eAn3LqN/JPrS3qZ7f2L4wuQV6G/cL+OvkH3agn9/CJlugD2b/eLEo/vzuts3/bF+i7xbiF1gL
      9D235k3/t32+7fiG5/nmnj3qYpk/VykI6Gej+UBtaczQrxL/9koJ9J3SOZfSgL5NOudSKtA3S+dc
      Sgf6phM553BSUtDXfhSYPxQpMehPPuHT53pKKUI/u//QvyvDXEoXuiTQJYEuCXRJoEugSwJdEuiS
      Qun/Ad/8uWSyfxUeAAAAAElFTkSuQmCC
      "
            preserveAspectRatio="none"
            height="151.16591"
            width="251.94315"
            x="-5.127759"
            y="-6.8016195" />
          <text
            id="text849"
            y="105.22389"
            x="13.045551"
            style={{
              fontStyle: 'normal',
              fontVariant:'normal',
              fontWeight: 'bold',
              fontFamily: 'sans-serif',
              fill:'#000000',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 0.356859,
            }}
            xmlSpace="preserve"
            ref={ textRef }
            >{ text }</text>
        </g>
      </svg>
  )
}
