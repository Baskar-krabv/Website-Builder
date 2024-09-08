import { useState } from "react"
// import $ from 'jquery';
// import 'jquery-ui/ui/widgets/draggable'; 
// import { useEffect } from "react";
export const FrontPage = () => {
  // useEffect(() => {
  //   $(function () {
  //     $("#Btn").draggable({ containment: "#Editor1", scroll: false });
  //   });
  // }, []);


  const [color, Setcolor] = useState('')
  const changeColor = (bgcolor) => {
    Setcolor(bgcolor)
  }


  const text = () => {
    // const newTextEle=document.createElement("div")
    const inpt = document.createElement('input')
    inpt.setAttribute("id", "inpt")
    document.querySelector(".editor").appendChild(inpt)
  }


  const btn = () => {
    // const newTextEle=document.createElement("div")
    const inpt = document.createElement('button')
    inpt.setAttribute('id', 'btn_add')
    inpt.textContent = "Click here"
    document.querySelector(".editor").appendChild(inpt)
  }


  const img = () => {
    const fileRd = document.createElement('input')
    fileRd.type = "file"
    const imgEle = document.createElement('img')
    document.querySelector(".editor").appendChild(fileRd)
    fileRd.addEventListener('change', () => {
      const imgSrc = fileRd.files[0]
      if (imgSrc) {
        const reader = new FileReader()
        reader.onload = function (e) {
          imgEle.src = e.target.result
        }
        reader.readAsDataURL(imgSrc)
        fileRd.style.display = "none"
        document.querySelector(".editor").appendChild(imgEle)
      }
    })
  }


    const vid_add = () => {
      const fileRd = document.createElement('input')
      fileRd.type = "file"
      const vidEle = document.createElement("video")
      document.querySelector(".editor").appendChild(fileRd)
      fileRd.addEventListener('change', () => {
        const vidSrc = fileRd.files[0]
        if (vidSrc) {
          const reader = new FileReader()
          reader.onload = function (e) {
            vidEle.src = e.target.result
          }
          reader.readAsDataURL(vidSrc)
          fileRd.style.display = "none"
          document.querySelector(".editor").appendChild(vidEle)
        }
      })
    }


    return (
      <div className="main">
        <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
        </head>
        <header>
          <div className="name">
            <i class="fa-solid fa-feather"></i>
            <h1>WebSite Builder</h1>
          </div>
        </header>
        <div className="builder">
          <div className="build__area">
            <div className="editor" id="Editor1" style={{ background: color }}>
            </div>
          </div>
          <div className="design__area">
            <h3>Tools</h3>
            <div className="formatting__tools">
              <i onClick={text} className="fa-solid fa-font"></i>
              <i onClick={img} className="fa-regular fa-image"></i>
              <i onClick={btn} className="fa-solid fa-toggle-on"></i>
              <i onClick={vid_add} class="fa-solid fa-file-video"></i>
            </div>
            <h3>Colors</h3>
            <div className="templates">
              <button onClick={() => changeColor('linear-gradient(90deg,#2629A8,#FA0E94)')}><img src="2328019.jpg" alt="" className="img1" /></button>
              <button onClick={() => changeColor('linear-gradient(90deg,#E26B89,#A660A6)')}><img src="5419262.jpg" alt="" className="img2" /></button>
              <button onClick={() => changeColor('linear-gradient(90deg,#151821,#151821)')}><img src="5943732.jpg" alt="" className="img3" /></button>
              <button onClick={() => changeColor('linear-gradient(90deg,#FB567F,#FB567F)')}><img src="6701820.jpg" alt="" className="img4" /></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
