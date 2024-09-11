import { useState } from "react"
import $ from 'jquery';
import 'jquery-ui/ui/widgets/sortable';
import 'jquery-ui/ui/widgets/draggable';
import 'jquery-ui/ui/widgets/resizable';
import 'jquery-ui/themes/base/all.css';  
export const FrontPage = () => {
  const [color, Setcolor] = useState('')
  const changeColor = (bgcolor) => {
    Setcolor(bgcolor)
  }
  const text = () => {
    const div = document.createElement('div')
    div.setAttribute("class", "textDiv")
    const newTextEle=document.createElement("p")
    const inpt = document.createElement('input')
    inpt.setAttribute("class", "inpt")
    newTextEle.setAttribute("class", "para")
    document.querySelector(".editor").appendChild(inpt)
    inpt.addEventListener('mouseleave',()=>{
      newTextEle.textContent=inpt.value
      inpt.style.display="none"
      div.appendChild(newTextEle)
      document.querySelector(".editor").appendChild(div)
      $('.textDiv').draggable({ containment: '#Editor1',scroll: false });
      $( ".para" ).resizable({
        containment: "#Editor1"
      })
    })
    newTextEle.addEventListener('click',()=>{
      newTextEle.style.display="none"
      div.style.display="none"
      inpt.style.display="block"
      inpt.addEventListener('mouseleave',()=>{
        newTextEle.textContent=inpt.value
        inpt.style.display="none"
        newTextEle.style.display="block"
        div.style.display="block"
        div.appendChild(newTextEle)
        document.querySelector(".editor").appendChild(div)
        $('.textDiv').draggable({ containment: '#Editor1',scroll: false });
        $( ".para" ).resizable({
          containment: "#Editor1"
        })
      })
    })
  }
  const btn = () => {
    const newTextEle=document.createElement("div")
    const inpt = document.createElement('button')
    newTextEle.setAttribute('id', 'btn_add')
    inpt.textContent = "Click here"
    newTextEle.appendChild(inpt)
    document.querySelector(".editor").appendChild(newTextEle)
    $('#btn_add').draggable({ containment: '#Editor1',scroll: false });
  }

  const img = () => {
    const fileRd = document.createElement('input')
    fileRd.type = "file"
    const imgEle = document.createElement('img')
    imgEle.setAttribute("class","image")
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
        $('.image').draggable({ containment: '#Editor1',scroll: false });
      }
    })
  }
    const vid_add = () => {
      const fileRd = document.createElement('input')
      fileRd.type = "file"
      const vidEle = document.createElement("video")
      vidEle.setAttribute('id',"vid")
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
          $('#vid').draggable({ containment: '#Editor1',scroll: false });

        }
      })
    }


    return (
      <div className="main">
        <header>
          <div className="name">
            <i className="fa-solid fa-feather"></i>
            <h1>WebSite Builder</h1>
          </div>
        </header>
        <div className="builder">
          <div className="build__area">
            <div className="editor" id="Editor1" style={{ background: color }}>
              
            </div>
            {/* {$('#Editor1').sortable()} */}
          </div>
          <div className="design__area">
            <h3>Tools</h3>
            <div className="formatting__tools">
              <i onClick={text} className="fa-solid fa-font"></i>
              <i onClick={img} className="fa-regular fa-image"></i>
              <i onClick={btn} className="fa-solid fa-toggle-on"></i>
              <i onClick={vid_add} className="fa-solid fa-file-video"></i>
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