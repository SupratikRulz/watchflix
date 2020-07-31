import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`loader`}
          id="___loader"
          style={{
            alignItems: "center",
            backgroundColor: "#000000",
            color: '#ffffff',
            display: "flex",
            justifyContent: "center",
            flexDirection: 'column',
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: 100,
            width: '100vw',
            height: '100vh',
            position: 'absolute',
          }}
        >
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
          width="80%" height="auto" viewBox="0 0 558.000000 140.000000"
          preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,140.000000) scale(0.100000,-0.100000)"
          fill="#e50914" stroke="none">
          <path d="M100 1259 c0 -39 104 -1015 115 -1084 l5 -31 127 16 c109 13 127 18
          134 35 4 11 18 128 30 260 l24 240 25 -249 c14 -137 30 -251 35 -253 6 -1 64
          3 129 10 116 12 119 13 122 37 2 14 15 129 29 255 14 127 39 338 55 470 16
          132 30 257 32 278 1 21 6 41 11 44 6 4 7 -8 4 -28 -3 -19 -31 -257 -62 -529
          -31 -272 -60 -502 -64 -510 -6 -11 -40 -19 -117 -27 -175 -21 -156 -42 -179
          192 l-21 200 -19 -197 c-10 -109 -22 -203 -26 -210 -11 -18 -261 -49 -275 -34
          -6 6 -33 218 -60 471 -27 253 -50 444 -52 425 -2 -19 15 -199 37 -400 22 -201
          43 -395 47 -432 4 -37 12 -73 19 -78 14 -12 272 16 291 31 6 5 17 75 24 156
          l14 148 15 -144 c12 -106 20 -146 30 -149 25 -8 270 20 280 32 5 6 16 79 25
          161 9 83 37 320 61 529 25 208 45 384 45 392 0 9 -27 13 -109 13 -104 0 -109
          -2 -114 -22 -3 -12 -16 -124 -28 -249 -13 -125 -24 -226 -26 -224 -3 2 -53
          464 -53 486 0 7 -240 13 -240 7 -1 -26 -50 -501 -53 -503 -2 -2 -13 94 -26
          214 -27 265 -31 292 -43 292 -5 0 -7 -4 -4 -8 6 -11 66 -554 66 -601 0 -88 13
          1 40 283 17 169 30 310 30 312 0 3 5 2 10 -1 6 -4 8 -10 5 -15 -5 -8 -62 -573
          -70 -694 -6 -93 -15 -96 -16 -5 0 41 -17 220 -37 399 l-37 325 -92 3 -93 3 0
          -42z m575 -234 c39 -393 34 -389 71 -50 18 165 33 304 33 308 1 5 5 6 10 3 5
          -4 5 -22 0 -43 -8 -37 -66 -581 -71 -673 -2 -25 -18 101 -36 280 -19 179 -37
          349 -41 377 -4 29 -5 55 -2 58 8 9 8 9 36 -260z"/>
          <path d="M1115 1278 c-7 -30 -83 -470 -135 -786 -23 -138 -39 -259 -36 -269 6
          -14 19 -15 103 -10 61 4 102 12 111 20 7 8 19 51 26 96 7 45 15 83 17 85 2 2
          36 6 76 8 81 6 77 11 89 -95 10 -83 20 -89 139 -80 77 6 100 12 109 25 12 20
          8 45 -101 656 -37 204 -70 372 -74 372 -3 0 2 -44 12 -97 9 -54 50 -282 90
          -506 62 -349 70 -410 58 -421 -8 -8 -50 -16 -106 -19 l-91 -6 -11 27 c-13 35
          -30 152 -20 147 3 -3 10 -30 14 -62 13 -102 10 -100 112 -95 48 2 92 8 97 12
          8 8 -137 858 -166 978 l-10 42 -134 0 c-75 0 -135 -4 -139 -10 -7 -11 -63
          -329 -129 -730 -25 -151 -48 -288 -51 -304 l-5 -28 88 7 c48 4 90 10 94 14 5
          4 13 44 20 89 6 45 14 82 18 82 7 0 -14 -143 -25 -171 -5 -13 -26 -19 -97 -24
          -49 -4 -94 -3 -98 1 -5 5 2 77 16 164 49 304 145 855 154 883 5 16 5 27 0 27
          -5 0 -12 -10 -15 -22z"/>
          <path d="M1520 1225 c0 -63 3 -78 21 -96 20 -20 28 -21 95 -15 l74 7 0 -419
          c0 -354 2 -421 14 -432 18 -14 193 -4 214 12 9 8 12 105 12 424 l0 414 83 0
          c46 0 87 4 93 9 5 6 9 -114 9 -327 l0 -337 29 -58 c30 -62 86 -108 151 -125
          47 -12 235 2 271 21 48 25 102 87 119 136 22 63 32 245 15 266 -16 19 -199 22
          -218 3 -7 -7 -12 -44 -12 -96 0 -46 -5 -92 -10 -103 -12 -22 -68 -27 -88 -7
          -17 17 -17 599 0 616 7 7 27 12 45 12 42 0 53 -21 53 -102 0 -37 5 -69 12 -76
          19 -19 202 -16 218 3 19 22 5 176 -20 229 -29 62 -84 116 -120 116 -8 0 -1 -8
          15 -18 45 -28 93 -87 104 -129 6 -21 13 -68 17 -105 9 -94 4 -98 -111 -98
          -107 0 -105 -2 -105 94 0 65 -12 91 -45 99 -19 4 -19 5 1 6 37 2 52 -28 56
          -109 l3 -75 94 -3 93 -3 -4 99 c-3 88 -7 104 -31 141 -16 23 -49 55 -74 72
          -45 28 -52 29 -160 29 -128 0 -169 -13 -218 -72 -58 -68 -59 -75 -59 -423 -1
          -313 0 -321 22 -370 13 -27 35 -63 50 -80 22 -25 21 -24 -10 4 -70 64 -73 85
          -73 446 l0 320 28 57 c20 41 40 65 74 87 33 22 41 31 26 31 -27 0 -87 -56
          -112 -105 l-21 -40 0 72 0 72 -310 1 -310 0 0 -75z m880 -88 l-25 -13 -3 -314
          c-3 -348 -4 -340 62 -340 54 0 66 22 66 125 0 57 4 95 12 103 18 18 182 16
          197 -2 9 -10 11 -44 6 -112 -6 -106 -27 -169 -73 -217 -28 -30 -92 -67 -114
          -67 -7 1 3 8 22 16 55 24 99 62 122 107 18 35 23 63 26 160 l4 118 -93 -3 -94
          -3 -5 -103 c-4 -88 -8 -106 -24 -118 -30 -21 -89 -18 -112 7 -18 20 -19 42
          -22 318 -3 290 -2 298 18 324 12 15 29 27 38 27 12 0 9 -4 -8 -13z m-670 -425
          c1 -232 4 -423 8 -425 4 -2 48 -1 97 2 l90 6 3 305 c1 168 3 357 5 420 2 63 3
          -76 2 -310 l0 -425 -100 -7 c-71 -4 -102 -3 -107 5 -8 13 -11 863 -3 856 2 -3
          5 -195 5 -427z"/>
          <path d="M2760 806 c0 -369 3 -495 12 -504 8 -8 49 -12 119 -12 88 0 108 3
          113 16 3 9 6 103 6 210 l0 194 65 0 65 0 0 -197 c0 -109 5 -205 10 -213 12
          -20 203 -28 225 -10 13 11 15 85 15 511 l0 498 -125 0 -125 0 0 -195 0 -194
          -65 0 -65 0 0 194 0 195 -125 0 -125 0 0 -493z m30 -9 l-1 -482 98 0 98 0 3
          150 c1 83 4 175 5 205 2 30 3 -39 3 -155 l-1 -210 -99 -3 c-64 -2 -103 1 -112
          9 -12 9 -14 93 -14 496 0 326 3 482 10 478 7 -4 10 -171 10 -488z m576 -495
          c-12 -12 -32 -13 -113 -6 l-98 9 -3 212 -2 212 -88 4 -87 3 95 2 95 2 -3 -213
          -3 -214 96 -7 c53 -3 99 -5 103 -2 4 2 6 222 6 488 -1 265 1 488 5 493 3 6 7
          -210 9 -480 2 -412 0 -491 -12 -503z"/>
          <path d="M3450 802 c0 -273 4 -503 8 -510 12 -18 196 -29 217 -12 12 10 15 45
          15 210 l0 198 100 -5 c72 -4 104 -2 115 7 19 16 22 159 3 178 -8 8 -48 12
          -115 12 l-103 0 0 120 0 121 136 -2 c105 -1 139 2 145 13 5 7 9 48 9 90 l0 77
          -265 0 -265 0 0 -497z m20 -9 l0 -490 91 -6 c50 -4 95 -5 99 -2 5 3 9 92 10
          197 0 106 3 194 6 197 2 3 3 -87 2 -200 l-3 -204 -95 3 c-52 1 -101 4 -107 7
          -10 3 -13 113 -13 501 0 274 2 495 5 492 3 -3 5 -226 5 -495z"/>
          <path d="M4000 786 c0 -402 3 -516 13 -524 14 -12 476 -48 501 -39 25 10 24
          182 -1 196 -10 5 -75 12 -145 16 l-128 7 0 429 0 428 -120 0 -120 0 0 -513z
          m20 -5 c0 -396 2 -502 12 -506 12 -4 423 -35 461 -35 15 0 17 10 17 80 0 44
          -1 80 -2 81 -2 0 -70 7 -153 14 l-150 13 145 -5 c80 -3 151 -10 158 -15 18
          -16 17 -167 -3 -174 -14 -6 -458 23 -482 31 -10 3 -13 116 -13 516 0 282 2
          510 5 507 3 -3 5 -231 5 -507z"/>
          <path d="M4540 765 c0 -430 3 -535 13 -544 22 -17 206 -35 223 -20 12 10 14
          96 14 556 l0 544 -125 -2 -125 -1 0 -533z m23 -6 l2 -524 50 -6 c28 -4 71 -9
          97 -12 l48 -5 3 539 2 539 0 -542 0 -543 -60 4 c-33 2 -80 6 -105 10 l-45 6
          -3 534 c-1 294 0 532 3 529 3 -3 7 -241 8 -529z"/>
          <path d="M4820 1285 c0 -7 40 -127 88 -265 l89 -251 -42 -117 c-23 -64 -68
          -190 -100 -280 -45 -124 -55 -166 -47 -174 7 -7 56 -18 110 -25 78 -10 99 -10
          110 1 7 7 37 86 67 177 30 90 56 157 59 149 2 -8 27 -91 55 -185 29 -93 55
          -173 59 -177 11 -11 212 -36 212 -26 0 4 -12 8 -27 9 -16 0 -62 7 -103 14
          l-75 14 65 -5 c36 -3 81 -8 102 -11 l36 -5 -2 73 c-2 73 -32 182 -127 464
          l-31 90 81 228 c45 126 81 238 80 250 0 20 -171 -455 -171 -478 -1 -5 36 -124
          81 -264 45 -139 80 -258 79 -263 -2 -5 -32 82 -67 194 -35 112 -74 231 -86
          265 l-22 63 92 267 c51 148 90 272 86 276 -4 4 -52 6 -106 5 l-98 -3 -46 -137
          c-25 -75 -49 -139 -52 -142 -3 -3 -27 59 -53 139 -26 80 -51 145 -56 145 -5 0
          16 -73 46 -162 30 -89 54 -167 53 -173 0 -5 -26 67 -58 160 l-58 170 -111 2
          c-88 1 -112 -1 -112 -12z m115 -264 c55 -158 88 -264 83 -272 -24 -41 -189
          -532 -182 -539 5 -5 47 -11 94 -15 l85 -7 63 190 c34 105 62 199 63 209 0 13
          3 12 10 -7 21 -52 128 -414 124 -418 -5 -6 -5 -5 -40 113 -15 50 -40 134 -57
          188 l-30 99 -62 -189 -63 -188 -79 2 c-95 2 -124 9 -124 28 0 7 43 135 96 284
          l96 270 -85 243 c-47 134 -89 252 -93 263 -4 11 -3 16 1 12 5 -4 50 -124 100
          -266z"/>
          </g>
          </svg>
          <p style={{fontSize: '20px'}}>By Supratik Basu</p>
        </div>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
