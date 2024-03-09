var _____WB$wombat$assign$function_____ = function(name) {
  return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
  self.__WB_pmw = function(obj) {
      this.__WB_source = obj;
      return this;
  }
}
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

  (this.webpackJsonptylerid = this.webpackJsonptylerid || []).push([[0], {
      25: function(e, t, n) {},
      32: function(e, t, n) {},
      37: function(e, t, n) {
          "use strict";
          n.r(t);
          var c = n(1)
            , r = n.n(c)
            , a = n(9)
            , s = n.n(a)
            , o = (n(25),
          n(10))
            , i = n(7)
            , l = n.n(i)
            , b = n(12)
            , u = n(3)
            , d = n(17)
            , j = n(14)
            , h = n.n(j)
            , p = n(20)
            , f = n(16)
            , x = n.n(f)
            , O = (n(31),
          n(32),
          n.p + "/static/media/cardbg-yellow.0e6227ea.png")
            , m = n.p + "/static/media/cardbg-mint.15ba39c5.png"
            , g = n.p + "/static/media/cardbg-pink.e650dcdb.png"
            , w = n.p + "/static/media/cardbg-blue.279c7cd5.png"
            , y = n.p + "/static/media/copylayer.020bc2bd.png"
            , v = n(4)
            , k = n(5)
            , N = n(13)
            , C = n(0)
            , S = Object(c.forwardRef)((function(e, t) {
              var n = Object(c.useState)(220)
                , r = Object(u.a)(n, 2)
                , a = r[0]
                , s = r[1]
                , i = Object(c.useState)(217)
                , l = Object(u.a)(i, 2)
                , b = l[0]
                , d = l[1]
                , j = Object(c.useState)(1)
                , f = Object(u.a)(j, 2)
                , x = f[0]
                , O = f[1]
                , m = Object(c.useState)(0)
                , g = Object(u.a)(m, 2)
                , w = g[0]
                , y = g[1]
                , N = Object(c.useState)("")
                , S = Object(u.a)(N, 2)
                , I = S[0]
                , F = S[1];
              return "" === I ? Object(C.jsx)(p.a, {
                  accept: "image/*",
                  onDrop: function(e) {
                      return F(e[0])
                  },
                  disabled: "" !== I,
                  maxFiles: 1,
                  children: function(e) {
                      var t = e.getRootProps
                        , n = e.getInputProps;
                      return Object(C.jsxs)("div", Object(o.a)(Object(o.a)({}, t()), {}, {
                          children: [Object(C.jsx)("input", Object(o.a)({}, n())), Object(C.jsx)("div", {
                              className: "d-flex align-items-center justify-content-center cursor-pointer",
                              style: {
                                  height: 316,
                                  borderStyle: "solid",
                                  borderWidth: "1px",
                                  borderColor: "rgba(0, 0, 0, 1)",
                                  background: "#ffffff",
                                  color: "#000000"
                              },
                              children: Object(C.jsx)("strong", {
                                  children: "Drop or Upload"
                              })
                          })]
                      }))
                  }
              }) : Object(C.jsxs)("div", {
                  className: "position-relative",
                  children: [Object(C.jsx)(h.a, {
                      ref: t,
                      width: a,
                      height: b,
                      scale: x,
                      rotate: w,
                      image: I,
                      className: "rounded"
                  }), Object(C.jsxs)("div", {
                      className: "input-group mb-2",
                      children: [Object(C.jsx)("div", {
                          className: "input-group-text bg-white",
                          children: Object(C.jsx)(v.a, {
                              icon: k.c
                          })
                      }), Object(C.jsx)("div", {
                          className: "form-control border-start-0 border-end-0 p-0 pt-1",
                          children: Object(C.jsx)("input", {
                              type: "range",
                              className: "form-range",
                              value: x,
                              min: 1,
                              max: 3,
                              step: .01,
                              onChange: function(e) {
                                  return O(parseFloat(e.target.value))
                              }
                          })
                      }), Object(C.jsx)("div", {
                          className: "input-group-text bg-white",
                          children: Object(C.jsx)(v.a, {
                              icon: k.d
                          })
                      })]
                  }), Object(C.jsxs)("div", {
                      className: "btn-group w-100",
                      children: [Object(C.jsx)("button", {
                          className: "btn btn-light border",
                          onClick: function() {
                              y(w + 90),
                              s(b),
                              d(a)
                          },
                          children: Object(C.jsx)(v.a, {
                              icon: k.b
                          })
                      }), Object(C.jsx)("button", {
                          className: "btn btn-light border",
                          onClick: function() {
                              y(w - 90),
                              s(b),
                              d(a)
                          },
                          children: Object(C.jsx)(v.a, {
                              icon: k.e
                          })
                      }), Object(C.jsx)("button", {
                          className: "btn btn-light border",
                          onClick: function() {
                              window.document.getElementById("top-layer").click()
                          },
                          children: Object(C.jsx)(v.a, {
                              icon: k.a
                          })
                      })]
                  })]
              })
          }
          ))
            , I = function() {
              var e = Object(b.a)(l.a.mark((function e(t, n, c, r, a, s) {
                  var o, i, b, u, d, j, h, p, f, x, v, k, N, C, S, I, D, P, T, R, E;
                  return l.a.wrap((function(e) {
                      for (; ; )
                          switch (e.prev = e.next) {
                          case 0:
                              return x = function(e) {
                                  h.rotate(e * Math.PI / 180),
                                  h.restore()
                              }
                              ,
                              e.next = 3,
                              F(O);
                          case 3:
                              return o = e.sent,
                              e.next = 6,
                              F(m);
                          case 6:
                              return i = e.sent,
                              e.next = 9,
                              F(g);
                          case 9:
                              return b = e.sent,
                              e.next = 12,
                              F(w);
                          case 12:
                              return u = e.sent,
                              e.next = 15,
                              F(y);
                          case 15:
                              if (d = e.sent,
                              j = document.createElement("canvas"),
                              h = j.getContext("2d"),
                              j.width = 2014,
                              j.height = 1277,
                              h.strokeStyle = "black",
                              h.lineWidth = 6,
                              p = 450,
                              f = 290,
                              0,
                              x(0),
                              "yellow" === s ? h.drawImage(o, 0, 0) : "mint" === s ? h.drawImage(i, 0, 0) : "pink" === s ? h.drawImage(b, 0, 0) : "blue" === s ? h.drawImage(u, 0, 0) : h.drawImage(o, 0, 0),
                              h.drawImage(d, 0, 0),
                              h.globalCompositeOperation = "source-over",
                              !t) {
                                  e.next = 42;
                                  break
                              }
                              return e.next = 31,
                              F(t);
                          case 31:
                              v = e.sent,
                              -1,
                              x(-1),
                              h.shadowColor = "#000000",
                              h.shadowBlur = 20,
                              h.shadowOffsetX = 5,
                              h.shadowOffsetY = 5,
                              h.drawImage(v, 140, 240, 810, 806),
                              h.shadowBlur = 0,
                              h.shadowOffsetX = 0,
                              h.shadowOffsetY = 0;
                          case 42:
                              if (h.globalCompositeOperation = "source-over",
                              h.fillStyle = "#000000",
                              1,
                              x(1),
                              k = h,
                              N = n,
                              h.font = "90px Nanum Pen Script",
                              C = k.measureText(N).width,
                              p = 1530 - C / 2,
                              f = 330,
                              h.fillText(N, p, f),
                              h.globalCompositeOperation = "source-over",
                              0,
                              x(0),
                              S = c,
                              h.font = "90px Nanum Pen Script",
                              I = k.measureText(S).width,
                              p = 1530 - I / 2,
                              f = 410,
                              h.fillText(c, p, f),
                              h.globalCompositeOperation = "source-over",
                              0,
                              x(0),
                              D = r,
                              h.font = "90px Nanum Pen Script",
                              P = k.measureText(D).width,
                              p = 1530 - P / 2,
                              f = 485,
                              h.fillText(r, p, f),
                              h.globalCompositeOperation = "source-over",
                              !a) {
                                  e.next = 79;
                                  break
                              }
                              return e.next = 75,
                              F(a);
                          case 75:
                              T = e.sent,
                              h.drawImage(T, 1005, 990, 800, 115),
                              e.next = 86;
                              break;
                          case 79:
                              h.fillStyle = "#000",
                              R = n,
                              h.font = "60px Rock Salt",
                              E = k.measureText(R).width,
                              p = 1415 - E / 2,
                              f = 1090,
                              h.fillText(n, p, f);
                          case 86:
                              return h.globalCompositeOperation = "source-over",
                              e.abrupt("return", j.toDataURL());
                          case 88:
                          case "end":
                              return e.stop()
                          }
                  }
                  ), e)
              }
              )));
              return function(t, n, c, r, a, s) {
                  return e.apply(this, arguments)
              }
          }()
            , F = function(e) {
              return new Promise((function(t, n) {
                  var c = new Image;
                  c.onload = function() {
                      return t(c)
                  }
                  ,
                  c.onerror = n,
                  c.src = e
              }
              ))
          }
            , D = function() {
              var e = Object(d.a)().ref
                , t = Object(c.useRef)()
                , n = Object(c.useRef)()
                , r = Object(c.useRef)()
                , a = Object(c.useRef)()
                , s = Object(c.useRef)()
                , o = Object(c.useState)("form")
                , i = Object(u.a)(o, 2)
                , j = i[0]
                , h = i[1]
                , p = Object(c.useState)("")
                , f = Object(u.a)(p, 2)
                , y = f[0]
                , F = f[1]
                , D = Object(c.useState)()
                , P = Object(u.a)(D, 2)
                , T = P[0]
                , R = (P[1],
              Object(c.useState)())
                , E = Object(u.a)(R, 2)
                , B = E[0]
                , L = (E[1],
              Object(c.useState)(""))
                , U = Object(u.a)(L, 2)
                , Y = U[0]
                , K = U[1]
                , W = Object(c.useState)(O)
                , G = Object(u.a)(W, 2)
                , J = G[0]
                , M = G[1]
                , X = Object(c.useState)("")
                , _ = Object(u.a)(X, 2)
                , z = _[0]
                , H = _[1]
                , q = Object(c.useState)("")
                , A = Object(u.a)(q, 2)
                , Q = A[0]
                , V = A[1]
                , Z = Object(c.useState)("")
                , $ = Object(u.a)(Z, 2)
                , ee = $[0]
                , te = $[1]
                , ne = Object(c.useState)("")
                , ce = Object(u.a)(ne, 2)
                , re = ce[0]
                , ae = ce[1]
                , se = Object(c.useState)()
                , oe = Object(u.a)(se, 2)
                , ie = oe[0]
                , le = oe[1]
                , be = Object(c.useState)("")
                , ue = Object(u.a)(be, 2)
                , de = ue[0]
                , je = ue[1]
                , he = Object(c.useState)(!0)
                , pe = Object(u.a)(he, 2)
                , fe = pe[0]
                , xe = pe[1]
                , Oe = Object(c.useState)(!1)
                , me = Object(u.a)(Oe, 2);
              me[0],
              me[1];
              return Object(c.useEffect)((function() {
                  "result" === j && Object(b.a)(l.a.mark((function e() {
                      var t;
                      return l.a.wrap((function(e) {
                          for (; ; )
                              switch (e.prev = e.next) {
                              case 0:
                                  return e.next = 2,
                                  I(re, z, Q, ee, de, Y);
                              case 2:
                                  t = e.sent,
                                  le(t);
                              case 4:
                              case "end":
                                  return e.stop()
                              }
                      }
                      ), e)
                  }
                  )))()
              }
              ), [j, re, z, Q, ee, de, Y]),
              Object(c.useEffect)((function() {
                  if (Y) {
                      M("yellow" === Y ? O : "mint" === Y ? m : "pink" === Y ? g : "blue" === Y ? w : O)
                  }
              }
              ), [Y]),
              Object(c.useEffect)((function() {
                  if (Q) {
                      var e = Q.replace(/\D/g, "")
                        , t = "";
                      e.length > 0 && (t += e.substring(0, 2)),
                      e.length > 2 && (t += "/" + e.substring(2, 4)),
                      e.length > 4 && (t += "/" + e.substring(4, 8)),
                      V(t)
                  }
              }
              ), [Q]),
              Object(C.jsxs)(C.Fragment, {
                  children: [Object(C.jsx)("div", {
                      className: "start-0 top-0 w-100 d-flex flex-column",
                      children: Object(C.jsxs)("div", {
                          className: "d-flex flex-column flex-fill",
                          children: ["form" === j && Object(C.jsxs)(C.Fragment, {
                              children: [Object(C.jsxs)("div", {
                                  id: "id-wrapper",
                                  children: [Object(C.jsx)("div", {
                                      id: "id-background",
                                      className: "id-layer",
                                      style: {
                                          backgroundImage: "url(".concat(J, ")")
                                      }
                                  }), Object(C.jsx)("div", {
                                      id: "id-copy",
                                      className: "id-layer"
                                  })]
                              }), Object(C.jsx)("div", {
                                  className: "position-relative",
                                  children: Object(C.jsx)("div", {
                                      className: "cursor-pointer",
                                      onClick: function() {
                                          return F("photo")
                                      },
                                      children: re ? Object(C.jsx)("img", {
                                          src: re,
                                          className: "imageuploaded",
                                          alt: "Your ID Photo Upload"
                                      }) : Object(C.jsx)("button", {
                                          className: "imageupload",
                                          children: "Submit Photo"
                                      })
                                  })
                              }), Object(C.jsx)("input", {
                                  ref: t,
                                  type: "text",
                                  id: "form-control-full-name",
                                  className: "handwriting",
                                  placeholder: "Name",
                                  autoComplete: "off",
                                  value: z,
                                  onChange: function(e) {
                                      return H(e.target.value)
                                  },
                                  onKeyDown: function(e) {
                                      return "Enter" === e.key
                                  }
                              }), Object(C.jsx)("input", {
                                  ref: n,
                                  type: "text",
                                  id: "form-control-date-of-birth",
                                  className: "handwriting",
                                  placeholder: "Date Of Birth",
                                  autoComplete: "off",
                                  maxLength: 10,
                                  value: Q,
                                  onChange: function(e) {
                                      return V(e.target.value)
                                  },
                                  onKeyDown: function(e) {
                                      return "Enter" === e.key
                                  }
                              }), Object(C.jsx)("input", {
                                  ref: r,
                                  type: "text",
                                  id: "form-control-location",
                                  className: "handwriting",
                                  placeholder: "Location",
                                  autoComplete: "off",
                                  value: ee,
                                  onChange: function(e) {
                                      return te(e.target.value)
                                  },
                                  onKeyDown: function(e) {
                                      return "Enter" === e.key
                                  }
                              }), Object(C.jsx)("div", {
                                  className: "position-absolute cursor-pointer signature-box",
                                  onClick: function() {
                                      F("signature"),
                                      je(""),
                                      xe(!0)
                                  },
                                  children: de ? Object(C.jsx)("img", {
                                      src: de,
                                      className: "w-100 h-100",
                                      alt: "Signature"
                                  }) : Object(C.jsx)(C.Fragment, {
                                      children: z || "Sign Here"
                                  })
                              }), Object(C.jsx)("button", {
                                  className: "text-uppercase letter-spaced color-button",
                                  onClick: function() {
                                      F("color")
                                  },
                                  children: Object(C.jsx)("strong", {
                                      children: "Select Color"
                                  })
                              }), Object(C.jsx)("button", {
                                  className: "text-uppercase letter-spaced submit-button",
                                  onClick: function() {
                                      h("result")
                                  },
                                  children: Object(C.jsx)("strong", {
                                      children: "Get Your ID"
                                  })
                              })]
                          }), "result" === j && Object(C.jsxs)(C.Fragment, {
                              children: [Object(C.jsx)("div", {
                                  ref: e,
                                  className: "d-flex flex-fill align-items-center justify-content-center idcontainer",
                                  children: ie && Object(C.jsx)("img", {
                                      src: ie,
                                      style: {
                                          width: T,
                                          height: B
                                      },
                                      alt: "Your ID"
                                  })
                              }), Object(C.jsx)("div", {
                                  className: "d-flex align-items-center justify-content-center pb-1",
                                  children: Object(C.jsxs)("div", {
                                      children: [Object(C.jsx)("button", {
                                          className: "btn mx-1 text-uppercase letter-spaced result-button",
                                          style: {
                                              width: 150,
                                              height: 56
                                          },
                                          onClick: function() {
                                              return h("form")
                                          },
                                          children: Object(C.jsx)("strong", {
                                              children: "Back"
                                          })
                                      }), Object(C.jsx)("a", {
                                          download: "callmeifyougetlostid.png",
                                          href: ie,
                                          className: "btn mx-1 text-uppercase letter-spaced result-button mobile-buttons",
                                          style: {
                                              width: 150,
                                              height: 56
                                          },
                                          children: Object(C.jsxs)("strong", {
                                              children: ["Save To", Object(C.jsx)("br", {}), "Photos"]
                                          })
                                      }), Object(C.jsx)("a", {
                                          download: "callmeifyougetlostid.png",
                                          href: ie,
                                          className: "btn mx-1 text-uppercase letter-spaced result-button desktop-buttons",
                                          style: {
                                              width: 150,
                                              height: 56
                                          },
                                          children: Object(C.jsx)("strong", {
                                              children: "Download Or Save To Photos"
                                          })
                                      }), Object(C.jsx)("div", {
                                          className: "split-rows",
                                          children: "\xa0"
                                      }), Object(C.jsx)("a", {
                                          href: "https://www.facebook.com/sharer/sharer.php?u=https://www.callmeifyougetlost.com/generator",
                                          target: "_blank",
                                          className: "btn mx-1 text-uppercase letter-spaced result-button",
                                          style: {
                                              width: 150,
                                              height: 56
                                          },
                                          children: Object(C.jsx)("strong", {
                                              children: "Share On Facebook"
                                          })
                                      }), Object(C.jsx)("a", {
                                          href: "https://twitter.com/intent/tweet?url=https://www.callmeifyougetlost.com/generator&text=Get%20your%20passport%20and%20#callmeifyougetlost",
                                          target: "_blank",
                                          className: "btn mx-1 text-uppercase letter-spaced result-button",
                                          style: {
                                              width: 150,
                                              height: 56
                                          },
                                          children: Object(C.jsx)("strong", {
                                              children: "Share On Twitter"
                                          })
                                      })]
                                  })
                              })]
                          })]
                      })
                  }), y && Object(C.jsxs)("div", {
                      className: "position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center",
                      children: [Object(C.jsx)("div", {
                          id: "top-layer",
                          className: "position-absolute start-0 top-0 w-100 h-100 bg-black",
                          style: {
                              opacity: .5
                          },
                          onClick: function() {
                              a.current && ae(a.current.getImage().toDataURL()),
                              F("")
                          }
                      }), Object(C.jsxs)("div", {
                          className: "position-relative p-3",
                          style: {
                              width: 320
                          },
                          children: ["color" === y && Object(C.jsxs)(C.Fragment, {
                              children: [Object(C.jsx)("button", {
                                  className: "btn btn-light border btn-color-pick",
                                  style: {
                                      background: "#e2d2a7"
                                  },
                                  onClick: function() {
                                      return K("yellow")
                                  }
                              }), Object(C.jsx)("button", {
                                  className: "btn btn-light border btn-color-pick",
                                  style: {
                                      background: "#b4d7b3"
                                  },
                                  onClick: function() {
                                      return K("mint")
                                  }
                              }), Object(C.jsx)("button", {
                                  className: "btn btn-light border btn-color-pick",
                                  style: {
                                      background: "#ddc1c6"
                                  },
                                  onClick: function() {
                                      return K("pink")
                                  }
                              }), Object(C.jsx)("button", {
                                  className: "btn btn-light border btn-color-pick",
                                  style: {
                                      background: "#b7ced0"
                                  },
                                  onClick: function() {
                                      return K("blue")
                                  }
                              }), Object(C.jsx)("button", {
                                  className: "btn btn-light border okay-btn",
                                  onClick: function() {
                                      F("")
                                  },
                                  children: Object(C.jsx)(v.a, {
                                      icon: k.a
                                  })
                              })]
                          }), "photo" === y && Object(C.jsxs)(C.Fragment, {
                              children: [Object(C.jsx)(S, {
                                  ref: a
                              }), Object(C.jsx)("button", {
                                  className: "btn btn-light border okay-btn",
                                  onClick: function() {
                                      F("")
                                  },
                                  children: Object(C.jsx)(v.a, {
                                      icon: N.a
                                  })
                              })]
                          }), "signature" === y && Object(C.jsxs)(C.Fragment, {
                              children: [Object(C.jsxs)("div", {
                                  className: "position-relative",
                                  children: [fe && Object(C.jsx)("strong", {
                                      className: "position-absolute start-0 top-0 w-100 d-flex align-items-center justify-content-center text-white",
                                      style: {
                                          height: 100
                                      },
                                      children: "Signature"
                                  }), Object(C.jsx)(x.a, {
                                      ref: s,
                                      onBegin: function() {
                                          return xe(!1)
                                      },
                                      onEnd: function() {
                                          return je(s.current.getCanvas().toDataURL())
                                      },
                                      canvasProps: {
                                          width: 278,
                                          height: 40,
                                          className: "position-relative border-5 rounded",
                                          style: {
                                              borderStyle: "solid",
                                              borderWidth: "1px",
                                              background: "#ffffff",
                                              borderColor: "rgba(0, 0, 0, 1)"
                                          }
                                      }
                                  }), Object(C.jsx)("button", {
                                      className: "btn btn-light border okay-btn",
                                      onClick: function() {
                                          F("")
                                      },
                                      children: Object(C.jsx)(v.a, {
                                          icon: k.a
                                      })
                                  }), Object(C.jsx)("div", {
                                      className: "text-end text-white",
                                      children: z
                                  })]
                              }), !fe && Object(C.jsx)("button", {
                                  className: "btn btn-text position-absolute end-0 top-0",
                                  onClick: function() {
                                      xe(!0),
                                      s.current.clear(),
                                      je(s.current.getCanvas().toDataURL())
                                  },
                                  children: Object(C.jsx)(v.a, {
                                      icon: N.a,
                                      style: {
                                          color: "#FFF",
                                          fontSize: 30,
                                          filter: "drop-shadow(1px 3px 2px #000)"
                                      }
                                  })
                              })]
                          })]
                      })]
                  })]
              })
          }
            , P = function(e) {
              e && e instanceof Function && n.e(3).then(n.bind(null, 38)).then((function(t) {
                  var n = t.getCLS
                    , c = t.getFID
                    , r = t.getFCP
                    , a = t.getLCP
                    , s = t.getTTFB;
                  n(e),
                  c(e),
                  r(e),
                  a(e),
                  s(e)
              }
              ))
          };
          s.a.render(Object(C.jsx)(r.a.StrictMode, {
              children: Object(C.jsx)(D, {})
          }), document.getElementById("root")),
          P()
      }
  }, [[37, 1, 2]]]);
  //# sourceMappingURL=main.ce7c4279.chunk.js.map

}
